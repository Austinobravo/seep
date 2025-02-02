import { NextResponse } from "next/server"
import path from "path"
import prisma from '@/prisma/prisma'
import fs from 'fs'
import { getCurrentUser } from "@/lib/serverSession"
import { newsFormSchema } from "@/lib/formSchema"
import { createUniqueSlug } from "@/lib/globals"


export async function POST (req:Request, res: Response){
    const user = await getCurrentUser()
    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const formData = await req.formData()
    const file = formData.get('image') as any; // Access the file from the request
    const title = formData.get('title') as string;
    const categoryId = formData.get('category') as string;
    const otherOptions = formData.get('otherOptions') as string;
    const contents = JSON.parse(formData.get('contents') as string) as Array<{heading: string; paragraph: string}>;

    const formDataToJson = {
        title: title,
        otherOptions: otherOptions,
        image: file,
        category: categoryId,
        contents: contents,
    }

    const parsedForm = await newsFormSchema.safeParseAsync(formDataToJson)
    if(!parsedForm.success){
        console.log("err", parsedForm.error)
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    if(!file || typeof file === "string"){
        return NextResponse.json({status:400, message: "Invalid file"})
    }
    if(!title || !categoryId || !contents){
        return NextResponse.json({status:400, message: "Invalid form"})
    }
    
    if(!Array.isArray(contents)){
        return NextResponse.json({status:400, message: "Invalid content type"})
    }
    
    const uploadDir = path.join(process.cwd(), 'public/images/news')
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir, {recursive: true})
    }

    const slugged_title = await createUniqueSlug(title)

    
    try{
        const newPost = await prisma.$transaction(async (newPrisma:any) => {
            // Save the image file
            const fileName = `${file.name}`;
            const filePath = path.join(uploadDir, fileName)
            const fileBuffer = new Uint8Array(await file.arrayBuffer())
            fs.writeFileSync(filePath, fileBuffer)

            
            const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/news/${fileName}`;

            const news = await newPrisma.news.create({
                data: {
                    image: fileUrl,
                    slug: slugged_title,
                    title,
                    categoryId,
                    otherOptions: otherOptions,
                    userId: user.username
                },
                include: {
                    user:{
                        select:{
                            firstName: true,
                            lastName: true,
                            username: true
                        }
                    },
                    newsContent: {
                        select: {
                            heading: true,
                            paragraph: true
                        }
                    }
                }
            })
            
            await Promise.all(contents.map(async (content)=> {
                await newPrisma.newsContent.create({
                    data: {
                        heading: content.heading,
                        paragraph: content.paragraph,
                        newsId: news.id,
                    }
                })
                
            }))

            return news

        })
        console.log("new", newPost)


        return NextResponse.json({data: newPost, message: "Uploaded successfully" }, {status: 201});
    }
    catch(error){
        console.error("error", error)
        return NextResponse.json({message: "Internal Server Error" }, {status: 500})
    }
}

export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const newsStats = await prisma.news.findMany({
            orderBy:{
                createdAt: "desc"
            },
            include: {
                user:{
                    select:{
                        firstName: true,
                        lastName: true,
                        username: true
                    }
                },
                newsContent: {
                    select: {
                        heading: true,
                        paragraph: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                }
            }
            
        })

        return NextResponse.json(newsStats, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json(error)

    }
    
}

export async function PATCH(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const formData = await req.formData()
    const id = formData.get('id') as any; // Access the file from the request
    let file = formData.get('image') as any; // Access the file from the request
    const title = formData.get('title') as string;
    const categoryId = formData.get('category') as string;
    const otherOptions = formData.get('otherOptions') as string;
    const contents = JSON.parse(formData.get('contents') as string) as Array<{id: string, heading: string; paragraph: string}>;

    
    // const formDataToJson = {
    //     title: title,
    //     otherOptions: otherOptions,
    //     image: file,
    //     category: categoryId,
    //     contents: contents,
    // }

    // const parsedForm = await newsFormSchema.safeParseAsync(formDataToJson)
    // if(!parsedForm.success){
    //     return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    // }

    const news = await prisma.news.findUnique({
        where:{
            id
        }
    })

    console.log("contents", contents)

    if(!news){
        return NextResponse.json({message: "News doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedNews = await prisma.$transaction(async (newPrisma) => {
            if(file instanceof File){
                const uploadDir = path.join(process.cwd(), 'public/images/news')
                if(!fs.existsSync(uploadDir)){
                    fs.mkdirSync(uploadDir, {recursive: true})
                }
        
                // Save the image file
                const fileName = `${file.name}`;
                const filePath = path.join(uploadDir, fileName)
                const fileBuffer = new Uint8Array(await file.arrayBuffer())
                fs.writeFileSync(filePath, fileBuffer)
        
                
                 file = `${process.env.NEXT_PUBLIC_BASE_URL}/images/news/${fileName}`;
            }
            
    
            const updatedNews = await newPrisma.news.update({
                where:{
                    id
                },
                data:{
                    title: title,
                    categoryId: categoryId,
                    otherOptions: otherOptions,
                    image: file,
                    newsContent:{
                        upsert: contents.map((content) => (
                            {
                                where: {
                                    id: content.id || "",
                                },
                                update: {
                                    
                                    heading: content.heading,
                                    paragraph: content.paragraph,
                                },
                                create:{
                                    heading: content.heading,
                                    paragraph: content.paragraph,
                                    
                                }
                            }
                        ))
                    },
                    
                },
                include:{
                    user:{
                        select:{
                            firstName: true,
                            lastName: true,
                            username: true
                        }
                    },
                    newsContent: {
                        select: {
                            heading: true,
                            paragraph: true
                        }
                    }
                }
            })

            return updatedNews
        })

        return NextResponse.json({data: updatedNews, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        console.log("err", error)
        return NextResponse.json(error)
    }

}
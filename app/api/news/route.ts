import { NextResponse } from "next/server"
import path from "path"
import prisma from '@/prisma/prisma'
import fs from 'fs'
import { getCurrentUser } from "@/lib/serverSession"
import { newsFormSchema } from "@/lib/formSchema"
import { createUniqueSlug } from "@/lib/globals"


export async function POST (req:Request, res: Response){
    const user = getCurrentUser()
    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const formData = await req.formData()
    const file = formData.get('image'); // Access the file from the request
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const otherOptions = formData.get('otherOptions') as string;
    const contents = JSON.parse(formData.get('contents') as string) as Array<{heading: string; paragraph: string}>;

    const formDataToJson = {
        title: title,
        otherOptions: otherOptions,
        file: file,
        category: category,
        contents: contents,
    }

    const parsedForm = await newsFormSchema.safeParseAsync(formDataToJson)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }


    console.log("file", file)
    console.log("title", title)
    console.log("category", category)
    console.log("content", contents)
    console.log("other", otherOptions)
    if(!file || typeof file === "string"){
        return NextResponse.json({status:400, message: "Invalid file"})
    }
    if(!title || !category || !contents){
        return NextResponse.json({status:400, message: "Invalid form"})
    }
    
    if(!Array.isArray(contents)){
        return NextResponse.json({status:400, message: "Invalid content type"})
    }
    
    const uploadDir = path.join(process.cwd(), 'public/images/news')
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir, {recursive: true})
    }

    const slugged_title = createUniqueSlug(title)
    
    try{
        await prisma.$transaction(async (newPrisma:any) => {
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
                    category,
                    otherOptions: otherOptions
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

        })

        return NextResponse.json({message: "Uploaded successfully" }, {status: 201});
    }
    catch(error){
        console.error("error", error)
        return NextResponse.json({message: "Internal Server Error" }, {status: 500})
    }
}
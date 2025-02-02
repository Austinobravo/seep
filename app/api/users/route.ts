
import { hashedPassword } from './../../../lib/globals';
import { NextResponse } from "next/server"
import path from "path"
import prisma from '@/prisma/prisma'
import fs from 'fs'
import { getCurrentUser } from "@/lib/serverSession"
import { newsFormSchema, userFormSchema } from "@/lib/formSchema"
import { comparePassword, createUniqueSlug } from "@/lib/globals"


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
        const userStats = await prisma.user.findMany({
            orderBy:{
                createdAt: "desc"
            },
            omit:{
                password: true
            },
            include: {
                
            }
            
        })

        return NextResponse.json(userStats, {status: 200})

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
    const username = formData.get('username') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const bio = formData.get('bio') as string;
    const password = formData.get('password') as string;
    let new_password = formData.get('new_password') as string;
    const confirm_password = formData.get('confirm_password') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    
    const formDataToJson = {
        username : username,
        firstName : firstName,
        lastName : lastName,
        bio : bio,
        password : password,
        new_password : new_password,
        confirm_password : confirm_password,
        email : email,
        phone : phone,
    }
    console.log("data", formDataToJson)

    const parsedForm = await userFormSchema.safeParseAsync(formDataToJson)
    if(!parsedForm.success){
        console.log("parsed err", parsedForm.error)
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }
    
    const existingUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })

    if(!existingUser){
        return NextResponse.json({message: "User do not exist."}, {status: 400})
    }
    
    
    if(new_password){
        const isCorrectPassword = await comparePassword(password, existingUser.password.trim())
        
        
        if(!isCorrectPassword){
            return NextResponse.json({message: "Incorrect password."}, {status: 400})
        }
        
        
        if(new_password !== confirm_password){
            return NextResponse.json({message: "Password don't match."}, {status: 400})
        }

        if(password === (new_password || confirm_password)){
            return NextResponse.json({message: "You can't change your password to the same password.."}, {status: 400})
        }
        new_password = await hashedPassword(new_password)

    }
    
    
    const existingUsername = await prisma.user.findFirst({
        where:{
            username: username,
            NOT:{
                id: user.id
            }
        },

    })

    if(existingUsername){
        return NextResponse.json({message: "This username is already been used."}, {status: 400})
    }

    
    
    
    try{
        const updatedUser = await prisma.$transaction(async (newPrisma) => {

            if(file instanceof File){
                const uploadDir = path.join(process.cwd(), 'public/images/user')
                if(!fs.existsSync(uploadDir)){
                    fs.mkdirSync(uploadDir, {recursive: true})
                }
        
                // Save the image file
                const fileName = `${file.name}`;
                const filePath = path.join(uploadDir, fileName)
                const fileBuffer = new Uint8Array(await file.arrayBuffer())
                fs.writeFileSync(filePath, fileBuffer)
        
                
                 file = `${process.env.NEXT_PUBLIC_BASE_URL}/images/user/${fileName}`;
            }
            
    
            const updatedUser = await newPrisma.user.update({
                where:{
                    id: user.id
                },
                data:{
                    username: username || existingUser.username,
                    firstName: firstName || existingUser.firstName,
                    lastName: lastName || existingUser.lastName,
                    bio: bio || existingUser.bio,
                    password: new_password || existingUser.password,
                    email: email || existingUser.email,
                    phone: phone || existingUser.phone,
                    image:file
                       
                },
                
            })

            return updatedUser
        })

        return NextResponse.json({data: updatedUser, message: "Profile updated successfully"}, {status: 200})
        
    }
    catch(error){
        console.log("err", error)
        return NextResponse.json({message:  "An error occurred while updating your profile."}, {status: 500})
    }

}
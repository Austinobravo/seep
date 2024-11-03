import { NextResponse } from "next/server"
import path from "path"
import prisma from '@/prisma/prisma'
import fs from 'fs/promises'
import slug from "slug"
import { v4 as uuidv4 } from 'uuid'


export async function POST (req:Request, res: Response){
    const formData = await req.formData()
    const file = formData.get('image'); // Access the file from the request
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const contents = JSON.parse(formData.get('contents') as string) as Array<{heading: string; paragraph: string}>;


    console.log("file", file)
    console.log("title", title)
    console.log("category", category)
    console.log("content", contents)
    if(!file || typeof file === "string"){
        return NextResponse.json({status:400, message: "Invalid file"})
    }
    if(!title || !category || !contents){
        return NextResponse.json({status:400, message: "Invalid form"})
    }
    
    if(!Array.isArray(contents)){
        return NextResponse.json({status:400, message: "Invalid content type"})
    }
    
    const uniqueFileName = `${uuidv4()}-${file.name}`;
    const filePath = path.join(process.cwd(), 'public/images/news', uniqueFileName);

    
    const slugged_title = slug(title)
    
    try{
        await prisma.$transaction(async (newPrisma:any) => {
            // Save the image file
            const buffer = Buffer.from(await file.arrayBuffer());
            await fs.writeFile(filePath, buffer as any);
            
            const uniqueFileName = `${uuidv4()}-${file.name}`;
            const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/news/${uniqueFileName}`;

            const news = await newPrisma.news.create({
                data: {
                    image: fileUrl,
                    slug: slugged_title,
                    title,
                    category,
                }
            })
            
            await Promise.all(contents.map(async (content)=> {
                await newPrisma.newsContent.create({
                    data: {
                        heading: content.heading,
                        paragraph: content.paragraph,
                        newsId: news.id
                    }
                })
                
            }))

        })
        console.log("file", filePath)
        console.log("title", title)
        console.log("category", category)
        console.log("content", contents)
        console.log("slug", slugged_title)
        return NextResponse.json({ status: 201, message: "File uploaded successfully" });
    }
    catch(error){
        console.error("error", error)
        return NextResponse.json(error, {status: 500})
    }
}
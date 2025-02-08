import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { getCurrentUser } from "@/lib/serverSession";
import { galleryCategoryFormSchema, galleryImageFormSchema } from "@/lib/formSchema";
import path from "path"
import fs from 'fs'

export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const galleryImages = await prisma.galleryImage.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })


        return NextResponse.json(galleryImages, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json({message:  "Internal server error"}, {status: 500})

    }
    
}
export async function POST(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const formData = await req.formData()
    const images = formData.getAll('images') as File[]
    const categoryId = formData.get('categoryId') as string
    const description = formData.get('description') as string
    const driveImages = formData.getAll('driveImages') as string[]

    console.log("images", images.forEach((image) => console.log(image)))
    console.log("categoryId", categoryId)
    console.log("description", description)
    console.log("driveImages", driveImages)

    const data = {
        description: description,
        categoryId: categoryId,
    }

    const parsedForm = await galleryImageFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    
    try{
        let newImages:any[] = []
            if( images.length >= 1){
                 newImages = images.map(async (file) => {
                    if(file instanceof File){
                        const uploadDir = path.join(process.cwd(), 'public/images/gallery')
                        if(!fs.existsSync(uploadDir)){
                            fs.mkdirSync(uploadDir, {recursive: true})
                        }
                
                        // Save the image file
                        const fileName = `${file.name}`;
                        const filePath = path.join(uploadDir, fileName)
                        const fileBuffer = new Uint8Array(await file.arrayBuffer())
                        fs.writeFileSync(filePath, fileBuffer)
                
                        
                        const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/news/${fileName}`;
    
                         const newImage = await prisma.galleryImage.create({
                            data:{
                                description:  description,
                                galleryCategoryId: categoryId,
                                userId: user.username,
                                image: imageUrl
                            }
                         })
                    }
                    
    
                })
            }
            
            if(driveImages.length >= 1){
                 newImages = driveImages.map(async (file) => {
                    if(file){
                        
                         const newImage = await prisma.galleryImage.create({
                            data:{
                                description:  description,
                                galleryCategoryId: categoryId,
                                userId: user.username,
                                image: file
                            }
                         })
                    }
                    
    
                })

            }

        return NextResponse.json({data: newImages,  message: 'Images uploaded successfully'}, {status: 201})

    }
    catch(error){
        console.error('err', error)
        return NextResponse.json({message:  "Internal server error"}, {status: 500})
    }

}
import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { getCurrentUser } from "@/lib/serverSession";
import {  galleryImageFormSchema } from "@/lib/formSchema";
import path from "path"
import fs from 'fs'


export async function GET(req:Request) {
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    


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
    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const formData = await req.formData()
    const images = formData.getAll('images') as File[]
    const categoryId = formData.get('categoryId') as string
    const description = formData.get('description') as string
    const driveImages = formData.getAll('driveImages') as string[]

    const data = {
        description: description,
        categoryId: categoryId,
    }

    const parsedForm = await galleryImageFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        const errorMessage = parsedForm.error.errors.map((error) => `${error.path.join(".")} - ${error.message}`).join(", ")
        return NextResponse.json({message: errorMessage}, {status: 400})
    }

    
    try{
        let newImages:any[] = []
            if( images.length >= 1){
                 newImages = images.map(async (file) => {
                    if(file instanceof File){
                        const uploadDir = path.join(process.cwd(), 'public/images/gallery')
                        if (!fs.existsSync(uploadDir)) {
                            fs.mkdirSync(uploadDir, { recursive: true });
                        }
                    
                        // Generate a unique filename using UUID
                        const fileExt = path.extname(file.name); // Get file extension
                        const baseName = path.basename(file.name, fileExt).replace(/\s+/g, ''); // Get filename without extension
                        const uniqueFileName = `${baseName}-${fileExt}`; // Append UUID to filename
                    
                        // Save the image file
                        const filePath = path.join(uploadDir, uniqueFileName);
                        const fileBuffer = new Uint8Array(await file.arrayBuffer());
                        fs.writeFileSync(filePath, fileBuffer);

                        // Construct the public URL for accessing the image
                        const imageUrl = `/images/gallery/${uniqueFileName}`;

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

export async function PATCH(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const formData = await req.formData()
    const file = formData.get('image') as File
    const categoryId = formData.get('categoryId') as string
    const description = formData.get('description') as string
    const driveImages = formData.getAll('driveImages') as string[]
    const id = formData.get('id') as string

    const data ={
        images: file,
        categoryId: categoryId,
        description: description
    }

    const parsedForm = await galleryImageFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        const errorMessage = parsedForm.error.errors.map((error) => `${error.path.join(".")} - ${error.message}`).join(", ")
        return NextResponse.json({message: errorMessage}, {status: 400})
    }

    const existingImage = await prisma.galleryImage.findUnique({
        where:{
            id
        }
    })

    if(!existingImage){
        return NextResponse.json({message: "Image doesn't exist."}, {status: 404}) 
    }

    try{
        const updatedImage = await prisma.$transaction(async(newPrisma) => {
            let imageUrl = existingImage.image
                if(file instanceof File){
                    const uploadDir = path.join(process.cwd(), 'public/images/gallery')
                    if (!fs.existsSync(uploadDir)) {
                        fs.mkdirSync(uploadDir, { recursive: true });
                    }
                
                    // Generate a unique filename using UUID
                    const fileExt = path.extname(file.name); // Get file extension
                    const baseName = path.basename(file.name, fileExt).replace(/\s+/g, ''); // Get filename without extension
                    const uniqueFileName = `${baseName}-${fileExt}`; // Append UUID to filename
                
                    // Save the image file
                    const filePath = path.join(uploadDir, uniqueFileName);
                    const fileBuffer = new Uint8Array(await file.arrayBuffer());
                    fs.writeFileSync(filePath, fileBuffer);
    
                    // Construct the public URL for accessing the image
                     imageUrl = `/images/gallery/${uniqueFileName}`;
    
                }
            const updatedImage = await prisma.galleryImage.update({
                where:{
                    id
                },
                data:{
                    image: imageUrl,
                    description,
                    galleryCategoryId: categoryId,
                    userId: user.username
                }
            })

            return updatedImage
        })

        return NextResponse.json({data: updatedImage, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}

import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { getCurrentUser } from "@/lib/serverSession";
import { galleryCategoryFormSchema } from "@/lib/formSchema";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const categoryStats = await prisma.galleryCategory.findMany({
            include: {
                _count:{
                    select: {
                        galleryImage: true
                    }
                },
                galleryImage: true
            }
        })

        const formattedStats = categoryStats.map((category) => ({
            ...category,
            totalPosts: category._count.galleryImage || 0
        }))

        return NextResponse.json(formattedStats, {status: 200})

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

    const data = await req.json()
    const title = data.title.toLocaleLowerCase()
    const subtitle = data.subtitle 

    const parsedForm = await galleryCategoryFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    const category = await prisma.galleryCategory.findUnique({
        where:{
            title: title
        }
    })

    
    if(category){
        return NextResponse.json({message: "Identical category"}, {status: 400}) 
    }

    try{
        const newCategory = await prisma.galleryCategory.create({
            data:{
                title: title,
                subtitle: subtitle,
                userId: user.username
            }
        })

        return NextResponse.json({data: newCategory, message: "Created"}, {status: 201})

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

    const data = await req.json()
    const title = data.title.toLocaleLowerCase()
    const subtitle = data.subtitle
    const id = data.id

    const parsedForm = await galleryCategoryFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    const category = await prisma.galleryCategory.findFirst({
        where:{
            id
        }
    })

    if(!category){
        return NextResponse.json({message: "Category doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedCategory = await prisma.galleryCategory.update({
            where:{
                id
            },
            data:{
                title: title,
                subtitle: subtitle,
                userId: user.username
            }
        })

        return NextResponse.json({data: updatedCategory, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}
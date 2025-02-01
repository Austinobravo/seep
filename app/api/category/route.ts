
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";


export async function GET(req:Request) {
    const user = await getCurrentUser()
    console.log("user", user)

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const categoryStats = await prisma.category.findMany({
            include: {
                _count:{
                    select: {
                        news: true
                    }
                }
            }
        })

        const formattedStats = categoryStats.map((category) => ({
            ...category,
            totalPosts: category._count.news || 0
        }))

        return NextResponse.json(formattedStats, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json(error)

    }
    
}
export async function POST(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const data = await req.json()
    const title = data.name.toLocaleLowerCase()
    const sluggedtitle = data.slug ? slug(data.slug) : slug(data.name)
    const description = data.description ? data.description : ""

    const category = await prisma.category.findUnique({
        where:{
            name: title
        }
    })

    
    if(category){
        return NextResponse.json({message: "Identical category"}, {status: 400}) 
    }

    try{
        const newCategory = await prisma.category.create({
            data:{
                name: title,
                slug: sluggedtitle,
                description: description,
                userId: user.username
            }
        })

        return NextResponse.json({data: newCategory, message: "Created"}, {status: 201})

    }
    catch(error){
        console.error('err', error)
        return NextResponse.json(error)
    }

}
export async function PATCH(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const data = await req.json()
    const title = data.name
    const sluggedtitle = data.slug
    const description = data.description
    const id = data.id

    const category = await prisma.category.findFirst({
        where:{
            id
        }
    })


    if(!category){
        return NextResponse.json({message: "Category doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedCategory = await prisma.category.update({
            where:{
                id
            },
            data:{
                name: title,
                slug: sluggedtitle,
                description: description,
                userId: user.username
            }
        })

        return NextResponse.json({data: updatedCategory, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}





import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";


export async function GET(req:Request) {
    const user = await getCurrentUser()
    console.log('user in cat', user)
    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }


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

    const category = await prisma.category.findFirst({
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
        return NextResponse.json(error)
    }

}


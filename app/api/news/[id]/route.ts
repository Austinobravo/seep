import { NextRequest, NextResponse } from "next/server"
import prisma from '@/prisma/prisma'
import { getCurrentUser } from "@/lib/serverSession"


export async function GET(req:NextRequest, {params}: {params: {id: string}}){
    const user = getCurrentUser()
    const {id} = params
    if(!user){
        return NextResponse.json({message: "Invalid user"}, {status: 401})
    }

    
    
    try{
        const news = await prisma.news.findUnique({
            where: {
                id
            },
            include:{
                newsContent: true
            }
        })
        console.log("news, news", news)
        if(!news){
            return NextResponse.json({message: "This news doesn't exist."}, {status: 400})
        }
        return NextResponse.json(news, {status: 200})

    }catch(error){
        console.log("error", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}

export async function DELETE(req:NextRequest, {params}: {params: {id: string}}){
    const user = getCurrentUser()
    const {id} = params
    if(!user){
        return NextResponse.json({message: "Invalid user"}, {status: 401})
    }

    const news = await prisma.news.findUnique({
        where: {
            id
        }
    })
    console.log('news', news)

    if(!news){
        return NextResponse.json({message: "This news doesn't exist."}, {status: 400})
    }


    try{
        const deletedNews = await prisma.news.delete({
            where: {
                id
            }
        })
        return NextResponse.json({message: "Deleted Successfully"}, {status: 200})

    }catch(error){
        console.log("error", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}
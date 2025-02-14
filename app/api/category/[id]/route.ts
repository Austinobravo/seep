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
        const category = await prisma.category.findUnique({
            where: {
                id
            }
        })
    
        if(!category){
            return NextResponse.json({message: "This category doesn't exist."}, {status: 400})
        }
        
        return NextResponse.json(category, {status: 200})

    }catch(error){
        console.log("error", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}
export async function DELETE(req:NextRequest, {params}: {params: {id: string}}){
    const user = await getCurrentUser()
    const {id} = params
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

    const category = await prisma.category.findUnique({
        where: {
            id
        }
    })

    if(!category){
        return NextResponse.json({message: "This category doesn't exist."}, {status: 400})
    }


    try{
        const deletedCategory = await prisma.category.delete({
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
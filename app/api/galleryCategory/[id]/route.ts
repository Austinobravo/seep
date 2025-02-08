import { NextRequest, NextResponse } from "next/server"
import prisma from '@/prisma/prisma'
import { getCurrentUser } from "@/lib/serverSession"

export async function GET(req:NextRequest, {params}: {params: {id: string}}){
    const user = getCurrentUser()
    const {id} = params
    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    
    
    try{
        const category = await prisma.galleryCategory.findUnique({
            where: {
                id
            },
            include:{
                galleryImage: true
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
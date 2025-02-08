import { NextRequest, NextResponse } from "next/server"
import prisma from '@/prisma/prisma'
import { getCurrentUser } from "@/lib/serverSession"



export async function DELETE(req:NextRequest, {params}: {params: {id: string}}){
    const user = getCurrentUser()
    const {id} = params
    if(!user){
        return NextResponse.json({message: "Invalid user"}, {status: 401})
    }

    const existingImage = await prisma.galleryImage.findUnique({
        where: {
            id: id
        }
    })
    if(!existingImage){
        return NextResponse.json({message: "This image doesn't exist."}, {status: 400})
    }


    try{
        const deletedImage = await prisma.galleryImage.delete({
            where: {
                id: existingImage.id
            }
        })
        return NextResponse.json({message: "Deleted Successfully"}, {status: 200})

    }catch(error){
        console.log("error", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}
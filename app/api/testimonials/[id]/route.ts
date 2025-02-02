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
        const testimonial = await prisma.testimonials.findUnique({
            where: {
                id
            }
        })
    
        if(!testimonial){
            return NextResponse.json({message: "This testimonial doesn't exist."}, {status: 400})
        }

        return NextResponse.json(testimonial, {status: 200})

    }catch(error){
        console.log("error", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}
export async function DELETE(req:NextRequest, {params}: {params: {id: string}}){
    const user = getCurrentUser()
    const {id} = params
    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const testimonial = await prisma.testimonials.findUnique({
        where: {
            id
        }
    })

    if(!testimonial){
        return NextResponse.json({message: "This testimonial doesn't exist."}, {status: 400})
    }


    try{
        const deletedtestimonial = await prisma.testimonials.delete({
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
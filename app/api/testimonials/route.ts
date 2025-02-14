
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"

import { getCurrentUser } from "@/lib/serverSession";
import { testimonialFormSchema } from "@/lib/formSchema";
import { revalidatePath, revalidateTag } from "next/cache";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const testimonials = await prisma.testimonials.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })

        return NextResponse.json(testimonials, {status: 200})

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

    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const data = await req.json()
    const content = data.content
    const individual_image = data.individual_image
    const individual_name = data.individual_name
    const school = data.school
    const program = data.program

    const parsedForm = await testimonialFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }


    try{
        const newTestimonial = await prisma.testimonials.create({
            data:{
                content,
                individual_image,
                individual_name,
                school,
                program,
                userId: user.username
            }
        })

        revalidatePath("/testimonials");
        return NextResponse.json({data: newTestimonial, message: "Created"}, {status: 201})

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

    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    const data = await req.json()
    const content = data.content
    const id = data.id
    const individual_image = data.individual_image
    const individual_name = data.individual_name
    const school = data.school
    const program = data.program


    const parsedForm = await testimonialFormSchema.safeParseAsync(data)
        if(!parsedForm.success){
            return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
        }

    const existingTestimonial = await prisma.testimonials.findUnique({
        where:{
            id
        }
    })


    if(!existingTestimonial){
        return NextResponse.json({message: "Testimonial doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedTestimonial = await prisma.testimonials.update({
            where:{
                id
            },
            data:{
                content: content,
                individual_image : individual_image,
                individual_name : individual_name,
                school : school,
                program : program,
                
            }
        })

        revalidatePath("/testimonials");
        return NextResponse.json({data: updatedTestimonial, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}




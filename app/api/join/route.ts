
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";
import { contactFormSchema, joinFormSchema, privacyAndTermsFormSchema } from "@/lib/formSchema";
import { revalidatePath } from "next/cache";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const contact = await prisma.join.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })

        return NextResponse.json(contact, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json(error)

    }
    
}
export async function POST(req:Request, res: Response) {
    
    // const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }

    const data = await req.json()
    const firstName = data.firstName 
    const email = data.email 
    const phone = data.phone 
    const lastName = data.lastName 


    const parsedForm = await joinFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }
    
    const isEmailExisting = await prisma.join.findFirst({
        where:{
            email
        }
    })
    if(isEmailExisting){
        return NextResponse.json({message: "You already sent us a mail. We will get back to you shortly."}, {status: 400})

    }



    try{
        await prisma.join.create({
            data:{
                firstName,
                email,
                phone,
                lastName
            }
        })

        return NextResponse.json({message: "We got your message and will reply shortly."}, {status: 201})

    }
    catch(error){
        console.error('err', error)
        return NextResponse.json(error)
    }

}





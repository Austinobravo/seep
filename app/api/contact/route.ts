
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";
import { contactFormSchema, privacyAndTermsFormSchema } from "@/lib/formSchema";
import { revalidatePath } from "next/cache";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const contact = await prisma.contact.findMany({
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
    const name = data.name 
    const email = data.email 
    const phone = data.phone 
    const message = data.message 


    const parsedForm = await contactFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    try{
        console.log("va", data)

        await prisma.contact.create({
            data:{
                name,
                email,
                phone,
                message
            }
        })

        return NextResponse.json({message: "We got your message."}, {status: 201})

    }
    catch(error){
        console.error('err', error)
        return NextResponse.json(error)
    }

}






import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";
import { privacyAndTermsFormSchema } from "@/lib/formSchema";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const terms = await prisma.termsAndConditions.findFirst({
            orderBy:{
                createdAt: "desc"
            }
        })

        return NextResponse.json(terms, {status: 200})

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


    const parsedForm = await privacyAndTermsFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        const errorMessage = parsedForm.error.errors.map((error) => `${error.path.join(".")} - ${error.message}`).join(", ")
        return NextResponse.json({message: errorMessage}, {status: 400})
    }

    const totalTerms = await prisma.termsAndConditions.findMany({
        orderBy:{
            createdAt: "asc"
        }
    })

    
    if(totalTerms.length >= 1){
        return NextResponse.json({message: "Terms already exist, Edit instead."}, {status: 400}) 
    }

    try{
        const newTerms = await prisma.termsAndConditions.create({
            data:{
                content,
                userId: user.username
            }
        })

        return NextResponse.json({data: newTerms, message: "Created"}, {status: 201})

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

    const parsedForm = await privacyAndTermsFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        const errorMessage = parsedForm.error.errors.map((error) => `${error.path.join(".")} - ${error.message}`).join(", ")
        return NextResponse.json({message: errorMessage}, {status: 400})
    }

    const existingTerms = await prisma.termsAndConditions.findUnique({
        where:{
            id
        }
    })


    if(!existingTerms){
        return NextResponse.json({message: "Terms doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedTerms = await prisma.termsAndConditions.update({
            where:{
                id
            },
            data:{
                content: content
            }
        })

        return NextResponse.json({data: updatedTerms, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}




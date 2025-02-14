
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import slug from 'slug';
import { getCurrentUser } from "@/lib/serverSession";
import { privacyAndTermsFormSchema } from "@/lib/formSchema";
import { revalidatePath } from "next/cache";


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const policy = await prisma.privacyPolicy.findFirst({
            orderBy:{
                createdAt: "desc"
            }
        })

        return NextResponse.json(policy, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json(error)

    }
    
}
export async function POST(req:Request, res: Response) {
    
    const user = await getCurrentUser()

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

    const data = await req.json()
    const content = data.content

    const parsedForm = await privacyAndTermsFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    const totalPolicy = await prisma.privacyPolicy.findMany({
        orderBy:{
            createdAt: "asc"
        }
    })

    
    if(totalPolicy.length >= 1){
        return NextResponse.json({message: "Privacy already exist, Edit instead."}, {status: 400}) 
    }

    try{
        const newPolicy = await prisma.privacyPolicy.create({
            data:{
                content,
                userId: user.username
            }
        })
  
        revalidatePath('/admin/others')
  

        return NextResponse.json({data: newPolicy, message: "Created"}, {status: 201})

    }
    catch(error){
        console.error('err', error)
        return NextResponse.json(error)
    }

}
export async function PATCH(req:Request, res: Response) {
    
    const user = await getCurrentUser()

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

    const data = await req.json()
    const content = data.content
    const id = data.id

    const parsedForm = await privacyAndTermsFormSchema.safeParseAsync(data)
    if(!parsedForm.success){
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }

    const existingPolicy = await prisma.privacyPolicy.findUnique({
        where:{
            id
        }
    })


    if(!existingPolicy){
        return NextResponse.json({message: "Policy doesn't exist."}, {status: 400}) 
    }

    try{
        const updatedPolicy = await prisma.privacyPolicy.update({
            where:{
                id
            },
            data:{
                content: content
            }
        })

        return NextResponse.json({data: updatedPolicy, message: "Updated"}, {status: 200})
        
    }
    catch(error){
        return NextResponse.json(error)
    }

}




import { getCurrentUser } from "@/lib/serverSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache";

export async function PATCH(req:NextRequest, res:Response){
    
    const user = await getCurrentUser()

    if(!user || user.role !== "superuser"){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }
    const id = await req.json()
    const existingUser = await prisma.user.findUnique({
        where:{
            id
        }
    })

    if(!user){
        return NextResponse.json({message: "This user doesn't exist"}, {status: 403})
    }

    try{
        const updatedUser = await prisma.user.update({
            where:{
                id
            },
            data:{
                isBlocked: !existingUser?.isBlocked,
                isActive: !existingUser?.isActive,
            }
        })

            revalidatePath('/admin/admins')

        return NextResponse.json({data: updatedUser, message: "Updated"}, {status: 200})

    }catch(error){
        console.log("errror", error)
        return NextResponse.json({message: "Error happening when creating user"}, {status: 500})
    }
}
export async function GET(req:Request, res:Response){

    try{
        // const data = await req.json()
        // console.log("data", data)
        return NextResponse.json({message: "Created user"}, {status: 200})

    }catch(error){
        console.log("errror", error)
        return NextResponse.json({message: "Error happening when creating user"}, {status: 500})
    }
}
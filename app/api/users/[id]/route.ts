import { NextRequest, NextResponse } from "next/server"
import prisma from '@/prisma/prisma'
import { getCurrentUser } from "@/lib/serverSession"

export async function GET(req:NextRequest, {params}: {params: {id: string}}){
    const user = await getCurrentUser()
    const {id} = params

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }
    try{
        const uniqueUser = await prisma.user.findUnique({
            where: {
                id
            },
            omit:{
                password: true
            },
            include:{
                roles:{
                    select:{
                        role:{
                            select:{
                                name: true
                            }
                        }
                    }
                }
            }
        })

        if(!uniqueUser){
            return NextResponse.json({message: "This user doesn't exist."}, {status: 400})
        }

        return NextResponse.json(uniqueUser, {status: 200})
        
    }catch(error){
        console.log("error here", error)
        return NextResponse.json({message: "Internal Server error"}, {status: 500})
    }

}
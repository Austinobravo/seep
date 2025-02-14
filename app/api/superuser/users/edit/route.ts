import { getCurrentUser } from "@/lib/serverSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma"

export async function PATCH(req:NextRequest, res:Response){
    
    const user = await getCurrentUser()

    if(!user || user.role !== "superuser"){
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
    const id = await req.json()
    const existingUser = await prisma.user.findUnique({
        where:{
            id
        },
        include:{
            roles:{
                select:{
                    role:true
                }
            }
        }
    })

    if(!user){
        return NextResponse.json({message: "This user doesn't exist"}, {status: 404})
    }

    const isSuperUser = existingUser?.roles.some((role) => role.role.name === "superuser")

    try{
        await prisma.$transaction(async( newPrisma)=> {
            if(isSuperUser){
                await newPrisma.userRole.deleteMany({
                    where:{
                        userId: id,
                        role: {
                            name: "superuser"
                        }
                    }
                })
    
                const hasOtherRoles = await newPrisma.userRole.findFirst({
                    where: { userId: id }
                });
    
                if (!hasOtherRoles) {
                    const defaultRole = await newPrisma.role.findUnique({
                        where: { name: "user" }
                    });
    
                    if (!defaultRole) {
                        return NextResponse.json({ message: "Default user role not found" }, { status: 500 });
                    }
    
                    await newPrisma.userRole.create({
                        data: {
                            userId: id,
                            roleId: defaultRole.id
                        }
                    });
                }
            }else{
                const superuserRole = await newPrisma.role.findUnique({
                    where: { name: "superuser" }
                });
    
                if (!superuserRole) {
                    return NextResponse.json({ message: "Superuser role not found" }, { status: 500 });
                }
    
                await newPrisma.userRole.create({
                    data: {
                        userId: id,
                        roleId: superuserRole.id
                    }
                });
            }

        })

        return NextResponse.json({message: "Updated"}, {status: 200})

    }catch(error){
        console.log("errror", error)
        return NextResponse.json({message: "Error happening when editing user"}, {status: 500})
    }
}
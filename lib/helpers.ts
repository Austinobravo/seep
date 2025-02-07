"use server"
import prisma from '@/prisma/prisma'
export const isUserEmailExisting = async (email: string) => {
    const user = await prisma.join.findUnique({
        where:{
            email
        }
    })
    console.log("user", user)
    return user
}
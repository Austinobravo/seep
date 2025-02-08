"use server"
import prisma from '@/prisma/prisma'
export const isUserEmailExisting = async (email: string) => {
    const user = await prisma.join.findUnique({
        where:{
            email
        }
    })

    return user
}
export const isUserEmailExistingInUserModel = async (email: string) => {
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })
    return user
}
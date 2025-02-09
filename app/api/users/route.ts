
import { hashedPassword } from './../../../lib/globals';
import { NextResponse } from "next/server"
import path from "path"
import prisma from '@/prisma/prisma'
import fs from 'fs'
import { getCurrentUser } from "@/lib/serverSession"
import { newsFormSchema, userFormSchema } from "@/lib/formSchema"
import { comparePassword, createUniqueSlug } from "@/lib/globals"


export async function GET(req:Request) {
    const user = await getCurrentUser()

    // if(!user){
    //     return NextResponse.json({message: "Unauthorized"}, {status: 401})
    // }


    try{
        const userStats = await prisma.user.findMany({
            orderBy:{
                createdAt: "desc"
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
        const formattedUsers = userStats.map((user) => ({
            ...user,
            role:  user.roles[0].role.name,
            roles: null
        }))
        return NextResponse.json(formattedUsers, {status: 200})

    }
    catch(error){
        console.error('err',error)
        return NextResponse.json(error)

    }
    
}

export async function PATCH(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user){
        return NextResponse.json({message: "Unauthorized"}, {status: 403})
    }

    const formData = await req.formData()
    const id = formData.get('id') as any; // Access the file from the request
    let file = formData.get('image') as any; // Access the file from the request
    const username = formData.get('username') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const bio = formData.get('bio') as string;
    const password = formData.get('password') as string;
    let new_password = formData.get('new_password') as string;
    const confirm_password = formData.get('confirm_password') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    
    const formDataToJson = {
        username : username,
        firstName : firstName,
        lastName : lastName,
        bio : bio,
        password : password,
        new_password : new_password,
        confirm_password : confirm_password,
        email : email,
        phone : phone,
    }

    const parsedForm = await userFormSchema.safeParseAsync(formDataToJson)
    if(!parsedForm.success){
        
        return NextResponse.json({data: parsedForm, message: parsedForm.error}, {status: 400})
    }
    
    const existingUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })

    if(!existingUser){
        return NextResponse.json({message: "User do not exist."}, {status: 400})
    }
    
    
    if(new_password){
        const isCorrectPassword = await comparePassword(password, existingUser.password.trim())
        
        
        if(!isCorrectPassword){
            return NextResponse.json({message: "Incorrect password."}, {status: 400})
        }
        
        
        if(new_password !== confirm_password){
            return NextResponse.json({message: "Password don't match."}, {status: 400})
        }

        if(password === (new_password || confirm_password)){
            return NextResponse.json({message: "You can't change your password to the same password.."}, {status: 400})
        }
        new_password = await hashedPassword(new_password)

    }
    
    
    const existingUsername = await prisma.user.findFirst({
        where:{
            username: username,
            NOT:{
                id: user.id
            }
        },

    })

    if(existingUsername){
        return NextResponse.json({message: "This username is already been used."}, {status: 400})
    }

    
    
    
    try{
        const updatedUser = await prisma.$transaction(async (newPrisma) => {

            if(file instanceof File){
                const uploadDir = path.join(process.cwd(), 'public/images/user')
                if(!fs.existsSync(uploadDir)){
                    fs.mkdirSync(uploadDir, {recursive: true})
                }
        
                // Save the image file
                const fileName = `${file.name}`;
                const filePath = path.join(uploadDir, fileName)
                const fileBuffer = new Uint8Array(await file.arrayBuffer())
                fs.writeFileSync(filePath, fileBuffer)
        
                
                 file = `${process.env.NEXT_PUBLIC_BASE_URL}/images/user/${fileName}`;
            }
            
    
            const updatedUser = await newPrisma.user.update({
                where:{
                    id: user.id
                },
                data:{
                    username: username || existingUser.username,
                    firstName: firstName || existingUser.firstName,
                    lastName: lastName || existingUser.lastName,
                    bio: bio || existingUser.bio,
                    password: new_password || existingUser.password,
                    email: email || existingUser.email,
                    phone: phone || existingUser.phone,
                    image:file
                       
                },
                
            })

            return updatedUser
        })

        return NextResponse.json({data: updatedUser, message: "Profile updated successfully"}, {status: 200})
        
    }
    catch(error){
        console.log("err", error)
        return NextResponse.json({message:  "An error occurred while updating your profile."}, {status: 500})
    }

}
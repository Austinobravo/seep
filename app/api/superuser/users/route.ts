import { getCurrentUser } from "@/lib/serverSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma"

import { userFormSchema } from "@/lib/formSchema";
import { hashedPassword } from "@/lib/globals";
import path from "path";
import fs from "fs"

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

    if(!existingUser){
        return NextResponse.json({message: "This user doesn't exist"}, {status: 404})
    }

    if(existingUser.id === user.id){
        return NextResponse.json({message: "User can not block/unblock themselves."}, {status: 403})
    }
    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }

    try{
        const updatedUser = await prisma.user.update({
            where:{
                id: existingUser.id
            },
            data:{
                isBlocked: !existingUser?.isBlocked,
                isActive: !existingUser?.isActive,

            }
        })

        return NextResponse.json({data: updatedUser, message: "Updated"}, {status: 200})

    }catch(error){
        console.log("errror", error)
        return NextResponse.json({message: "Error happening when creating user"}, {status: 500})
    }
}
// export async function GET(req:Request, res:Response){

//     try{
//         // const data = await req.json()
//         // console.log("data", data)
//         return NextResponse.json({message: "Created user"}, {status: 200})

//     }catch(error){
//         console.log("errror", error)
//         return NextResponse.json({message: "Error happening when creating user"}, {status: 500})
//     }
// }

export async function POST(req:Request, res: Response) {
    
    const user = await getCurrentUser()

    if(!user || user.role !== "superuser"){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }


    const formData = await req.formData()
    const id = formData.get('id') as any; // Access the file from the request
    let file = formData.get('image') as any; // Access the file from the request
    const username = formData.get('username') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const bio = formData.get('bio') as string;
    const password = formData.get('new_password') as string;
    const confirm_password = formData.get('confirm_password') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    
    const formDataToJson = {
        username : username,
        firstName : firstName,
        lastName : lastName,
        bio : bio,
        password : password,
        new_password : password,
        confirm_password : confirm_password,
        email : email,
        phone : phone,
    }

    const parsedForm = await userFormSchema.safeParseAsync(formDataToJson)
    if(!parsedForm.success){
        const errorMessage = parsedForm.error.errors.map((error) => `${error.path.join(".")} - ${error.message}`).join(", ")
        return NextResponse.json({message: errorMessage}, {status: 400})
    }

    const currentUser = await prisma.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(currentUser?.isBlocked){
        return NextResponse.json({message: "Unauthorized"}, {status: 401})
    }
    
    const existingUser = await prisma.user.findFirst({
        where:{
            OR:[
                {
                    username
                },
                {
                    email
                }
            ]
        }
    })


    if(existingUser){
        return NextResponse.json({message: "Username or email exists."}, {status: 400})
    }

    if(password !== confirm_password){
        return NextResponse.json({message: "Password don't match."}, {status: 400})
    }


      
    
    try{
        const updatedUser = await prisma.$transaction(async (newPrisma) => {

            if(file instanceof File){
                const uploadDir = path.join(process.cwd(), 'public/images/user')
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }
            
                // Generate a unique filename using UUID
                const fileExt = path.extname(file.name); // Get file extension
                const baseName = path.basename(file.name, fileExt).replace(/\s+/g, ''); // Get filename without extension
                const uniqueFileName = `${baseName}-${fileExt}`; // Append UUID to filename
            
                // Save the image file
                const filePath = path.join(uploadDir, uniqueFileName);
                const fileBuffer = new Uint8Array(await file.arrayBuffer());
                fs.writeFileSync(filePath, fileBuffer);

                // Construct the public URL for accessing the image
                 file = `/images/user/${uniqueFileName}`;

                }
                
            const  new_password = await hashedPassword(password)
    
            const updatedUser = await newPrisma.user.create({
                data:{
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio,
                    password: new_password,
                    email: email,
                    phone: phone,
                    image:file
                       
                },
                
            })

            let defaultRole = await newPrisma.role.findUnique({
                where:{
                    name: "user"
                }
            })
            if (!defaultRole) {
                defaultRole =  await newPrisma.role.create({
                    data:{
                        name: "user",

                    }
                })
            }
            await newPrisma.userRole.create({
                data: {
                    userId: updatedUser.id,
                    roleId: defaultRole.id
                }
            })


            return updatedUser
        })
        
        return NextResponse.json({data: updatedUser, message: "Profile created successfully"}, {status: 201})
        
    }
    catch(error){
        console.log("err", error)
        return NextResponse.json({message:  "An error occurred while updating your profile."}, {status: 500})
    }

}
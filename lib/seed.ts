import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "./globals";


const prisma = new PrismaClient()
async function main() {
    const newUser = await prisma.user.create({
        data:{
            username: "austinobravo",
            email: 'austinobravo@gmail.com',
            firstName: 'Austine',
            lastName: 'Ebogu',
            password: await hashedPassword('password'),
        }
    })
    console.log('newUser', newUser)

}
main()
.then(async() =>{
    await prisma.$disconnect()
})
.catch(async(error) => {
    console.error("error", error)
    await prisma.$disconnect()
    process.exit(1)
})
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'



const hashedPassword = async (value) => {
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(value, salt)
    return newPassword
}

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
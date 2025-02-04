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
            username: "superuser",
            email: 'superuser@gmail.com',
            firstName: 'Super',
            lastName: 'User',
            password: await hashedPassword('password'),
        }
    })
    console.log('newUser', newUser)
    const newRole = await prisma.role.create({
        data:{
            name: "superuser",
        }
    })
    console.log('newRole', newRole)

    const newUserRole = await prisma.userRole.create({
        data:{
            userId: newUser.id,
            roleId: newRole.id
        }
    })
    console.log('newUserRole', newUserRole)

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
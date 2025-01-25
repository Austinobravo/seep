
import bcrypt from 'bcryptjs'

export const validateForEmptySpaces = (value: string) => {
    return value.trim().length >= 1
}

export const formatDate = (value: string) => {
    return value.trim().length >= 1
}

export const hashedPassword = async (value: string) => {
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(value, salt)
    return newPassword
}

export const comparePassword = async (currentPassword: string, hashPassword: string) => {
    const isPasswordCorrect = bcrypt.compareSync(currentPassword, hashPassword)
    return isPasswordCorrect
}

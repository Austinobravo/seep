import bcrypt from 'bcryptjs'
import slug from 'slug';
import prisma from '@/prisma/prisma'
import { formatDistanceToNow, parseISO } from 'date-fns';

const toolbarOptions = [
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],

    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'align': [] }],
    [{ 'direction': 'rtl' }],                         // text direction
  
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  
    ['clean']                                         // remove formatting button
  ];

export const modules = {
    toolbar: toolbarOptions
}


export const validateForEmptySpaces = (value: string) => {
    return value.trim().length >= 1
}

// export const formatDate = (value: string) => {
//     return value.trim().length >= 1
// }

export const hashedPassword = async (value: string) => {
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(value, salt)
    return newPassword
}

export const comparePassword = async (currentPassword: string, hashPassword: string) => {
    const isPasswordCorrect = bcrypt.compareSync(currentPassword, hashPassword)
    return isPasswordCorrect
}

export const createUniqueSlug = async (title: string) => {
    const baseSlug = slug(title)
    let slugged_title = baseSlug

    const existingSlugs = await prisma.news.findMany({
        where:{
            slug:{
                contains: baseSlug
            }
        },
        select:{
            slug: true
        }
    })

    if(existingSlugs.length <= 0){
        return slugged_title
    }else{
        const verifySuffix = existingSlugs.map(({slug}) => {
            const match = slug.match(new RegExp(`^${baseSlug}-(\\d+)$`))

            return match ? parseInt(match[1]) : null
        }).filter((value):value is number => value != null)

        if(verifySuffix.length > 0){
            const maxSuffix = Math.max(...verifySuffix)
            slugged_title = `${baseSlug}-${maxSuffix + 1}`
        }else{
            slugged_title = `${baseSlug}-1`
        }
    }
    return slugged_title
}

export const formatDateToString = (date: any) => {
    console.log('date', date)
    const formattedDate = formatDistanceToNow(parseISO(date), {addSuffix: true})
    return formattedDate
}

import { z } from "zod";
import { emailRegex, validateForEmptySpaces } from "./globals";
import { isUserEmailExisting, isUserEmailExistingInUserModel } from "./helpers";


export const LoginFormSchema = z.object({
    username: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    password: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
  })

  const AcceptedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  const MAX_FILE_SIZE = 1024 * 1024 * 5; //5MB
 
  export const newsFormSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    category: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    otherOptions: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    image: typeof window !== "undefined"
    ? z.any().optional()
    : z.instanceof(File,{message: "Image is required"})
        .refine((files) => files && files.size <= MAX_FILE_SIZE, { message: "File max size is very 5MB only" })
        .refine((files) => files && AcceptedImageTypes.includes(files.type), { message: "Only jpg, png, webp, gif accepted only" }), 
    contents: z.array(
        z.object(
          {
          id: z.string().optional(),
          heading: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
          paragraph: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
          
        }
        )
  )
  }).refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image.length > 0)}, {message: "Image is required", path: ["image"]})
  .refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image[0] && data.image[0].size <= MAX_FILE_SIZE)}, {message: "File max size is 5MB", path: ["image"]})
  .refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image[0] && AcceptedImageTypes.includes(data.image[0].type))}, {message: "Only jpg, png, webp, gif accepted", path: ["image"]})

  export const categoryFormSchema = z.object({
    name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    slug: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    description: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
  })

  export const privacyAndTermsFormSchema = z.object({
    content: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    })
  export const testimonialFormSchema = z.object({
    individual_name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    content: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    school: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    program: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    })
  export const contactFormSchema = z.object({
    name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}).refine((data) => !data || emailRegex.test(data), {message: "Invalid email"}),
    phone: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    message: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    })
  export const joinFormSchema = z.object({
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}).refine(async (value) => {const user = await isUserEmailExisting(value); return !user}, {message: "You already sent us an mail."}),
    phone: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    })
  export const supportFormSchema = z.object({
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}).refine((data) => !data || emailRegex.test(data), {message: "Invalid email"}),
    amount: z.string({message: ""}).min(2, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}).refine((value) => !isNaN(Number(value)), {message: "Must be a number"}),
    remark: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    })
  export const galleryCategoryFormSchema = z.object({
    title: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    subtitle: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    
    })
  export const galleryImageFormSchema = z.object({
    description: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    categoryId: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
    images: z.any()
    
    })

  export const userFormSchema = z.object({
      id: z.string().optional(),
      username: z.string().min(2, {
        message: "Username is required.",
      }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      email: z.string().min(2, {
        message: "Email is required.",
      }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}).refine((data) => !data || emailRegex.test(data), {message: "Invalid email"}),
      phone: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      bio: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      firstName: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      lastName: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      new_password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      confirm_password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's allowed."}),
      image: z.union([
        z.any().optional(), // Allow an empty value (optional)
        z.instanceof(File, { message: "Invalid file type" })
          .refine((file) => file.size <= MAX_FILE_SIZE, { message: "File max size is 5MB" })
          .refine((file) => AcceptedImageTypes.includes(file.type), { message: "Only jpg, png, webp, gif are accepted" })
      ])
    })
    .refine((data) => 
      {return !data.new_password || data.new_password === data.confirm_password},
      {message: "Passwords don't match", path: ["confirm_password"]}
    )


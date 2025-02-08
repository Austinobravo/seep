import { z } from "zod";
import { emailRegex, validateForEmptySpaces } from "./globals";
import { isUserEmailExisting } from "./helpers";


export const LoginFormSchema = z.object({
    username: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    password: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
  })

  const AcceptedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  const MAX_FILE_SIZE = 1024 * 1024 * 5; //5MB
 
  export const newsFormSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    category: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    otherOptions: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    image: typeof window !== "undefined"
    ? z.any().optional()
    : z.instanceof(File,{message: "Image is required"})
        .refine((files) => files && files.size <= MAX_FILE_SIZE, { message: "File max size is very 5MB only" })
        .refine((files) => files && AcceptedImageTypes.includes(files.type), { message: "Only jpg, png, webp, gif accepted only" }), 
    contents: z.array(
        z.object(
          {
          id: z.string().optional(),
          heading: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
          paragraph: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
          
        }
        )
  )
  }).refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image.length > 0)}, {message: "Image is required", path: ["image"]})
  .refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image[0] && data.image[0].size <= MAX_FILE_SIZE)}, {message: "File max size is 5MB", path: ["image"]})
  .refine((data) => {return typeof window === "undefined" || data.id || (data.image && data.image[0] && AcceptedImageTypes.includes(data.image[0].type))}, {message: "Only jpg, png, webp, gif accepted", path: ["image"]})

  export const categoryFormSchema = z.object({
    name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    slug: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    description: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
  })

  export const privacyAndTermsFormSchema = z.object({
    content: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    })
  export const testimonialFormSchema = z.object({
    individual_name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    content: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    school: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    program: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    })
  export const contactFormSchema = z.object({
    name: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    phone: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    message: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    })
  export const joinFormSchema = z.object({
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}).refine((value) => !isUserEmailExisting(value), {message: "You already sent us an mail."}),
    phone: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    })
  export const supportFormSchema = z.object({
    email: z.string().email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    amount: z.number().min(2, {message: "This field is mandatory"}),
    remark: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    })
  export const galleryCategoryFormSchema = z.object({
    title: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    subtitle: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    
    })
  export const galleryImageFormSchema = z.object({
    description: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    categoryId: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    images: z.any()
    
    })

  export const userFormSchema = z.object({
      id: z.string().optional(),
      username: z.string().min(2, {
        message: "Username is required.",
      }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      email: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}).refine((data) => !data || emailRegex.test(data), {message: "Invalid email"}),
      phone: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      bio: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      firstName: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      lastName: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      new_password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      confirm_password: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
      image: z.union([
        z.string().optional(), // Allow an empty value (optional)
        z.instanceof(File, { message: "Invalid file type" })
          .refine((file) => file.size <= MAX_FILE_SIZE, { message: "File max size is 5MB" })
          .refine((file) => AcceptedImageTypes.includes(file.type), { message: "Only jpg, png, webp, gif are accepted" })
      ])
    })
    .refine((data) => 
      {return !data.new_password || data.new_password === data.confirm_password},
      {message: "Passwords don't match", path: ["confirm_password"]}
    )


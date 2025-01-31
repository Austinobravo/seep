import { z } from "zod";
import { validateForEmptySpaces } from "./globals";

export const LoginFormSchema = z.object({
    username: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    password: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
  })

  const AcceptedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
 
  export const newsFormSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    category: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    otherOptions: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
    image: typeof window !== "undefined"
    ?
    z.instanceof(FileList).refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"})
    :
    z.any().refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"}), 
    contents: z.array(
        z.object(
          {
          heading: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
          paragraph: z.string().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu), {message: "No emoji's alllowed."}),
          
        }
        )
  )
  })
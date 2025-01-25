import { z } from "zod";
import { validateForEmptySpaces } from "./globals";

export const LoginFormSchema = z.object({
    username: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/\p{Emoji}/gu), {message: "No emoji's alllowed."}),
    password: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(/\p{Emoji}/gu), {message: "No emoji's alllowed."}),
  })
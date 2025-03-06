"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import React from "react"
import axios from "axios"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const AcceptedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
 
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  image: typeof window !== "undefined"
  ?
  z.instanceof(FileList).refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"})
  :
  z.any().refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"}), 
  contents: z.array(
      z.object(
        {
        heading: z.string().min(2, {
          message: "Heading must be at least 2 characters.",
        }),
        paragraph: z.string().min(2, {
          message: "Paragraph must be at least 2 characters.",
        }),
        
      }
      )
)
})
 
const AddNewsPage = () => {
  const [blogImage, setBlogImage] = React.useState< Blob | MediaSource | null>(null)
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      image: undefined,
      contents: [
        {
          heading: "",
          paragraph: ""
        }
      ]
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit (values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('category', values.category)
    formData.append('image', values.image[0])
    formData.append('contents', JSON.stringify(values.contents))
    try{
      const response = await axios.post('/api/news',formData,
        {
          headers:
          {"Content-Type": "multipart/form-data"}
        }
      )
      toast(`${response.data.message}`)
      form.reset()
    }
    catch(error:any){
      toast(`${error.response.data.message}`)
      console.error("Error", error)
    }
  }

  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: "contents"
  })

  const isSubmitting = form.formState.isSubmitting

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // @ts-ignore
  //   const file = e.target.files[0] 

  //   if(file){
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setBlogImage(reader.result)
  //     }
  //     reader.readAsDataURL(file)

  //   }
  //   else{
  //     setBlogImage(null)
  //   }
  // }
  return (
    <section>
        <h1 className='text-center text-3xl font-medium my-4'>Add News Page</h1>
         {blogImage &&
         <>
          <Image src={URL.createObjectURL(blogImage)} width={500} height={500} alt={`content.heading`} className='object-cover h-40 mx-auto' unoptimized/>
         </>
         }
         <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-xl mx-auto my-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Blog Image</FormLabel>
                  <FormControl>
                    <Input type="file" accept=".png, .jpg, .jpeg, .gif, .webp"  onChange={(e) => {field.onChange(e.target.files), setBlogImage(e.target.files?.[0] || null)}} ref={field.ref}/>
                  </FormControl>
                  <FormDescription>
                    This is the blog image.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black" >Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Blog title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is blog title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Chooose blog category" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="news">News</SelectItem>
                        </SelectContent>
                    </Select>
                  <FormDescription>
                    This is the blog category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              {fields.length ?
                <>
                  <h2 className="text-center font-medium text-2xl">Options Added</h2>
                  {fields.map((content, index) => (
                    <div key={content.id}>
                      <FormField
                        control={form.control}
                        name={`contents.${index}.heading`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Heading</FormLabel>
                            <FormControl>
                              <Input placeholder="heading of the content" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is the sectional heading.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`contents.${index}.paragraph`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Paragraph</FormLabel>
                            <FormControl>
                              <Textarea placeholder="paragraph of the content" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is the sectional content.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-between my-4">
                        <button type="button" className="border shadow p-2 cursor-pointer " onClick={()=> remove(index)}>Remove option</button>
                      </div>
    
                    </div>
                  ))}
                </>
                :
                <h2>No option selected</h2>
              }
              <div className="w-full">
                <button type="button" className="border w-full bg-seep-color text-white  shadow p-2 cursor-pointer " onClick={()=> append({heading: "", paragraph: ""})}>Add option</button>
              </div>
            </div>
            <Button type="submit" className="disabled:cursor-not-allowed " disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Submit"}</Button>
          </form>
        </Form>
      
    </section>
  )
}

export default AddNewsPage

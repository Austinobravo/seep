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
import { Loader2 } from "lucide-react"
import { modules } from "@/lib/globals"
import ReactQuill from 'react-quill'
import { newsFormSchema } from "@/lib/formSchema"
import { useToast } from "@/hooks/use-toast"


const PostForm = ({category}: {category:CategoryType[]}) => {
  const { toast } = useToast()
  const [blogImage, setBlogImage] = React.useState< Blob | MediaSource | null>(null)
   const form = useForm<z.infer<typeof newsFormSchema>>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: {
      title: "",
      category: "",
      otherOptions: "",
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
  async function onSubmit (values: z.infer<typeof newsFormSchema>) {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('category', values.category)
    formData.append('image', values.image[0])
    formData.append('contents', JSON.stringify(values.contents))
    formData.append('otherOptions', values.otherOptions)
    
    try{
      const response = await axios.post('/api/news',formData,)
      console.log('res', response)
      toast({
        description: response.data.message,
        variant: "success"
    })
      form.reset()
    }
    catch(error:any){
      console.error("Error", error)
      toast({
        description: error.response.data.message,
        variant: "success"
    })
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
        {/* <h1 className='text-center text-3xl font-medium my-4'>Add News Page</h1> */}
         {blogImage &&
         <>
          <Image src={URL.createObjectURL(blogImage)} width={500} height={500} alt={`content.heading`} className='object-cover h-40 mx-auto'/>
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
                          {category.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                    </Select>
                  <FormDescription>
                    This is the blog category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <hr/>
            <div>
              {fields.length ?
                <>
                  <h2 className="text-center font-medium text-2xl">Add News heading and content</h2>
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
                        <button type="button" className="border w-full shadow p-2 cursor-pointer " onClick={()=> remove(index)}>Remove option</button>
                      </div>
    
                    </div>
                  ))}
                </>
                :
                <h2>No option selected</h2>
              }

              <div className="w-full">
                <button type="button" className="border w-full seep-bg-color text-white  shadow p-2 cursor-pointer " onClick={()=> append({heading: "", paragraph: ""})}>Add option</button>
              </div>
            </div>
              <hr/>
            <FormField
              control={form.control}
              name={`otherOptions`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Choose to write a long news instead</FormLabel>
                  <FormControl>
                    <ReactQuill theme="snow" {...field} modules={modules} placeholder='Start writing...' className='bg-white'/>

                  </FormControl>
                  <FormDescription>
                    Write a news without each own heading.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="disabled:cursor-not-allowed w-full" disabled={isSubmitting}>{isSubmitting ? <span className="w-full mx-auto"><Loader2 className="animate-spin"/></span> : "Submit"}</Button>
          </form>
        </Form>
      
    </section>
  )
}

export default PostForm

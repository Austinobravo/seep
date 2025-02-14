"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"

import React from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { BASE_URL, modules } from "@/lib/globals"
import ReactQuill from 'react-quill'
import { useToast } from "@/hooks/use-toast"
import { testimonialFormSchema } from "@/lib/formSchema"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
  
interface Props{
    data?: TestimonialType | undefined
    setOpen?: ((arg0: boolean) => void ) | undefined
}

const TestimonialForm = ({data, setOpen}: Props) => {
    const router = useRouter()
    const form = useForm<z.infer<typeof testimonialFormSchema>>({
            resolver: zodResolver(testimonialFormSchema),
            defaultValues: {
              content: data?.content || "",
              individual_name: data?.individual_name || "",
              school: data?.school || "",
              program: data?.program || "",
            },
          })
        const { toast } = useToast()
    
         async function onSubmit (values: z.infer<typeof testimonialFormSchema>) {
    
            if(data){
                try{
                    const newData = {...values, id:data.id}
                    const res = await fetch(`/api/testimonials`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newData)
                    })
                    const resData = await res.json()
                 
                    if(res.ok){
                        setOpen && setOpen(false)
                        toast({
                            description: resData.message,
                            variant: "success"
                        })
                        router.refresh()
                    }else{
                        toast({
                            description: resData.message,
                            variant: "destructive"
                        })
        
                    }
                    
                }
                catch(error: any){
                    if(error.message === "Network error"){
                        toast({
                            description: "Network disconnected. Please check your network and try again.",
                            variant: "destructive"
                        })
        
                    }
                    toast({
                        description: error.message,
                        variant: "destructive"
                    })
        
        
                }
            }else{
                try{
                    const res = await fetch(`/api/testimonials`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                    const data = await res.json()
                    if(res.ok){
                        setOpen && setOpen(false)
                        form.reset()
                        toast({
                            description: data.message,
                            variant: "success"
                        })
                        router.refresh()
                    }else{
                        toast({
                            description: data.message,
                            variant: "destructive"
                        })
        
                    }
                    
                }
                catch(error: any){
                    if(error.message === "Network error"){
                        toast({
                            description: "Network disconnected. Please check your network and try again.",
                            variant: "destructive"
                        })
        
                    }
                    toast({
                        description: error.message,
                        variant: "destructive"
                    })
        
        
                }
            }
    
         }
    
         const isSubmitting = form.formState.isSubmitting
  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='pt-2 space-y-4'>
                <FormField
                    control={form.control}
                    name='individual_name'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel className='text-black font-semibold'>Individual Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Nnaemeka Bassey...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1' />
                            </FormControl>
                            <span className='text-xs'>This is the name of the individual</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1 text-xs'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='school'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel  className='text-black font-semibold'>School</FormLabel>
                            <FormControl>
                                <Input placeholder='Government Technnical College...' {...field} className='!bg-whit focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs leading-tight'>This is the school of the individual.</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='program'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel  className='text-black font-semibold'>Program</FormLabel>
                            <FormControl>
                                <Input placeholder='Tech to School Program...' {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs leading-tight'>This is the name of the program.</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='content'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel  className='text-black font-semibold'>Testimonial</FormLabel>
                            <FormControl>
                                <Textarea placeholder='I will love to thank the seep program...' {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs'>The testimonial.</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1'/> 
                        </FormItem>

                    )}
                />
                <Button type='submit' variant={"secondary"} className='font-bold shadow-none bg-blue-700 text-white hover:text-white hover:bg-blue-600 px-6 w-full' disabled={isSubmitting}>{isSubmitting ? "Adding..." : data ? "Edit Testimonial" : "Add New Testimonial" }</Button>
            </form>
        </Form>
  )
}

export default TestimonialForm

"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

import React from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { modules } from "@/lib/globals"
import ReactQuill from 'react-quill'
import { useToast } from "@/hooks/use-toast"
import { privacyAndTermsFormSchema } from "@/lib/formSchema"

interface Props{
    data?: PrivacyType | undefined
    setOpen?: ((arg0: boolean) => void ) | undefined
    type?: string
}

const PrivacyAndTermsForm = ({data, setOpen, type}: Props) => {
    const form = useForm<z.infer<typeof privacyAndTermsFormSchema>>({
        resolver: zodResolver(privacyAndTermsFormSchema),
        defaultValues: {
          content: data?.content || ""
        },
      })
    const { toast } = useToast()

     async function onSubmit (values: z.infer<typeof privacyAndTermsFormSchema>) {

        if(data){
            if(data.type === "privacy"){
                try{
                    const newData = {...values, id:data.id}
                    const res = await fetch(`/api/privacy`, {
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
            }
            if(data.type === "terms"){
                try{
                    const newData = {...values, id:data.id}
                    const res = await fetch(`/api/terms`, {
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

            }


        }else{
            if(type === "privacy"){
                try{
                    const res = await fetch("/api/privacy", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                    const data = await res.json()
                    if(res.ok){
                       
                        form.reset()
                        toast({
                            description: data.message,
                            variant: "success"
                        })
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
            if(type === "terms"){
                try{
                    const res = await fetch("/api/category", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                    const data = await res.json()
                    if(res.ok){
                       
                        form.reset()
                        toast({
                            description: data.message,
                            variant: "success"
                        })
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

     }

     const isSubmitting = form.formState.isSubmitting
  return (
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-xl mx-auto my-4">
            
              <hr/>
            <FormField
              control={form.control}
              name={`content`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Content</FormLabel>
                  <FormControl>
                    <ReactQuill theme="snow" {...field} modules={modules} placeholder='Start writing...' className='bg-white'/>

                  </FormControl>
                  <FormDescription>
                    Write a content for each service.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="disabled:cursor-not-allowed w-full" disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Submit"}</Button>
          </form>
        </Form>
  )
}

export default PrivacyAndTermsForm

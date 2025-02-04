"use client"
import FadeInSection from '@/hooks/fadeIn'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import PhoneInput from 'react-phone-number-input'
 
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
import { contactFormSchema } from '@/lib/formSchema'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
          message: "",

        },
      })
    const { toast } = useToast()

    const onSubmit = async (values: z.infer<typeof contactFormSchema>)=>{

        try{
            const response = await axios.post('/api/contact', values)
            if(response.status === 201){
                toast({
                    description: response.data.message,
                    variant: "success"
                })
                form.reset()
                
            }else{
                toast({
                    description: response.data.message,
                    variant: "destructive"
                })
            }

        }catch(error: any){
            toast({
                description: error.response.data.message,
                variant: "destructive"
            })
        }
    }
    const isSubmitting = form.formState.isSubmitting

  return (
    <section >
        <FadeInSection direction={`up`}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-xl mx-auto my-4">
            
          <h2 className='font-bold text-xl'>Leave a message for us here and we will get back to you.</h2>

            <FormField
              control={form.control}
              name={`name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                    <Input placeholder='Name...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-5  rounded-lg w-full focus:border-[#0097FF] outline-none' />


                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`email`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                  <Input type='email' placeholder='Email Address...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-5  rounded-lg w-full focus:border-[#0097FF] outline-none' />

                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`phone`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                  <PhoneInput  defaultCountry={'NG'} placeholder="Phone..." {...field} className="!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 placeholder:text-sm rounded-lg w-full focus:border-[#0097FF] outline-none"/>

                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`message`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                  <Textarea placeholder='Message...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-5  rounded-lg w-full focus:border-[#0097FF] outline-none' />

                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="disabled:cursor-not-allowed  bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-3 w-full rounded-lg " disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "SEND US A MESSAGE"}</Button>
          </form>
        </Form>      
        </FadeInSection>
      
    </section>
  )
}

export default ContactForm

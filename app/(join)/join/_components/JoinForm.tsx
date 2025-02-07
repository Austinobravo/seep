"use client"

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"

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

import axios from "axios"
import { Loader2 } from "lucide-react"

import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { joinFormSchema } from '@/lib/formSchema'

const JoinForm = () => {

    const form = useForm<z.infer<typeof joinFormSchema>>({
        resolver: zodResolver(joinFormSchema),
        defaultValues: {
          firstName: "",
          email: "",
          phone: "",
          lastName: "",

        },
      })
    const { toast } = useToast()

    
    const onSubmit = async (values: z.infer<typeof joinFormSchema>)=>{

        try{
            const response = await axios.post('/api/join', values)
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
      <Dialog>
      <DialogTrigger asChild >
           <div className='mx-auto w-fit py-10'>
                <button type='button' className='bg-[#FFA807] py-2 px-4 text-white space-x-3 w-fit items-center flex rounded-full'>
                    <span>Join Us</span>
                    <MoveRight/> 
                </button>
            </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
      <DialogHeader>
          <DialogTitle>
            <div className=' flex justify-center flex-col items-center space-y-3 py-3'>
                <Image src={`/images/logo.png`} width={500} height={100} alt='logo' className='w-36'/>
                <h2 className='text-seep-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
            </div>
          </DialogTitle>
          <DialogDescription>
                <h3 className='text-seep-color text-3xl py-2 text-center font-bold'>Join Us</h3>
                <p className='text-seep-color opacity-70 text-sm text-justify '>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
          </DialogDescription>
      </DialogHeader>
      <div className=''>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-xl mx-auto my-4">
            
          <h2 className='font-bold text-xl'>Leave a message for us here and we will get back to you.</h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>

            <FormField
              control={form.control}
              name={`firstName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                    <Input placeholder='First Name...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />


                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`lastName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                  <Input placeholder='Last Name...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />

                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>

            <FormField
              control={form.control}
              name={`phone`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black"></FormLabel>
                  <FormControl>
                  <PhoneInput  defaultCountry={'NG'} style={{"fontSize": "0.75rem", "color::placeholder" : "#0097FF"}} placeholder="Phone Number..." {...field} className="!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 placeholder:!text-xs rounded-lg w-full border-[#0097FF] placeholder:!text-[#0097FF] focus:border-[#0097FF] focus-visible:border-[#0097FF] outline-none"/>

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
                  <Input placeholder='Email Address...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />

                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <Button type="submit" className="disabled:cursor-not-allowed bg-[#FFA807] w-full py-2 px-10 text-white rounded-full " disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Join Us"}</Button>
          </form>
        </Form>  

      </div>
      </DialogContent>
      
  </Dialog>

    </section>
  )
}

export default JoinForm
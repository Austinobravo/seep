"use client"

import { MoveRight, X } from 'lucide-react'
import Image from 'next/image'


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

import axios from "axios"
import { Loader2 } from "lucide-react"

import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { supportFormSchema } from '@/lib/formSchema'


const PaymentGateway = () => {
    const form = useForm<z.infer<typeof supportFormSchema>>({
        resolver: zodResolver(supportFormSchema),
        defaultValues: {
          email: "",
          amount: 10000,
          remark: "",

        },
      })
    const { toast } = useToast()

    
    const onSubmit = async (values: z.infer<typeof supportFormSchema>)=>{

        try{
            const response = await axios.post('/api/support', values)
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
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-xl mx-auto my-4">
          
        <h2 className='font-bold text-xl'>Leave a message for us here and we will get back to you.</h2>

          <FormField
            control={form.control}
            name={`email`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder='Email Address...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />


                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`amount`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Amount</FormLabel>
                <FormControl>
                <Input inputMode='numeric' type='number' placeholder='Donation...' {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />

                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`remark`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Remark</FormLabel>
                <FormControl>
                <Input placeholder='Remark...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1 border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none' />

                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="disabled:cursor-not-allowed bg-[#FFA807] w-full py-2 px-10 text-white rounded-full " disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Donate.."}</Button>
        </form>
      </Form>  
  )
}

export default PaymentGateway

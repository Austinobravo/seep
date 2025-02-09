"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useAllContext } from '@/hooks/useContextHook'

const formSchema = z.object({
    name: z.string().min(1, {message: "This field is mandatory"}),
})


const RolesForm = () => {
    const { toast } = useToast()
    const { addCategory } = useAllContext()
   
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })
    const isSubmitting = form.formState.isSubmitting

    const onSubmit = async (values:  z.infer< typeof formSchema>) => {

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
                
                addCategory(data.data)
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
  return (
    <div>
        <h4 className='font-medium pt-6'>Add New Category</h4>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='pt-2 space-y-4'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel className='text-black'>Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Super'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1' />
                            </FormControl>
                            <span className='text-xs'>This is the name of the category</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1 text-xs'/>
                        </FormItem>

                    )}
                />
                
                <Button type='submit' variant={"secondary"} className='font-bold shadow-none bg-blue-700 text-white hover:text-white hover:bg-blue-600 px-6' disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add New Category"}</Button>
            </form>
        </Form>
    </div>
  )
}

export default RolesForm

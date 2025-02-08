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
import { useToast } from '@/hooks/use-toast'
import { useAllContext } from '@/hooks/useContextHook'
import { galleryCategoryFormSchema } from '@/lib/formSchema'


interface Props{
    data?: CategoryType | undefined
    setOpen?: ((arg0: boolean) => void ) | undefined
}

const GalleryCategoryForm = ({data, setOpen}: Props) => {
    const { toast } = useToast()
    const { addCategory, updateCategory } = useAllContext()

    const form = useForm<z.infer<typeof galleryCategoryFormSchema>>({
        resolver: zodResolver(galleryCategoryFormSchema),
        defaultValues: {
            title: "",
            subtitle: "",
        }
    })
    const isSubmitting = form.formState.isSubmitting

    const onSubmit = async (values:  z.infer< typeof galleryCategoryFormSchema>) => {

        if(data){
            try{
                const newData = {...values, id:data.id, userId: data.userId}
                console.log("new", newData)
                const res = await fetch(`/api/galleryCategory`, {
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


        }else{
            try{
                const res = await fetch("/api/galleryCategory", {
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
  return (
    <div>
        <h4 className='font-medium pt-6'>Add New Gallery Category</h4>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='pt-2 space-y-4'>
                <FormField
                    control={form.control}
                    name='title'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel className='text-black'>Title</FormLabel>
                            <FormControl>
                                <Input placeholder='A flow of student entrepreneurs into the Nigeria economy...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1' />
                            </FormControl>
                            <span className='text-xs'>This is the title of the category</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1 text-xs'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='subtitle'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel>Subtitle</FormLabel>
                            <FormControl>
                                <Input placeholder='SEEP-innov8ion 2019...' {...field} className='!bg-whit focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs leading-tight'>The subtitle of the category.</span>
                            <FormMessage className='text-amber-300 before:content-["*"] pt-1'/>
                        </FormItem>

                    )}
                />
                
                <Button type='submit' variant={"secondary"} className='font-bold shadow-none bg-blue-700 text-white hover:text-white hover:bg-blue-600 px-6' disabled={isSubmitting}>{isSubmitting ? "Adding..." : data ? "Edit Category" : "Add New Category" }</Button>
            </form>
        </Form>
    </div>
  )
}

export default GalleryCategoryForm

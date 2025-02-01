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
import { categoryFormSchema } from '@/lib/formSchema'


interface Props{
    data?: CategoryType | undefined
    setOpen?: ((arg0: boolean) => void ) | undefined
}

const CategoryForm = ({data, setOpen}: Props) => {
    const { toast } = useToast()
    const { addCategory, updateCategory } = useAllContext()
    console.log('data', data)
   
    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: ""
        }
    })
    const isSubmitting = form.formState.isSubmitting

    React.useEffect(() => {
        if (data) {
          form.reset({
            name: data.name || "",
            slug: data.slug || "",
            description: data.description || "",
          });
        }
      }, [data, form]);

    const onSubmit = async (values:  z.infer< typeof categoryFormSchema>) => {

        if(data){
            try{
                console.log("va;ue", values)
                const newData = {...values, id:data.id, userId: data.userId}
                const res = await fetch(`/api/category`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                })
                const resData = await res.json()
                console.log("res;", resData)
                if(res.ok){
                    updateCategory(resData.data)
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
                                <Input placeholder='Technology...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1' />
                            </FormControl>
                            <span className='text-xs'>This is the name of the category</span>
                            <FormMessage className='text-red-500 before:content-["*"] pt-1 text-xs'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='slug'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder='technology...' {...field} className='!bg-whit focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs leading-tight'>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</span>
                            <FormMessage className='text-amber-300 before:content-["*"] pt-1'/>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name='description'
                    render={({field}) => (
                        <FormItem className='!space-y-0'>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder='A brief about the technology...' {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            </FormControl>
                            <span className='text-xs'>The description of the category.</span>
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

export default CategoryForm

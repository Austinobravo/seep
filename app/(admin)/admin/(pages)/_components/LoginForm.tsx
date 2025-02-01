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
import { useToast } from "@/hooks/use-toast"
import { validateForEmptySpaces } from '@/lib/globals'

import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LoginFormSchema } from '@/lib/formSchema'




const LoginForm = () => {
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false)
  const { toast } = useToast()
  const router = useRouter()
 
  const form = useForm<z.infer<typeof LoginFormSchema>>({
          resolver: zodResolver(LoginFormSchema),
          defaultValues: {
              username: "",
              password: "",
          }
      })

  const isSubmitting = form.formState.isSubmitting


  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    console.log("values", values)

    try{
      const data = await signIn("credentials", 
        {
          username: values.username.trim(),
          password: values.password.trim(),
          redirect: false
        }
      )
      if (data?.error){
        toast({
          description: data.error,
          variant: "destructive"
      })
  
      }
    if(data?.url){
        toast({
          description: "Login successful.",
          variant: "success"
      })
      return router.push("/admin/dashboard")

    } 



    }catch(error: any){
      console.log( 'client error', error)
      toast({
        description: error,
        variant: "destructive"
    })

    }
  }

  const handleTogglePassword = () => {
    setIsPasswordShown(!isPasswordShown)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='pt-2 space-y-4'>
        <FormField
            control={form.control}
            name='username'
            render={({field}) => (
                <FormItem className='!space-y-0'>
                    <FormLabel className='text-black font-bold'>Username</FormLabel>
                    <FormControl>
                        <Input placeholder='Username...'  {...field} className='!bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-1' />
                    </FormControl>
                    <FormMessage className='text-red-500 pt-1 text-xs'/>
                </FormItem>

            )}
        />
        <FormField
            control={form.control}
            name='password'
            render={({field}) => (
                <FormItem className='!space-y-0'>
                    <FormLabel className="font-bold text-black">Password</FormLabel>
                    <FormControl>
                      <div className='flex items-center border pr-1 rounded-md'>
                        <Input type={isPasswordShown ? 'text' : 'password'} placeholder='Password...' {...field} className='!bg-white border-0 focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                        {isPasswordShown ?
                          <EyeOff onClick={handleTogglePassword}/>
                        :
                          <Eye onClick={handleTogglePassword}/>
                        }
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 pt-1 text-xs'/>
                </FormItem>

            )}
        />
        <Button type='submit' variant={"secondary"} className='font-bold shadow-none w-full bg-blue-700 text-white hover:text-white hover:bg-blue-600 px-6' disabled={isSubmitting}>{isSubmitting ? <Loader2 className="animate-spin mx-auto size-6"/> : "Login"}</Button>
    </form>
  </Form>
  )
}

export default LoginForm

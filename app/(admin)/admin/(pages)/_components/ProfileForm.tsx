"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from 'react-phone-number-input'
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


import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import React from "react"
import axios from "axios"

import { Loader2, Pencil, PencilRuler } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { userFormSchema } from "@/lib/formSchema"
import { useToast } from "@/hooks/use-toast"
interface Props{
    countryCode?: any
    data: UserType
}
const ProfileForm = ({countryCode, data}: Props) => {
    const { toast } = useToast()
    const [profileImage, setProfileImage] = React.useState<string>( "")
    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
          username: data.username || "",
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          phone: data.phone || "",
          image: data.image || "",
          email: data.email || "",
          bio: data.bio || "",
          password: "",
          new_password: "",
          confirm_password: ""
        },
      })
        const isSubmitting = form.formState.isSubmitting


      const onSubmit = async (values: z.infer<typeof userFormSchema>) => {
        
            const formData = new FormData()
            formData.append('username', values.username)
            formData.append('firstName', values.firstName)
            formData.append('lastName', values.lastName)
            formData.append('email', values.email)
            formData.append('phone', values.phone)
            formData.append('bio', values.bio)
            formData.append('password', values.password)
            formData.append('new_password', values.new_password)
            formData.append('confirm_password', values.confirm_password)
            formData.append("image", values.image as any)
            
            try{
            const response = await axios.patch('/api/users',formData,)
            if(response.status === 200){
                toast({
                    description: response.data.message,
                    variant: "success"
                })
            
                form.reset()
            }
            }
            catch(error:any){
                toast({
                    description: error.response.data.message,
                    variant: "destructive"
                })
            console.error("Error", error)
            }
      }

         React.useEffect(() => {
            if (data) {
              
            if (data.image) setProfileImage(data.image);
            }
          }, [data, form]);
      
          
      
          const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              setProfileImage(URL.createObjectURL(file));
              form.setValue("image", e.target.files as any); 
            }
          };
  return (
    <div>
         <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className='bg-blue-100 p-3 rounded-lg '>
            <div>
                <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 max-w-xl">
                <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                    <FormItem>
                        <div className='flex gap-3 items-center'>
                            <div className='relative w-fit'>
                                {profileImage ?
                                    <Image src={ profileImage } width={500} height={500} alt={`profile-image`} className='object-cover rounded-full size-40  mx-auto'/>
                                    :
                                    <Image src={`/images/avatar.webp`} width={500} height={500} alt='profile_image' className='size-40'/> 
                                    }
                                <FormLabel className="text-black" htmlFor={'image'}>
                                    <div className='bg-seep-color rounded-full absolute bottom-5 right-0 text-white font-bold p-1'>
                                        <Pencil/>
                                    </div>
                                    
                                </FormLabel>
                            </div>
                            <h4>Administrator</h4>
                        </div>
                    <FormControl>
                            <Input type="file" id={'image'} accept=".png, .jpg, .jpeg, .gif, .webp" className="hidden"  onChange={handleImageChange} ref={field.ref}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Username</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Username" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your First Name" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Last Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Last Name" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Email Address</FormLabel>
                    <FormControl>
                        <Input type="email" inputMode="email" placeholder="Email Address" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem className="">
                    <FormLabel className="text-black" >Phone Number</FormLabel>
                    <FormControl className="flex">
                        <PhoneInput flags={countryCode}  defaultCountry={countryCode} placeholder="Enter phone number" {...field} className=""/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Bio</FormLabel>
                    <FormControl>
                        <Textarea  placeholder="Your Bio" {...field} className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                

                <Button type="submit" className="disabled:cursor-not-allowed" disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Save changes"}</Button>
            </form>
                </Form>
            </div>

        </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className='bg-blue-100 p-3 rounded-lg '>
                <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 max-w-xl">
            
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Current Password</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Current Password" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >New Password</FormLabel>
                    <FormControl>
                        <Input placeholder="New Password" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Confirm New Password</FormLabel>
                    <FormControl>
                        <Input placeholder="Confirm New Password" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                

                <Button type="submit" className="disabled:cursor-not-allowed" disabled={isSubmitting}>{isSubmitting ? <span className="w-fit mx-auto"><Loader2 className="animate-spin"/></span> : "Save changes"}</Button>
                </form>
                </Form>
            </div>
           
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    </div>
  )
}

export default ProfileForm

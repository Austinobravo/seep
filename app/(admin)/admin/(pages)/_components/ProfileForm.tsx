"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from 'react-phone-number-input'
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
 import "react-phone-number-input/style.css"
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
import { toast } from "sonner"
import { Loader2, Pencil, PencilRuler } from "lucide-react"

const AcceptedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
  bio: z.string(),
  image: typeof window !== "undefined"
  ?
  z.instanceof(FileList, {message: 'Required'}).refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"})
  :
  z.any().refine((files) => files?.length > 0, {message: "Image is required"}).refine((files) => files?.[0]?.size <= 1024 * 1024 * 5, {message: "File max size is 5MB"}).refine((files) => AcceptedImageTypes.includes(files?.[0].type), {message: "Only jpg, png, webp, gif accepted"}), 

})

interface Props{
    countryCode: any
}
const ProfileForm = ({countryCode}: Props) => {
    
    const [profileImage, setProfileImage] = React.useState<Blob | MediaSource>()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          phone: "",
          image: undefined,
          email: "",
          bio: ""
        },
      })
        const isSubmitting = form.formState.isSubmitting


      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
      }
  return (
    <div>
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
                                    <Image src={  URL.createObjectURL(profileImage) } width={500} height={500} alt={`profile-image`} className='object-cover rounded-full size-40  mx-auto'/>
                                    :
                                    <Image src={`/images/avatar.webp`} width={500} height={500} alt='profile_image' className='size-40'/> 
                                    }
                                <FormLabel className="text-black" htmlFor={'image'}>
                                    <div className='seep-bg-color rounded-full absolute bottom-5 right-0 text-white font-bold p-1'>
                                        <Pencil/>
                                    </div>
                                    
                                </FormLabel>
                            </div>
                            <h4>Administrator</h4>
                        </div>
                    <FormControl>
                            <Input type="file" id={'image'} accept=".png, .jpg, .jpeg, .gif, .webp" className="hidden"  onChange={(e) => {field.onChange(e.target.files), setProfileImage(e.target.files?.[0])}} ref={field.ref}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-black" >Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field}  className="bg-white focus-visible:!ring-offset-0 focus-visible:!ring-0 py-4 border-0 rounded-none outline-none"/>
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

      
    </div>
  )
}

export default ProfileForm

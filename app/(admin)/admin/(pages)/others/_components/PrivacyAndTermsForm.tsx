"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
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

import React from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { modules } from "@/lib/globals"
import ReactQuill from 'react-quill'
import { useToast } from "@/hooks/use-toast"
import { privacyAndTermsFormSchema } from "@/lib/formSchema"

const PrivacyAndTermsForm = () => {
    const form = useForm<z.infer<typeof privacyAndTermsFormSchema>>({
        resolver: zodResolver(privacyAndTermsFormSchema),
        defaultValues: {
          content: ""
        },
      })
    const { toast } = useToast()

     async function onSubmit (values: z.infer<typeof privacyAndTermsFormSchema>) {
        console.log("values", values)
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

"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Building } from 'lucide-react'
import Image from 'next/image'
import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import TestimonialForm from './TestimonialForm'
import { useMediaQuery } from '@/hooks/use-media-query'
import React from 'react'
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

const TestimonialCard = ({testimonial}: {testimonial:TestimonialType}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [singleTestimonial, setSingleTestimonial] = React.useState<TestimonialType | undefined>(undefined)
    const [open, setOpen] = React.useState<boolean>(false); 
    const [isLoading, setIsLoading] = React.useState<boolean>(false); 
    const { toast } = useToast()
    const router = useRouter()

    const deleteTestimonial = async (id: string) => {
        try{
            setIsLoading(true)
            const response = await axios.delete(`/api/testimonials/${id}`,)
            toast({
            description: response.data.message,
            variant: "success"
            })
            router.refresh()
        
        }catch(error:any){
            toast({
                description: error.response.data.message,
                variant: "destructive"
            })
        }finally{
            setIsLoading(false)
        }
    }

    const fetchTestimonial = async (id: string) => {
        try{
          const response = await axios.get(`/api/testimonials/${id}`,)
          setSingleTestimonial(response.data)
          setOpen(true); 
          
        }catch(error:any){
            toast({
              description: error.response.data.message,
              variant: "destructive"
          })
        }
      }

  return (
    <Card className="">
                <CardHeader>
                    <div className='flex items-center justify-between'>
                            <div>
                                <CardTitle className="">{testimonial.individual_name}</CardTitle>
                                <CardDescription></CardDescription>
                            </div>
                            <div className='bg-[#B4E0FF] rounded-full p-1 size-10'>
                                <Image src={`/images/avatar.webp`} width={50} height={50} alt='avatar'/>
                            </div>
                    </div>

                </CardHeader>
            <CardContent>
                {testimonial.content}
            
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 items-center font-medium leading-none">
                <Building className='text-seep-color'/>
                <span>{testimonial.school}</span>
                </div>
                <div className="leading-none text-muted-foreground">
                    {testimonial.program}
                </div>
                <div className='flex ml-auto w-fit items-center gap-2'>
                        <Edit className='text-seep-color size-6 cursor-pointer' onClick={() => fetchTestimonial(testimonial.id)}/>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Trash2 className='text-red-500 size-6 cursor-pointer'/>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Delete this?</DialogTitle>
                                <DialogDescription>
                                This is a permanent action. Are you sure?
                                </DialogDescription>
                            </DialogHeader>
                            <div className='flex gap-5 w-fit ml-auto'>
                                <DialogClose>
                                    Cancel
                                </DialogClose>
                                
                                <Button type='button'  variant={'destructive'} onClick={() => deleteTestimonial(testimonial.id)} className='border-0 disabled:cursor-not-allowed' disabled={isLoading}>{isLoading ? "Deleting..." : "Delete"}</Button>

                            </div>
                            </DialogContent>
                            
                        </Dialog>
                        {isDesktop ?
                            <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
                            <DialogHeader>
                                <DialogTitle>Edit Testimonial</DialogTitle>
                                <DialogDescription>Modify the testimonial details below.</DialogDescription>
                            </DialogHeader>
                                <TestimonialForm data={singleTestimonial} setOpen={setOpen}/>
                            </DialogContent>
                            
                            </Dialog>
                            :
                            <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerTrigger asChild>
                                
                            </DrawerTrigger>
                            <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                                <div className="z-[51]">
                                <DrawerHeader className="!text-center">
                                <DrawerTitle>Edit Testimonial</DrawerTitle>
                                <DrawerDescription>
                                    Modify the testimonial details below.
                                </DrawerDescription>
                                </DrawerHeader>
                                <TestimonialForm data={singleTestimonial} setOpen={setOpen}/>
                                <DrawerFooter className="pt-2">
                                </DrawerFooter>

                                </div>
                            </DrawerContent>
                            </Drawer>
                            }
                            
                    </div>
            </CardFooter>
    </Card>
  )
}

export default TestimonialCard

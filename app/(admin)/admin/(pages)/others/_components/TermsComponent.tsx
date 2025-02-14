"use client"
import { Edit, Trash2 } from 'lucide-react'
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
import { Button } from '@/components/ui/button'
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
import { useMediaQuery } from '@/hooks/use-media-query'

import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import PrivacyAndTermsForm from './PrivacyAndTermsForm'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TermsComponent = ({termsData}: {termsData: PrivacyType}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
      const [ isOpen, setIsOpen] = React.useState(false)
      const [ data, setData] = React.useState()
      const { toast } = useToast()
      const router = useRouter()

      const deleteTerms = async (id: string) => {
        try{
          const response = await axios.delete(`/api/terms/${id}`,)
          toast({
            description: response.data.message,
            variant: "success"
          })
          router.refresh()
          
        //   const updatedCategories = category.filter((item) => item.id !== id)
        //   clearCategories();
        //   updatedCategories.forEach((category: CategoryType) => addCategory(category));
      
        }catch(error:any){
            toast({
              description: error.response.data.message,
              variant: "destructive"
          })
        }
      }
    
      const fetchTerms = async (id: string) => {
        try{
          const response = await axios.get(`/api/terms/${id}`,)
          setData({...response.data, type: "terms"})
          setIsOpen(true); 
          
        }catch(error:any){
            toast({
              description: error.response.data.message,
              variant: "destructive"
          })
        }
      }
  return (
    <div >
    <div className='flex justify-between items-center py-3'>
        <h3 className='font-bold text-xl'>Terms & Conditions</h3>
      
        {isDesktop ?
                    <Dialog>
                        <DialogTrigger asChild>
                          {!termsData && <Button type='button'>Create T & C's</Button>}
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                        <DialogHeader>
                            <DialogTitle>Create Terms and Conditions</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                            <PrivacyAndTermsForm type="terms"/>
                        </DialogContent>
                        
                    </Dialog>
                        :
                        <Drawer>
                        <DrawerTrigger asChild>
                          {!termsData && <Button type='button'>Create T & C's</Button>}
                            
                        </DrawerTrigger>
                        <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                            <div className="z-[51]">
                            <DrawerHeader className="!text-center">
                            <DrawerTitle>Create Terms and Conditions</DrawerTitle>
                            <DrawerDescription>
                           
                            </DrawerDescription>
                            </DrawerHeader>
                            <PrivacyAndTermsForm type="terms"/>
                            <DrawerFooter className="pt-2">
                            </DrawerFooter>

                            </div>
                        </DrawerContent>
                        </Drawer>
                        }

        </div>
        {termsData ?
        <div className='bg-blue-100 rounded-lg p-3 text-sm shadow space-y-10'>
            <p className='line-clamp-6'>
                <span>
                    {termsData?.content}
                </span>
            </p>

            <div className='flex ml-auto w-fit items-center gap-2'>
            <Edit className='text-seep-color size-6 cursor-pointer' onClick={() => fetchTerms(termsData.id)}/>
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
                    <Button type='button' variant={'destructive'} onClick={() => deleteTerms(termsData.id)} className='border-0'>Delete</Button>

                </div>
                </DialogContent>
                
            </Dialog>
            {isDesktop ?
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                            
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                            <DialogHeader>
                                <DialogTitle>Edit Terms and Conditions</DialogTitle>
                                <DialogDescription>Modify the content of this terms.</DialogDescription>
                            </DialogHeader>
                                <PrivacyAndTermsForm data={data}/>
                            </DialogContent>
                            
                        </Dialog>
                            :
                            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                            <DrawerTrigger asChild>
                            
                            </DrawerTrigger>
                            <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                                <div className="z-[51]">
                                <DrawerHeader className="!text-center">
                                <DrawerTitle>Edit Terms and Conditions</DrawerTitle>
                                <DrawerDescription>
                                Modify the content of this terms.
                                </DrawerDescription>
                                </DrawerHeader>
                                <PrivacyAndTermsForm data={data}/>
                                <DrawerFooter className="pt-2">
                                </DrawerFooter>

                                </div>
                            </DrawerContent>
                            </Drawer>
                            }
                      
            </div>
        </div>
        :
        <figure className='mx-auto w-fit text-center'>
            <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
            <figcaption>No terms yet.</figcaption>
        </figure>
          }
</div>
  )
}

export default TermsComponent

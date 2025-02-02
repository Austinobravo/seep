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

const PrivacyComponent = ({privacyData}: {privacyData: PrivacyType}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
      const [ isOpen, setIsOpen] = React.useState(false)
      const [ data, setData] = React.useState()
      const { toast } = useToast()
      const deletePrivacy = async (id: string) => {
        try{
          const response = await axios.delete(`/api/privacy/${id}`,)
          toast({
            description: response.data.message,
            variant: "success"
          })
          
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
    
      const fetchPrivacy = async (id: string) => {
        try{
          const response = await axios.get(`/api/privacy/${id}`,)
          setData({...response.data, type: "privacy"})
          setIsOpen(true); 
          
        }catch(error:any){
            toast({
              description: error.response.data.message,
              variant: "destructive"
          })
        }
      }
    
  return (
            <div>
                <div className='flex justify-between items-center py-3'>
                    <h3 className='font-bold text-xl'>Privacy Policy</h3>
                    {isDesktop ?
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button type='button'>Create privacy policy</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                        <DialogHeader>
                            <DialogTitle>Create Privacy policy</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                            <PrivacyAndTermsForm type="privacy"/>
                        </DialogContent>
                        
                    </Dialog>
                        :
                        <Drawer>
                        <DrawerTrigger asChild>
                        <Button type='button'>Create privacy policy</Button>
                            
                        </DrawerTrigger>
                        <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                            <div className="z-[51]">
                            <DrawerHeader className="!text-center">
                            <DrawerTitle>Create Privacy policy</DrawerTitle>
                            <DrawerDescription>
                           
                            </DrawerDescription>
                            </DrawerHeader>
                            <PrivacyAndTermsForm type="privacy"/>
                            <DrawerFooter className="pt-2">
                            </DrawerFooter>

                            </div>
                        </DrawerContent>
                        </Drawer>
                        }
                   

                </div>
                    {privacyData ?
                    <div className='bg-blue-100 rounded-lg p-3 text-sm shadow space-y-10'>
                        <p className='line-clamp-6'>
                            <span dangerouslySetInnerHTML={{__html: privacyData.content}}>

                            </span>
                        </p>
                        <div className='flex ml-auto w-fit items-center gap-2'>
                        <Edit className='seep-text-color size-6 cursor-pointer' onClick={() => fetchPrivacy(privacyData.id)}/>
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
                                <Button type='button' variant={'destructive'} onClick={() => deletePrivacy(privacyData.id)} className='border-0'>Delete</Button>

                            </div>
                            </DialogContent>
                            
                        </Dialog>
                        {isDesktop ?
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                            
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-3xl max-h-[550px] overflow-y-auto no-scrollbar">
                            <DialogHeader>
                                <DialogTitle>Edit Privacy policy</DialogTitle>
                                <DialogDescription>Modify the content of this policy.</DialogDescription>
                            </DialogHeader>
                                <PrivacyAndTermsForm data={data} setOpen={setIsOpen}/>
                            </DialogContent>
                            
                        </Dialog>
                            :
                            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                            <DrawerTrigger asChild>
                            
                            </DrawerTrigger>
                            <DrawerContent className="p-3 overflow-y-auto no-scrollbar max-h-[400px] ">
                                <div className="z-[51]">
                                <DrawerHeader className="!text-center">
                                <DrawerTitle>Edit Privacy policy</DrawerTitle>
                                <DrawerDescription>
                                Modify the content of this policy.
                                </DrawerDescription>
                                </DrawerHeader>
                                <PrivacyAndTermsForm data={data} setOpen={setIsOpen}/>
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
                        <figcaption>No policy yet.</figcaption>
                    </figure>
                    }
                    
            </div>
  )
}

export default PrivacyComponent

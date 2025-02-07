"use client"

import { MoveRight, X } from 'lucide-react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import PhoneInput from 'react-phone-number-input'
 
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

import axios from "axios"
import { Loader2 } from "lucide-react"

import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { supportFormSchema } from '@/lib/formSchema'
import BankTransferModal from './BankTransferModal'
import PaymentGateway from './PaymentGateway'


const SupportForm = () => {
    
    const form = useForm<z.infer<typeof supportFormSchema>>({
        resolver: zodResolver(supportFormSchema),
        defaultValues: {
          email: "",
          amount: 10000,
          remark: "",

        },
      })
    const { toast } = useToast()

    
    const onSubmit = async (values: z.infer<typeof supportFormSchema>)=>{

        try{
            const response = await axios.post('/api/support', values)
            if(response.status === 201){
                toast({
                    description: response.data.message,
                    variant: "success"
                })
                form.reset()
                
            }else{
                toast({
                    description: response.data.message,
                    variant: "destructive"
                })
            }

        }catch(error: any){
            toast({
                description: error.response.data.message,
                variant: "destructive"
            })
        }
    }
    const isSubmitting = form.formState.isSubmitting
  return (
        <>
         <Dialog>
      <DialogTrigger asChild >
           <div className='mx-auto w-fit py-10'>
                <button type='button' className='bg-[#FFA807] py-2 px-4 text-white space-x-3 w-fit items-center flex rounded-full'>
                    <span>Support Us</span>
                    <MoveRight/> 
                </button>
            </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
      <DialogHeader>
          <DialogTitle>
            <div className=' flex justify-center flex-col items-center space-y-3 py-3'>
                <Image src={`/images/logo.png`} width={500} height={100} alt='logo' className='w-36'/>
                <h2 className='text-seep-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
            </div>
          </DialogTitle>
          <DialogDescription>
                <h3 className='text-seep-color text-3xl py-2 text-center font-bold'>Thank You</h3>
                <p className='text-seep-color opacity-70 text-sm text-justify '>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
          </DialogDescription>
      </DialogHeader>
      <div className='flex justify-between items-center py-6'>
        <Dialog>
        <DialogTrigger asChild >
              <Button type='button' className='bg-seep-color py-2 px-4 text-white space-x-3 w-fit items-center flex '>
                  <span>Direct Transfer to bank</span>
              </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
        <DialogHeader>
            <DialogTitle>
              <div className=' flex justify-center flex-col items-center space-y-3 py-3'>
                  <Image src={`/images/logo.png`} width={500} height={100} alt='logo' className='w-36'/>
                  <h2 className='text-seep-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
              </div>
            </DialogTitle>
            <DialogDescription>
                  <h3 className='text-seep-color text-3xl py-2 text-center font-bold'>Thank You</h3>
                  <p className='text-seep-color opacity-70 text-sm text-justify '>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
            </DialogDescription>
        </DialogHeader>
            <BankTransferModal/>
        </DialogContent>
        
        </Dialog>
        <Dialog>
            <DialogTrigger asChild >
                <Button type='button' className='bg-[#FFA807] py-2 px-4 text-white space-x-3 w-fit items-center flex'>
                          <span>Online Payment</span>
                  </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[550px] overflow-y-auto no-scrollbar">
            <DialogHeader>
                <DialogTitle>
                  <div className=' flex justify-center flex-col items-center space-y-3 py-3'>
                      <Image src={`/images/logo.png`} width={500} height={100} alt='logo' className='w-36'/>
                      <h2 className='text-seep-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
                  </div>
                </DialogTitle>
                <DialogDescription>
                      <h3 className='text-seep-color text-3xl py-2 text-center font-bold'>Thank You</h3>
                      <p className='text-seep-color opacity-70 text-sm text-justify '>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
                </DialogDescription>
            </DialogHeader>
            <PaymentGateway/>
            </DialogContent>
            
        </Dialog>

      </div>
      </DialogContent>
      
  </Dialog>
        {/* <div className='mx-auto w-fit py-10'>
            <Button title='Support Us' icon={MoveRight} path='' onClick={()=> setIsModalOpen(!isModalOpen)}/>
        </div>
        {isModalOpen && 
            <div className='flex justify-center items-center w-full'>
                <div className='bg-white/30 overflow-y-auto backdrop-blur-xl fixed z-50 top-0 left-0 w-full h-full'>
                    <div className='w-fit ml-auto p-4 cursor-pointer' onClick={()=> setIsModalOpen(!isModalOpen)}>
                        <X className='' size={40}/>
                    </div>
                    <div className='flex justify-center items-center gap-10 w-fit mx-auto '>
                        <div className='md:w-[500px] space-y-3 rounded-2xl px-5 shadow-md bg-white py-10' >
                            <div className=' flex justify-center flex-col items-center space-y-3 py-3'>
                                <Image src={`/images/logo.png`} width={500} height={100} alt='logo' className='w-36'/>
                                <h2 className='text-seep-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
                            </div>
                            <h3 className='text-seep-color text-3xl py-2 text-center font-bold'>Donation</h3>
                            <p className='text-seep-color opacity-70 text-sm text-justify '>Your generosity will enable us to assist these students and young graduates in rural and urban communities, helping them discover and develop their potentials and interest in tech. We invite you to join us in providing everyone with the opportunity to learn through technology. Together, we can make a lasting impact on the lives of many.</p>
                            <form className='space-y-3' onSubmit={submitDonation}>
                                <div>
                                    <label htmlFor='email' className='font-bold opacity-60'>Email Address</label>
                                    <input type='email' id='email' name='email' placeholder='Your Email Address' className='border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none'/>
                                </div>
                                <div>
                                    <label htmlFor='donation' className='font-bold opacity-60'>Amount</label>
                                    <input type='text' id='donation' name='donation' placeholder='Your Donation' defaultValue={10000} className='border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none'/>
                                </div>
                                <div>
                                    <label htmlFor='remark' className='font-bold opacity-60'>Remark</label>
                                    <textarea id='remark' name='remark' placeholder='Remark' rows={5}  className='border-2 px-2 py-3 mt-1 rounded-lg w-full placeholder:text-xs placeholder:text-[#0097FF] border-[#0097FF] outline-none'/>
                                </div>
                                <div className='pb-6 w-fit mx-auto'>
                                    <button type='submit' className='bg-[#FFA807] py-2 px-10 text-white rounded-full '>Donate</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='w-fit mx-auto py-7'>
                    </div>
                </div>
            </div>
        } */}
        </>        
  )
}

export default SupportForm

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

 
import { Button } from "@/components/ui/button"
import BankTransferModal from './BankTransferModal'
import PaymentGateway from './PaymentGateway'


const SupportForm = () => {

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

        </>        
  )
}

export default SupportForm

'use client'
import Button from '@/components/Button'
import { HandHelping, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DonateModal = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = React.useState<boolean>(false)

    const submitDonation =(event: React.FormEvent) => {
        event.preventDefault()
        alert("Thank you")
    }
  return (
    <div>
        <Button title='Give to a helping hand' icon={HandHelping} path=''  onClick={()=> setIsDonateModalOpen(!isDonateModalOpen)}/> 
        {isDonateModalOpen && 
            <div className='bg-black/50 overflow-y-auto fixed z-50 top-0 left-0 w-full h-full'>
                <div className='w-fit ml-auto p-4 cursor-pointer' onClick={()=> setIsDonateModalOpen(!isDonateModalOpen)}>
                    <X className='text-white' size={40}/>
                </div>
                <div className='flex justify-center items-center gap-10 w-fit mx-auto '>
                    <div className=' space-y-3 rounded-2xl px-5 bg-white py-10' >
                        <div className=' bg-white/80 rounded-2xl p-3 w-fit h-fit space-y-3 py-3'>
                            <Image src={`/images/logo.png`} width={100} height={100} alt='logo' className='w-fit'/>
                            <h2 className='seep-text-color text-3xl'>SEEP</h2>
                        </div>
                        <p className='md:w-[500px] opacity-70 '>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
                        <h3 className='seep-text-color text-2xl'>Donate</h3>
                        <form className='space-y-1' onSubmit={submitDonation}>
                            <div>
                                <label htmlFor='email'></label>
                                <input type='email' id='email' name='email' placeholder='Your Email Address' className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                            </div>
                            <div>
                                <label htmlFor='donation'></label>
                                <input type='text' id='donation' name='donation' placeholder='Amount' defaultValue={10000} className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                            </div>
                            <div className='pb-10'>
                                <button type='submit' className='bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-3 w-full rounded-lg '>Donate</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='w-fit mx-auto py-2'>
                    <blockquote className='text-blue-600 bg-white rounded-md p-1'>"Blessed is the hand that giveth"</blockquote>
                </div>
            </div>
        }
      
    </div>
  )
}

export default DonateModal

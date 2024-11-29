"use client"

import Button from '@/components/Button'
import { MoveRight, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SupportForm = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const submitDonation =(event: React.FormEvent) => {
      event.preventDefault()
      alert("Thank you")
  }
  return (
        <>
        <div className='mx-auto w-fit py-10'>
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
                                <h2 className='seep-text-color text-sm'><span className='font-bold'>SEE</span>-SUPPORT CENTRE</h2>
                            </div>
                            <h3 className='seep-text-color text-3xl py-2 text-center font-bold'>Donation</h3>
                            <p className='seep-text-color opacity-70 text-sm text-justify '>Your generosity will enable us to assist these students and young graduates in rural and urban communities, helping them discover and develop their potentials and interest in tech. We invite you to join us in providing everyone with the opportunity to learn through technology. Together, we can make a lasting impact on the lives of many.</p>
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
        }
        </>        
  )
}

export default SupportForm

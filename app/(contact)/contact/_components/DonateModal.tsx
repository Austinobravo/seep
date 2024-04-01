'use client'
import Button from '@/components/Button'
import { HandHelping, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DonateModal = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = React.useState<boolean>(false)
  return (
    <div>
        <Button title='Give to a helping hand' icon={HandHelping} path=''  onClick={()=> setIsDonateModalOpen(!isDonateModalOpen)}/> 
        {isDonateModalOpen && 
            <div className='bg-black/50 fixed z-50 top-0 left-0 w-full h-full'>
                <div className='w-fit ml-auto p-4' onClick={()=> setIsDonateModalOpen(!isDonateModalOpen)}>
                    <X className='text-white' size={40}/>
                </div>
                <div className='flex justify-center items-center gap-10 border w-fit '>
                    <div className='basis-1/2'>
                        <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
                        <p>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
                    </div>
                    <div className='basis-1/2'>
                        <form>
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
            </div>
        }
      
    </div>
  )
}

export default DonateModal

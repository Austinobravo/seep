"use client"
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const JoinHero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const submitDonation =(event: React.FormEvent) => {
    event.preventDefault()
    alert("Thank you")
}
  return (
    <>
    <section className='md:px-20 px-10 space-y-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full bg-cover bg-no-repeat md:bg-right-top bg-center h-[600px] text-white' style={{backgroundImage: `url(/images/join.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>Join Us.</h1>
            </div>
        </div> 
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div>
            <h2 className='seep-text-color leading-relaxed'>Volunteering allows you to impact and connect with your community and the rest of the world. Your dedicated time to our project will help you expand your network, boost your social skills, and advance in your career.</h2>
        </div>     
      </FadeInSection>
      <div className='mx-auto w-fit py-10'>
        <Button title='Join Us' icon={MoveRight} path='' onClick={()=> setIsModalOpen(!isModalOpen)}/>
      </div>
      {isModalOpen && 
            
                <div className='flex justify-center items-center w-full'>
                <div className='bg-white/50 overflow-y-auto backdrop-blur-xl fixed z-50 top-0 left-0 w-full h-full'>
                <div className='w-fit ml-auto p-4 cursor-pointer' onClick={()=> setIsModalOpen(!isModalOpen)}>
                    <X className='' size={40}/>
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
                </div>
            
        }  
    </section>
    </>
  )
}

export default JoinHero

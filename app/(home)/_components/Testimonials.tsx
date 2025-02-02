'use client'
import FadeInSection from '@/hooks/fadeIn'
import { Dot, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Testimonials = () => {
    const [currentImage, setCurrentImage] = React.useState<string>('')
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div className='text-seep-color text-center space-y-2 pb-8'>
                <h3 className=' md:text-5xl text-4xl font-semibold'>SEEP TESTIMONIALS</h3>
                <blockquote className='opacity-90 md:text-3xl text-2xl font-bold'>“A flow of student entrepreneurs into the Nigeria economy”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-innov8ion 2019</p>
                </div>
            </div>
        </FadeInSection>
        <div className='space-y-5'>
            <FadeInSection direction={`up`}>
                <div className='rounded-lg w-full'>
                    <Image src={`/images/below_mission_1.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setCurrentImage(`/images/below_mission_1.png`), setIsModalOpen(!isModalOpen)}}/>
                </div>
            </FadeInSection>
            <div className='flex md:flex-nowrap flex-wrap gap-7'>
                <FadeInSection direction={`left`}>
                    <Image src={`/images/below_mission_2.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[28rem] h-full cursor-pointer' onClick={()=> {setCurrentImage(`/images/below_mission_2.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>
                <FadeInSection direction={`right`}>
                    <Image src={`/images/below_mission_3.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[28rem] h-full cursor-pointer' onClick={()=> {setCurrentImage(`/images/below_mission_3.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>
            </div>
        </div>
        {isModalOpen && 
                    <div className='bg-black/50 fixed left-0 top-0 w-full h-full z-50'>
                        <div className='ml-auto w-fit p-4 cursor-pointer' onClick={()=> setIsModalOpen(!isModalOpen)}>
                            <X className='text-white' size={40}/>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <Image src={currentImage} width={500} height={100} alt='image' className='w-fit rounded-lg flex items-center justify-center md:h-[28rem] h-full'/>
                        </div>
                    </div>
                }   
    </section>
  )
}

export default Testimonials
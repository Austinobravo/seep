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
            <div className='text-seep-color text-center space-y-5 md:pb-8 pb-20'>
                <h3 className='text-4xl font-semibold '>SEEP TESTIMONIALS</h3>
                <hr className='w-40 mx-auto border-2 border-amber-400'/>
                {/* <blockquote className='opacity-90 md:text-3xl text-2xl font-bold'>“A flow of student entrepreneurs into the Nigerian economy”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-innov8ion 2019</p>
                </div> */}
            </div>
        </FadeInSection>
        <div className='relative bg-seep-color px-5 py-10 rounded-md pt-20'>
            <div className='bg-amber-500 absolute -top-10 left-6 text-9xl text-white size-24 pt-16 rounded-full flex justify-center items-center '>
                    “
            </div>
            <div className='flex items-center gap-10 flex-wrap lg:flex-nowrap'>
                <div className='text-white space-y-5'>
                    <blockquote className='opacity-90 md:text-4xl text-3xl font-bold'>“A flow of student entrepreneurs into the Nigerian economy”</blockquote>
                    <div className='flex items-center text-'>
                        <Dot/>
                        <p>SEEP-innov8ion 2019</p>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap md:flex-nowrap'>
                <FadeInSection direction={`up`}>
                    <div className='rounded-lg w-full'>
                        <Image src={`/images/below_mission_1.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full cursor-pointer md:h-[20rem] h-48 object-cover' onClick={()=> {setCurrentImage(`/images/below_mission_1.png`), setIsModalOpen(!isModalOpen)}}/>
                    </div>
                </FadeInSection>
                <FadeInSection direction={`left`}>
                    <Image src={`/images/below_mission_2.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[20rem] h-48 cursor-pointer object-cover' onClick={()=> {setCurrentImage(`/images/below_mission_2.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>
                <FadeInSection direction={`right`}>
                    <Image src={`/images/below_mission_3.png`} width={500} height={100} alt='below_mission_1.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[20rem] h-48 cursor-pointer object-cover' onClick={()=> {setCurrentImage(`/images/below_mission_3.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>

                </div>
                
            </div>


        </div>
        {/* <div className='space-y-5'>
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
        </div> */}
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
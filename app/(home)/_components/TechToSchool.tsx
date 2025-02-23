"use client"
import { Dot, X } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import FadeInSection from '@/hooks/fadeIn'


const TechToSchool = () => {
     const [currentImage, setCurrentImage] = React.useState<string>('')
        const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  return (
    <section className='md:px-20 px-10 pb-16'>
        <FadeInSection direction={`up`}>
            <div className='text-seep-color text-center space-y-2 pb-8'>
                {/* <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-Tech2School 2022</p>
                </div> */}
            </div>  
        </FadeInSection>
        <div className='relative bg-seep-color px-5 py-10 rounded-md pt-20'>
            <div className='bg-amber-500 absolute -top-10 right-6 text-9xl text-white size-24 pt-16 rounded-full flex justify-center items-center '>
                    “
            </div>
            <div className='flex lg:flex-row flex-col-reverse items-center gap-10 lg:flex-nowrap flex-wrap'>
                <div className='flex gap-2 flex-1 md:flex-nowrap flex-wrap'>
                <FadeInSection direction={`up`}>
                    <div className='rounded-lg w-full'>
                        <Image src={`/images/tech1.png`} width={500} height={100} alt='tech1.png' className='rounded-2xl hover:cursor-zoom-in w-full cursor-pointer md:h-[20rem] h-48 object-cover' onClick={()=> {setCurrentImage(`/images/tech1.png`), setIsModalOpen(!isModalOpen)}}/>
                    </div>
                </FadeInSection>
                    <FadeInSection direction={`left`}>
                    <Image src={`/images/tech2.png`} width={500} height={100} alt='tech2.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[20rem] h-48 cursor-pointer object-cover' onClick={()=> {setCurrentImage(`/images/tech2.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>
                <FadeInSection direction={`right`}>
                    <Image src={`/images/tech3.png`} width={500} height={100} alt='tech3.png' className='rounded-2xl hover:cursor-zoom-in w-full md:h-[20rem] h-48 cursor-pointer object-cover' onClick={()=> {setCurrentImage(`/images/tech3.png`), setIsModalOpen(!isModalOpen)}}/>
                </FadeInSection>

                </div>
                <div className='text-white space-y-5'>
                    <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                    <div className='flex lg:justify-end  items-center text-lg'>
                        <Dot/>
                        <p>SEEP-Tech2School 2022</p>
                    </div>
                </div>
                
            </div>


        </div>
        {/* <div className='space-y-5'>
            <div className='rounded-lg w-full space-y-5'>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech1.png`} width={500} height={100} alt='tech1.png' className='rounded-2xl w-full md:h-[28rem] h-48 object-cover'/>
            </FadeInSection>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech2.png`} width={500} height={100} alt='tech1.png' className='rounded-2xl w-full md:h-[28rem] h-48 object-cover'/>
            </FadeInSection>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech3.png`} width={500} height={100} alt='tech1.png' className='rounded-2xl w-full md:h-[28rem] h-48 object-cover'/>
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

export default TechToSchool
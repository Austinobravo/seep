'use client'
import FadeInSection from '@/hooks/fadeIn'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const Images = [
    {
        first: '/images/tech2.png',
        second: '/images/Frame 46.png',
        third: '/images/Frame 47.png'
    },
    {
        first: '/images/Frame 48.png',
        second: '/images/Frame 49.png',
        third: '/images/below_mission_2.png'
    },
    {
        first: '/images/Frame 16.png',
        second: '/images/Frame 52.png',
        third: '/images/Frame 53.png'
    },
]
const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [currentImage, setCurrentImage] = React.useState<string>('')
  return (
    <section className='md:px-20 px-10 '>
        {Images.map((image, index)=> (
            <div key={index} className='space-y-5 py-5'>
                <FadeInSection direction={`up`}>
                    <Image src={image.first} width={500} height={100} alt='image' className='w-full rounded-lg cursor-pointer' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                </FadeInSection>
                <div className='flex md:flex-nowrap flex-wrap gap-5'>
                    <FadeInSection direction={`left`}>
                        <Image src={image.second} width={500} height={100} alt='image' className='w-full rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                    </FadeInSection>
                    <FadeInSection direction={`right`}>
                        <Image src={image.third} width={500} height={100} alt='image' className='w-full rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                    </FadeInSection>
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

            </div>
        ))}
        <FadeInSection direction={`up`}>
            <Image src='/images/tech3.png' width={500} height={100} alt='image' className='w-full rounded-lg pb-10'/>
        </FadeInSection>
      
    </section>
  )
}

export default Gallery

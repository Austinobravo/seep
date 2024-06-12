'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { Dot, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const ImagesOf2019 = [
    {
        first: '',
        second: '/images/Frame 46.png',
        third: '/images/Frame 47.png'
    },
    {
        first: '/images/Frame 48.png',
        second: '/images/Frame 49.png',
        third: '/images/below_mission_2.png'
    },

]
const ImagesOf2022 = [

    {
        first: '/images/Frame 16.png',
        second: '/images/Frame 52.png',
        third: '/images/Frame 53.png'
    },
    {
        first: '/images/tech3.png',
        second: '',
        third: ''
    },
]
const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [currentImage, setCurrentImage] = React.useState<string>('')
  return (
    <section className='md:px-20 px-10 '>
        <div>
            <div className='seep-text-color text-center space-y-2 py-8'>
                <blockquote className='opacity-90 md:text-3xl text-2xl font-bold'>“A flow of student entrepreneurs into the nigerian economy”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP 2019 Theme</p>
                </div>
            </div>
            {ImagesOf2019.map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                    <FadeInSection direction={`up`}>
                        {image.first && 
                            <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                        }
                    </FadeInSection>
                    <div className='flex md:flex-nowrap flex-wrap gap-5'>
                        <FadeInSection direction={`left`}>
                        {image.second && 
                            <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                            }
                        </FadeInSection>
                        <FadeInSection direction={`right`}>
                            {image.third && 
                            <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                            }
                        </FadeInSection>
                    </div>

                </div>
            ))}
            <div className='ml-auto w-fit py-10'>
                <Button title='View More' icon={ZoomIn} path=''/>
            </div>
        </div>
        <div>
            <div className='seep-text-color text-center space-y-2 py-8'>
                <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP 2022 Theme</p>
                </div>
            </div>  
            {ImagesOf2022.map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                <FadeInSection direction={`up`}>
                    {image.first && 
                        <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                    }
                </FadeInSection>
                <div className='flex md:flex-nowrap flex-wrap gap-5'>
                    <FadeInSection direction={`left`}>
                    {image.second && 
                        <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                        }
                    </FadeInSection>
                    <FadeInSection direction={`right`}>
                        {image.third && 
                        <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                        }
                    </FadeInSection>
                </div>

            </div>
            ))}
        </div>
        <FadeInSection direction={`up`}>
            <Image src='/images/tech2.png' width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg pb-10'/>
        </FadeInSection>
        <div className='ml-auto w-fit py-10'>
            <Button title='View More' icon={ZoomIn} path=''/>
      </div>
        <div>
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
      
    </section>
  )
}

export default Gallery

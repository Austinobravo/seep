'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { ArrowLeft, ArrowRight, Dot, X, ZoomIn } from 'lucide-react'
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
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
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
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
    


]
const ImagesOf2022 = [

    {
        first: '/images/Frame 16.png',
        second: '/images/Frame 53.png ',
        third: '/images/Tech2schools-43.png'
    },
    {
        first: '',
        second: '/images/tech3.png',
        third: '/images/tech2.png'
    },
    {
        first: '/images/Tech2schools-65.png',
        second: '',
        third: ''
    },
    {
        first: '/images/Tech2schools-65.png',
        second: '',
        third: ''
    },
]
const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [currentImage, setCurrentImage] = React.useState<string>('')

    
    const [currentImageIndexof2019, setCurrentImageIndexof2019] = React.useState<number>(0)
    const [currentImageEndIndexof2019, setCurrentImageEndIndexof2019] = React.useState<number>(3)

    const IncrementImagesOf2019 = () => {
        if(currentImageEndIndexof2019 < ImagesOf2019.length){
            setCurrentImageIndexof2019(currentImageEndIndexof2019)
            setCurrentImageEndIndexof2019((prev) => (ImagesOf2019.length) - prev < 3 ? prev + (ImagesOf2019.length ) - prev : prev + 3 )
        }else{
            return
        }
    }
    const DecrementImagesOf2019 = () => {
        if(currentImageIndexof2019 === 0){
            return
        }else{
            setCurrentImageIndexof2019((prev) => prev - 3)
            setCurrentImageEndIndexof2019(currentImageIndexof2019)
        }
    }

    const [currentImageIndexof2022, setCurrentImageIndexof2022] = React.useState<number>(0)
    const [currentImageEndIndexof2022, setCurrentImageEndIndexof2022] = React.useState<number>(3)

    const IncrementImagesOf2022 = () => {
        if(currentImageEndIndexof2022 < ImagesOf2022.length){
            setCurrentImageIndexof2022(currentImageEndIndexof2022)
            setCurrentImageEndIndexof2022((prev) => (ImagesOf2022.length) - prev < 3 ? prev + (ImagesOf2022.length ) - prev : prev + 3 )
        }else{
            return
        }
    }
    const DecrementImagesOf2022 = () => {
        if(currentImageIndexof2022 === 0){
            return
        }else{
            setCurrentImageIndexof2022((prev) => prev - 3)
            setCurrentImageEndIndexof2022(currentImageIndexof2022)
        }
    }
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
            {ImagesOf2019.slice(currentImageIndexof2019, currentImageEndIndexof2019).map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                    <FadeInSection direction={`up`}>
                        {image.first && 
                            <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                        }
                    </FadeInSection>
                    <div className='flex md:flex-nowrap flex-wrap gap-5'>
                        <FadeInSection direction={`left`}>
                        {image.second && 
                            <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full md:object-cover ' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                            }
                        </FadeInSection>
                        <FadeInSection direction={`right`}>
                            {image.third && 
                            <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full md:object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                            }
                        </FadeInSection>
                    </div>

                </div>
            ))}
            <div className='flex items-center justify-between w-full py-10 '>
                {currentImageIndexof2019 > 0 && 
                    <div className='' onClick={DecrementImagesOf2019}>
                        <Button title='' icon={ArrowLeft} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }
                {currentImageEndIndexof2019 < ImagesOf2019.length && 
                    <div className='ml-auto w-fit ' onClick={IncrementImagesOf2019}>
                        <Button title='' icon={ArrowRight} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }

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
            {ImagesOf2022.slice(currentImageIndexof2022, currentImageEndIndexof2022).map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                <FadeInSection direction={`up`}>
                    {image.first && 
                        <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                    }
                </FadeInSection>
                <div className='flex md:flex-nowrap flex-wrap gap-5'>
                    <FadeInSection direction={`left`}>
                    {image.second && 
                        <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full md:object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                        }
                    </FadeInSection>
                    <FadeInSection direction={`right`}>
                        {image.third && 
                        <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-full md:object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                        }
                    </FadeInSection>
                </div>

            </div>
            ))}
        </div>
        <div className='flex items-center justify-between w-full py-10 '>
                {currentImageIndexof2022 > 0 && 
                    <div className='' onClick={DecrementImagesOf2022}>
                        <Button title='' icon={ArrowLeft} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }
                {currentImageEndIndexof2022 < ImagesOf2022.length && 
                    <div className='ml-auto w-fit ' onClick={IncrementImagesOf2022}>
                        <Button title='' icon={ArrowRight} path='' onClick={(e)=>e.preventDefault()}/>
                    </div>
                }

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

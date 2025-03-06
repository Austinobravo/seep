'use client'
import FadeInSection from '@/hooks/fadeIn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const imagesAndText = [
    {
        image: '/images/Union.png',
        name: 'Research',
        description: "We are research driven."
    },
    {
        image: '/images/Star.png',
        name: 'Innovation',
        description: "We believe in innovation."
    },
    {
        image: '/images/naira.svg',
        name: 'Empowerment',
        description: "We empower as a watchword."
        
    },
    {
        image: '/images/earth.png',
        name: 'Science',
        description: "We utilize science to improve individuals."
        
    },
    {
        image: '/images/Vector.png',
        name: 'Technology',
        description: "We utilize technology as a leeway for improvement."
    },
]
const Drivers = () => {
    const [current, setCurrent] = React.useState<number>(0)
    const [isCurrentHovered, setIsCurrentHovered] = React.useState<string>('')
    const [isHovered, setIsHovered] = React.useState<boolean>(false)

    const next = () => {
        setCurrent((prev) => prev === imagesAndText.length -1 ? 0 : prev + 1)
    }
    const previous = () => {
        setCurrent((prev)=> prev === 0 ? imagesAndText.length - 1 : prev -1)
    }

    React.useEffect(()=> {
        const interval = setInterval(()=>{
            return next()
        },5000)
        return ()=>clearInterval(interval)
    }, [current])
  return (
    <section className='py-16 '>
        <FadeInSection direction={`up`}>
            <h2 className='py-5 text-center text-4xl text-seep-color font-bold'>Core Drivers</h2>
            <hr className='w-40 mx-auto border-2 border-amber-400'/>

            <div className={`lg:flex gap-x-60 hidden basis-1/2 justify-center items-center w-full mx-auto pt-10`}>
                {imagesAndText.slice(0,3).map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center space-y-3 p-2 relative' title={item.name} onMouseEnter={()=>{setIsCurrentHovered(item.name), setIsHovered(!isHovered)}} onMouseLeave={()=>{setIsCurrentHovered(item.name), setIsHovered(!isHovered)}}>
                        <Image src={`${item.image}`} width={40} height={100} alt={item.name}/>
                        <span className='text-2xl text-seep-color font-bold' >{item.name}</span>
                        <div className={`${isHovered && item.name === isCurrentHovered ? "opacity-100 -translate-x-28": "opacity-0 -translate-x-20"} transition-all duration-500`}>
                        {/* {isHovered && item.name === isCurrentHovered && */}
                            <div className='absolute w-80 shadow-md rounded-md bg-white p-4 !-mt-40 space-y-5'>
                                <div className='flex items-center gap-5'>
                                    <Image src={`${item.image}`} width={40} height={100} alt={item.name}/>
                                    <span className='text-2xl text-seep-color font-bold' >{item.name}</span>
                                </div>
                                <p className='text-gray-700 text-sm'>{item.description}</p>
                            </div>
                        {/* } */}

                        </div>
                    </div>
                ))}

            </div>
            <div className={`lg:flex gap-x-64 pt-10 hidden basis-1/2 justify-center items-center w-full mx-auto`}>
                {imagesAndText.slice(3).map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center space-y-3 p-2' title={item.name} onMouseEnter={()=>{setIsCurrentHovered(item.name), setIsHovered(!isHovered)}} onMouseLeave={()=>{setIsCurrentHovered(item.name), setIsHovered(!isHovered)}}>
                        <Image src={`${item.image}`} width={50} height={100} alt={item.name}/>
                        <span className='text-2xl text-seep-color font-bold'>{item.name}</span>
                        <div className={`${isHovered && item.name === isCurrentHovered ? "opacity-100 -translate-x-28": "opacity-0 -translate-x-20"} transition-all duration-500`}>

                            <div className='absolute w-80 shadow-md rounded-md bg-white p-4 !-mt-40 space-y-5'>
                                <div className='flex items-center gap-5'>
                                    <Image src={`${item.image}`} width={40} height={100} alt={item.name}/>
                                    <span className='text-2xl text-seep-color font-bold' >{item.name}</span>
                                </div>
                                <p className='text-gray-700 text-sm'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="bg-white flex lg:hidden items-center h-[200px] py-5 px-10 justify-between">
                <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={1} loop={true} autoplay={{delay: 3000, disableOnInteraction: false}}  className="w-full flex items-center" navigation={{prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"}}>

                    {imagesAndText.map((item, index) => (
                        <SwiperSlide  key={index} className="">
                            <div className='size-fit mx-auto flex flex-col items-center gap-y-4' >
                                <Image src={item.image} width={80} height={100} alt={`${item.name}`} />
                                <span className='text-2xl text-seep-color hover:underline font-bold'>{item.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <button onClick={previous} className="swiper-button-prev after:!content-[''] absolute left-20 rounded-full border !size-10 font-semibold bg-seep-color !text-[#ddd]">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className=" swiper-button-next after:!content-[''] absolute right-20 rounded-full border !size-10 bg-seep-color font-semibold !text-[#ddd]">
                    <ChevronRight size={40} />
                </button>
            </div>
        </FadeInSection>
    </section>
  )
}

export default Drivers
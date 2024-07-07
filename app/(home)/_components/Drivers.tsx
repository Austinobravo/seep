'use client'
import FadeInSection from '@/hooks/fadeIn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const imagesAndText = [
    {
        image: '/images/Union.png',
        name: 'Research'
    },
    {
        image: '/images/Star.png',
        name: 'Innovation'
    },
    {
        image: '/images/₦.png',
        name: 'Empowerment'
    },
    {
        image: '/images/earth.png',
        name: 'Science'
    },
    {
        image: '/images/Vector.png',
        name: 'Technology'
    },
]
const Drivers = () => {
    const [current, setCurrent] = React.useState<number>(0)

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
            <h2 className='py-10 text-center text-4xl seep-text-color hover:underline font-bold'>Core Drivers</h2>
            <div className='lg:flex hidden  gap-14 justify-center items-center w-full mx-auto'>
                {imagesAndText.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center space-y-3 cursor-pointer hover:bg-black/10 hover:rounded-lg p-2'>
                        <Image src={`${item.image}`} width={40} height={100} alt={item.name}/>
                        <span className='text-2xl seep-text-color hover:underline font-bold'>{item.name}</span>
                    </div>
                ))}

            </div>
            <div className="bg-white flex lg:hidden items-center h-[200px] py-5 px-10 justify-between">
                <button onClick={previous} className="rounded-full border h-fit w-fit seep-bg-color text-[#ddd]">
                    <ChevronLeft size={40} />
                </button>
                {imagesAndText.map((item, index) => (
                <div key={index} className={index === current ? "flex flex-col items-center" : "hidden"}>
                    <Image src={item.image} width={80} height={100} alt={`${item.name}`} />
                    <span className='text-2xl seep-text-color hover:underline font-bold'>{item.name}</span>
                </div>
                ))}
                <button onClick={next} className="rounded-full border h-fit w-fit seep-bg-color  text-[#ddd]">
                    <ChevronRight size={40} />
                </button>
            </div>
        </FadeInSection>
    </section>
  )
}

export default Drivers
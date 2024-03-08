import Button from '@/components/Button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='px-10'>
        <div className='w-full bg-cover bg-right-top h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/hero.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col pl-10 justify-center space-y-5'>
                <h1 className='text-4xl leading-relaxed md:w-[600px]'>Creating a network of business opportunities and ideas, for a sustainable global economy.</h1>
                <Button title="Learn More" icon={MoveRight}/>

            </div>
        </div>
    </section>
  )
}

export default Hero
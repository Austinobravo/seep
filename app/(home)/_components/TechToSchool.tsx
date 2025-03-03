import { Dot } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import FadeInSection from '@/hooks/fadeIn'


const TechToSchool = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div className='text-seep-color text-center space-y-2 pb-8'>
                <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-Tech2School 2022</p>
                </div>
            </div>  
        </FadeInSection>
        <div className='space-y-5'>
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
            
        </div>
    </section>
  )
}

export default TechToSchool
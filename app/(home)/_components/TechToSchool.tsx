import { Dot } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import FadeInSection from '@/hooks/fadeIn'


const TechToSchool = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color text-center space-y-2 pb-8'>
                <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP 2022 Theme</p>
                </div>
            </div>  
        </FadeInSection>
        <div className='space-y-5'>
            <div className='rounded-lg w-full space-y-5'>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech1.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
            </FadeInSection>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech2.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
            </FadeInSection>
            <FadeInSection direction={`up`}>
                <Image src={`/images/tech3.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
            </FadeInSection>
            </div>
            
        </div>
    </section>
  )
}

export default TechToSchool
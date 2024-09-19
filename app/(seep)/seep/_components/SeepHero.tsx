'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SeepHero = () => {
  const [isViewed, setIsViewed] = React.useState<boolean>(false)
  return (
    <section className='md:px-20 px-10'>
      <FadeInSection direction={`up`}>
        <div className='bg-cover bg-no-repeat w-full md:bg-top bg-center md:h-[500px] h-[600px] rounded-2xl border text-white' style={{backgroundImage: `url(/images/seep_hero.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent md:h-[500px] h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <Image src={`/images/seep_logo.png`} width={100} height={100} alt='seep_logo'/>
                <h1 className='md:text-4xl text-2xl  leading-relaxed md:w-[600px]'>A Non-Profit program for Student Entrepreneurs.</h1>
                <p className={`md:w-[600px] md:text-base text-sm  text-gray-100  transition delay-150 duration-700 ease-in-out ${isViewed ? 'translate-y-4' : 'line-clamp-3 '}`}>SEEP is an offshoot of the SEE-Support Center initiative designed to drive innovation and empowerment in the academic environment. The SEEP program is carefully crafted to thread academics and entrepreneurship for a developed and sustainable Nigerian, African and the Global economy. To create global impact, we are committed to Screening, Training, Mentoring, Networking, Empowering and Supervising Student Entrepreneurs in Nigeria. The SEEP program is driven in unity with the core drivers of the SEE-Support Center initiative. We are committed to creating a platform to birth and nurture innovative ideas that will greatly impact the global environment.</p>
                <Button title={`${isViewed ? 'Finished reading' : 'Read More'}`} icon={isViewed ? MoveLeft : MoveRight} path='' onClick={(event) =>{event.preventDefault(), setIsViewed(!isViewed)}}/>

            </div>
        </div>     
      </FadeInSection>
    </section>
  )
}

export default SeepHero
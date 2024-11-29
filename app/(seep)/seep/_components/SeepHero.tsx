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
        <div className='bg-cover bg-no-repeat w-full md:bg-top bg-center h-[600px] rounded-2xl border text-white' style={{backgroundImage: `url(/images/seep_hero.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <Image src={`/images/seep_logo.png`} width={100} height={100} alt='seep_logo'/>
                <h1 className='md:text-4xl text-2xl  leading-relaxed md:w-[600px]'>A Non-Profit program for Student Entrepreneurs.</h1>
                <p className={`md:w-[600px] md:text-base text-sm  text-gray-100  transition delay-150 duration-700 ease-in-out ${isViewed ? 'translate-y-4' : 'line-clamp-3 '}`}>
                  SEEP is an offshoot of the SEE-Support Center initiative, designed to drive innovation and empowerment in the academic environment. The SEEP program carefully integrates academics and entrepreneurship to foster a developed and sustainable global, African, and Nigerian economy. We achieve this by screening, training, mentoring, networking, empowering, and supervising student entrepreneurs in Nigeria. 
                  Aligning with the SEE-Support Center's core drivers, our mission is to create a platform that births and nurtures innovative ideas, making profound impacts on the global and Nigerian socio-economic environment.
                  Our team has launched two SEEP programs - “The SEEP-innov8ion” and “The SEEP-Tech-2-School” programs for tertiary institutions and secondary schools respectively.
                </p>
                <Button title={`${isViewed ? 'Finished reading' : 'Read More'}`} icon={isViewed ? MoveLeft : MoveRight} path='' onClick={(event) =>{event.preventDefault(), setIsViewed(!isViewed)}}/>

            </div>
        </div>     
      </FadeInSection>
    </section>
  )
}

export default SeepHero
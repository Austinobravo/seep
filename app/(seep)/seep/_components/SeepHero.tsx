import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight } from 'lucide-react'
import React from 'react'

const SeepHero = () => {
  return (
    <section className='md:px-20 px-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/seep_hero.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                <h1 className='md:text-4xl text-2xl  leading-relaxed md:w-[600px]'>A Non-Profit program for Student Entrepreneurs.</h1>
                <p className=' md:w-[600px] md:text-base text-sm  text-gray-200'>SEEP is an offshoot of the SEE-Support Center initiative designed to drive innovation and empowerment in the academic environment. The SEEP program is carefully crafted to thread academics and entrepreneurship for a developed and sustainable Nigerian, African and the Global economy. To create global impact, we are committed to Screening, Training, Mentoring, Networking, Empowering and Supervising Student Entrepreneurs in Nigeria.tThe SEEP program is driven in unity with the core drivers of the SEE-Support Center initiative. We are committed to creating a platform to birth and nurture innovative ideas that will greatly impact the global environment.</p>
                {/* <Button title="Learn More" icon={MoveRight} path=''/> */}

            </div>
        </div>     
      </FadeInSection>
    </section>
  )
}

export default SeepHero
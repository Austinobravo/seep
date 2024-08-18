import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className={`md:px-20 px-10`} id='hero'>
      <FadeInSection direction={`up`}>
        <div className='w-full lg:bg-contain  bg-no-repeat md:bg-right-top bg-center md:h-[600px] h-[480px]  rounded-2xl text-white home-hero-image'>
            <div className='md:bg-gradient-to-r from-[#0097FF] via-transparent to-transparent md:h-[600px] h-[500px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <h1 className='md:text-4xl text-2xl  leading-relaxed md:w-[600px]'>Social Entrepreneurial Enhancement Support Center (SEE - Support Center)</h1>
                <p className='leading-relaxed md:w-[600px]'>Creating a network of business opportunities and ideas, for a sustainable global economy.</p>
                <Button title="Learn More" icon={MoveRight} path='/about'/>
            </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default Hero
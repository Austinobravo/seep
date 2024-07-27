import FadeInSection from '@/hooks/fadeIn'
import React from 'react'

const AboutHero = () => {
  return (
    <section className='md:px-20 px-10 space-y-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full lg:bg-contain bg-cover bg-no-repeat md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/about.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>About Us</h1>
            </div>
        </div> 
      </FadeInSection>
    </section>
  )
}

export default AboutHero

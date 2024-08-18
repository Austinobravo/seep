import FadeInSection from '@/hooks/fadeIn'
import React from 'react'
import JoinForm from './JoinForm'

const JoinHero = () => {

  return (
    <>
    <section className='md:px-20 px-10 space-y-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full bg-cover bg-no-repeat md:bg-right-top bg-center md:h-[600px] h-[480px] text-white rounded-2xl' style={{backgroundImage: `url(/images/join.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent md:h-[600px] h-[480px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>Join Us.</h1>
            </div>
        </div> 
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div>
            <h2 className='seep-text-color leading-relaxed'>Volunteering allows you to impact and connect with your community and the rest of the world. Your dedicated time to our project will help you expand your network, boost your social skills, and advance in your career.</h2>
        </div>     
      </FadeInSection>
        <JoinForm/> 
    </section>
    </>
  )
}

export default JoinHero

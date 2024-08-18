import FadeInSection from '@/hooks/fadeIn'
import React from 'react'
import SupportForm from './SupportForm'

const SupportHero = () => {

  return (
    <section className='md:px-20 px-10 space-y-10'>
      <FadeInSection direction={`up`}>
        <div className='w-full bg-cover md:bg-right-top bg-center md:h-[600px] h-[480px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent md:h-[600px] h-[480px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>Support Us.</h1>
            </div>
        </div>       
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div>
            <h2 className='seep-text-color leading-relaxed'>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</h2>
        </div>        
      </FadeInSection>
      
      <SupportForm/>

    </section>
  )
}

export default SupportHero

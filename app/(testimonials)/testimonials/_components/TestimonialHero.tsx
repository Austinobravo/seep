import React from 'react'

const TestimonialHero = () => {
  return (
    <section className='md:px-20 px-10 space-y-10'>
        <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
            <div className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                <h1 className='md:text-6xl text-3xl  leading-relaxed md:w-[600px]'>Testimonials</h1>
            </div>
        </div>
    </section>
  )
}

export default TestimonialHero
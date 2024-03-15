import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Testimonials = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <div className='seep-text-color text-center space-y-2 pb-8'>
            <h3 className=' md:text-5xl text-4xl font-semibold'>SEEP TESTIMONIALS</h3>
            <blockquote className='opacity-90 md:text-3xl text-2xl font-bold'>“A flow of student entrepreneurs into the nigerian economy”</blockquote>
            <div className='flex justify-center items-center text-lg'>
                <Dot/>
                <p>SEEP 2019 Theme</p>
            </div>
        </div>
        <div className='space-y-5'>
            <div className='rounded-lg w-full'>
                <Image src={`/images/below_mission_1.png`} width={200} height={100} alt='below_mission_1.png' className='rounded-2xl w-full'/>
            </div>
            <div className='flex md:flex-nowrap flex-wrap gap-7'>
                <Image src={`/images/below_mission_2.png`} width={200} height={100} alt='below_mission_1.png' className='rounded-2xl w-full'/>
                <Image src={`/images/below_mission_3.png`} width={200} height={100} alt='below_mission_1.png' className='rounded-2xl w-full'/>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
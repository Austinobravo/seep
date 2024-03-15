import { Dot } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const TechToSchool = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <div className='seep-text-color text-center space-y-2 pb-8'>
            <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
            <div className='flex justify-center items-center text-lg'>
                <Dot/>
                <p>SEEP 2022 Theme</p>
            </div>
        </div>
        <div className='space-y-5'>
            <div className='rounded-lg w-full space-y-5'>
                <Image src={`/images/tech1.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
                <Image src={`/images/tech2.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
                <Image src={`/images/tech3.png`} width={200} height={100} alt='tech1.png' className='rounded-2xl w-full'/>
            </div>
            
        </div>
    </section>
  )
}

export default TechToSchool
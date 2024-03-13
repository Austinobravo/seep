import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='md:px-20 px-10 space-y-10'>
        <Image src='/images/tech2.png' width={100} height={100} alt='image' className='w-full'/>
        <div className='flex md:flex-nowrap flex-wrap'>
            <Image src='/images/tech2.png' width={100} height={100} alt='image' className='w-full'/>
            <Image src='/images/tech2.png' width={100} height={100} alt='image' className='w-full'/>
        </div>
      
    </section>
  )
}

export default Gallery

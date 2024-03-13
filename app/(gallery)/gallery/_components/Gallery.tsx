import Image from 'next/image'
import React from 'react'
const Images = [
    {
        first: '/images/tech2.png',
        second: '/images/Frame 46.png',
        third: '/images/Frame 47.png'
    },
    {
        first: '/images/Frame 48.png',
        second: '/images/Frame 49.png',
        third: '/images/below_mission_2.png'
    },
    {
        first: '/images/Frame 16.png',
        second: '/images/Frame 52.png',
        third: '/images/Frame 53.png'
    },
]
const Gallery = () => {
  return (
    <section className='md:px-20 px-10 '>
        {Images.map((image, index)=> (
            <div key={index} className='space-y-5 py-5'>
                <Image src={image.first} width={200} height={100} alt='image' className='w-full rounded-lg'/>
                <div className='flex md:flex-nowrap flex-wrap gap-5'>
                    <Image src={image.second} width={200} height={100} alt='image' className='w-full rounded-lg'/>
                    <Image src={image.third} width={200} height={100} alt='image' className='w-full rounded-lg'/>
                </div>

            </div>
        ))}
        <Image src='/images/tech3.png' width={200} height={100} alt='image' className='w-full rounded-lg pb-10'/>
      
    </section>
  )
}

export default Gallery

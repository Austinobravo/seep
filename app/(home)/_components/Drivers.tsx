import Image from 'next/image'
import React from 'react'
const imagesAndText = [
    {
        image: '/images/Union.png',
        name: 'Research'
    },
    {
        image: '/images/Star.png',
        name: 'Innovation'
    },
    {
        image: '/images/₦.png',
        name: 'Empowerment'
    },
    {
        image: '/images/earth.png',
        name: 'Science'
    },
    {
        image: '/images/Vector.png',
        name: 'Technology'
    },
]
const Drivers = () => {
  return (
    <section className='py-16 '>
        <h2 className='py-10 text-center text-4xl seep-text-color hover:underline font-bold'>Core Drivers</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-16 w-full mx-auto'>
            {imagesAndText.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center space-y-3'>
                    <Image src={`${item.image}`} width={50} height={100} alt={item.name}/>
                    <span className='text-2xl seep-text-color hover:underline font-bold'>{item.name}</span>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Drivers
import FadeInSection from '@/hooks/fadeIn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const blogContent = [
    {
        title: "Future Technology Blog",
        description: "Stay informed with our blog section dedicated to future technology",
        image: "/images/discovertech.jpg"
    },
    {
        title: "Future Technology Blog",
        description: "Stay informed with our blog section dedicated to future technology",
        image: "/images/discovertech.jpg"
    },
    {
        title: "Future Technology Blog",
        description: "Stay informed with our blog section dedicated to future technology",
        image: "/images/discovertech.jpg"
    },
]
const Discover = () => {
  return (
    <section className='pt-20 pb-5 space-y-7'>
        <h3 className='seep-bg-color w-fit py-1 leading-10 tracking-wider px-7 rounded-tr-full rounded-br-full text-white text-lg '>Discover</h3>
        <div className='space-y-7'>
            {blogContent.map((content, index) => (
                <div  key={`content.title${index}`} >
                    <FadeInSection direction="up">
                    <div className='bg-[#cceaff] flex md:flex-row flex-col-reverse md:px-16 px-8 justify-between md:gap-10 gap-5 items-center py-5'>
                            <div className='seep-text-color space-y-2'>
                                <Link href={`/news/id`}>
                                    <h3 className='md:text-2xl text-lg font-semibold'>{content.title}</h3> 
                                </Link>
                                <p className='opacity-70 text-sm md:text-base'>{content.description}</p>
                            </div>
                            <Image src={content.image} width={500} height={200} alt={content.title} className='rounded-xl hover:opacity-90'/>
                    </div>
                    </FadeInSection>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Discover

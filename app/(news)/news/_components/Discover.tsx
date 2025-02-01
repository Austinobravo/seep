import FadeInSection from '@/hooks/fadeIn'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// const blogContent = [
//     {
//         title: "Future Technology Blog",
//         description: "Stay informed with our blog section dedicated to future technology",
//         image: "/images/discovertech.jpg"
//     },
//     {
//         title: "Future Technology Blog",
//         description: "Stay informed with our blog section dedicated to future technology",
//         image: "/images/discovertech.jpg"
//     },
//     {
//         title: "Future Technology Blog",
//         description: "Stay informed with our blog section dedicated to future technology",
//         image: "/images/discovertech.jpg"
//     },
// ]
const Discover = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)
    const blogContent:NewsType[] = response.data
  return (
    <section className='pt-20 pb-5 space-y-7'>
        <h3 className='seep-bg-color w-fit py-1 leading-10 tracking-wider px-7 rounded-tr-full rounded-br-full text-white text-lg '>Discover</h3>
        {blogContent.length >= 1 ?
        <div className='space-y-7'>
            {blogContent.slice(0,3).map((content, index) => (
                <div  key={`content.title${index}`} >
                    <FadeInSection direction="up">
                    <div className='bg-[#cceaff] flex md:flex-row flex-col-reverse md:px-16 px-8 justify-between md:gap-10 gap-5 items-center py-5'>
                            <div className='seep-text-color space-y-2'>
                                <Link href={`/news/id`}>
                                    <h3 className='md:text-2xl text-lg font-semibold'>{content.title}</h3> 
                                </Link>
                                <p className='line-clamp-2'>
                                    <span className='opacity-70 text-sm md:text-base'>{content.newsContent[0]?.paragraph ? content.newsContent[0]?.paragraph : <span dangerouslySetInnerHTML={{__html: content?.otherOptions}}/>}</span>
                                </p>
                            </div>
                            <Image src={content.image} width={500} height={200} alt={content.title} className='rounded-xl hover:opacity-90'/>
                    </div>
                    </FadeInSection>
                </div>
            ))}
        </div>
        :
        <figure className='mx-auto w-fit text-center'>
        <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
        <figcaption>No news yet.</figcaption>
    </figure>
        }
      
    </section>
  )
}

export default Discover

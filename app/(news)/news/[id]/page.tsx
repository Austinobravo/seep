"use client"
import FadeInSection from '@/hooks/fadeIn'
import { ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import RelatedNews from '../_components/RelatedNews'
import handleIdScroll from '@/hooks/handleIdScroll'

const contents = [
    {
        heading: "Introduction",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },
    {
        heading: "AI in Diagnostic Imaging",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },
    {
        heading: "Predictive Analyis and Disease Prevention",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },
    {
        heading: "Ethical Considerations",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },
    {
        heading: "The Future of AI in Healthcare",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },
    {
        heading: "Conclusion",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis doloribus iste veritatis vitae suscipit nobis, voluptate, itaque excepturi architecto dolores, eos nam? Iure repudiandae veritatis deleniti natus sunt."
    },

]
const NewsDetail = () => {
  return (
    <>
    <section className='md:px-20 px-10 space-y-5'>
        {/* <FadeInSection direction={`up`}>
            <div className='w-full bg-cover md:bg-right-top bg-center  rounded-2xl text-white' style={{backgroundImage: `url(/images/discovertech.jpg)`}}>
            </div>    
        </FadeInSection> */}
        <FadeInSection direction={`up`}>  
            <Image src={`/images/discovertech.jpg`} width={500} height={500} alt='detail' className='rounded-2xl w-full h-[450px] object-cover opacity-80'/>
        </FadeInSection> 
        <h3 className='text-center seep-text-color md:text-3xl text-2xl font-semibold'>Future Technology blog</h3>
        <div className='flex gap-10 pt-10 md:flex-row flex-col-reverse'>
            <section className='basis-3/4'>
                {contents.map((content) => (
                    <div key={content.heading} id={content.heading} className='seep-text-color space-y-3 pb-5'>
                        <h3 className='md:text-3xl text-2xl'>{content.heading}</h3>
                        <p className='opacity-70 md:text-base text-sm'>{content.content} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad accusantium facere id eveniet minima tempore, saepe rerum laborum nulla, laudantium voluptate, nobis accusamus ex cumque eum. Totam laborum nostrum quia?</p>
                    </div>
                ))}

            </section>
            <aside className='basis-1/4 space-y-7 md:sticky top-24 h-fit'>
                <div className='flex justify-between seep-text-color gap-3'>
                    <div className='flex gap-1 bg-blue-200 rounded-full py-2 px-4 items-center'>
                        <Heart/>
                        <span>24.5k</span>
                    </div>
                    <div className='flex gap-1 bg-blue-200 rounded-full py-2 px-4 items-center'>
                        <Eye/>
                        <span>50k</span>
                    </div>
                    <div className='flex gap-1 bg-blue-200 rounded-full py-2 px-4 items-center'>
                        <ExternalLink/>
                        <span>206</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 seep-text-color gap-y-4 '>
                    <div>
                        <h3 className='font-bold'>Publication Date</h3>
                        <p className='opacity-70 pt-1'>October 15, 2024</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Category</h3>
                        <p className='opacity-70 pt-1'>Artificial Intelligence</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Reading Time</h3>
                        <p className='opacity-70 pt-1'>10 Min</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Author Name</h3>
                        <p className='opacity-70 pt-1'>Emily Walker</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-amber-500 font-semibold'>Table of Contents</h3>
                    <ul className='bg-blue-100 rounded-lg p-7 space-y-3 seep-text-color text-sm'>
                        {contents.map((content) => (
                            <li key={content.heading} onClick={()=>handleIdScroll(content.heading)} className='marker:text-blue-500 list-disc cursor-pointer'>
                                {content.heading}
                            </li>
                        ))}
                    </ul>
                </div>

            </aside>
        </div>

    </section>
    <RelatedNews/>
    </>
  )
}

export default NewsDetail

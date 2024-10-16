import FadeInSection from '@/hooks/fadeIn'
import { ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
    <section className='md:px-16 px-8 space-y-5'>
        {/* <FadeInSection direction={`up`}>
            <div className='w-full bg-cover md:bg-right-top bg-center  rounded-2xl text-white' style={{backgroundImage: `url(/images/discovertech.jpg)`}}>
            </div>    
        </FadeInSection> */}
        <FadeInSection direction={`up`}>  
            <Image src={`/images/discovertech.jpg`} width={500} height={500} alt='detail' className='rounded-2xl w-full h-[450px] object-cover'/>
        </FadeInSection> 
        <h3 className='text-center seep-text-color text-3xl font-semibold'>Future Technology blog</h3>
        <div>
            <section>
                {contents.map((content) => (
                    <div key={content.heading} className='seep-text-color'>
                        <h3 className='text-2xl'>{content.heading}</h3>
                        <p className='opacity-70'>{content.content}</p>
                    </div>
                ))}

            </section>
            <aside>
                <div>
                    <div>
                        <Heart/>
                        <span>24.5k</span>
                    </div>
                    <div>
                        <Eye/>
                        <span>50k</span>
                    </div>
                    <div>
                        <ExternalLink/>
                        <span>206</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Publication Date</h3>
                        <p>October 15, 2024</p>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div>
                        <h3>Reading Time</h3>
                        <p>10 Min</p>
                    </div>
                    <div>
                        <h3>Author Name</h3>
                        <p>Emily Walker</p>
                    </div>
                </div>
                <div>
                    <h3>Table of Contents</h3>
                    <ul>
                        {contents.map((content) => (
                            <li key={content.heading} className='marker:text-blue-500 list-disc'>
                                {content.heading}
                            </li>
                        ))}
                    </ul>
                </div>

            </aside>
        </div>

    </section>
  )
}

export default NewsDetail

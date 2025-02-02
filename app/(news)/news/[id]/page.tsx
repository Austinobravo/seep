import FadeInSection from '@/hooks/fadeIn'
import { ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import RelatedNews from '../_components/RelatedNews'
import axios from 'axios'
import TableOfContents from '../_components/TableOfContents'

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
const NewsDetail = async ({params}: {params: {id: string}}) => {
    const {id} = params
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`)
    const news:NewsType = response.data

     const calculateReadingTime = (text: string, wordPerMinute:number = 200): number => {
        const words = text.trim().split(/\s+/).length
        return Math.ceil(words / wordPerMinute)
     }

     const readingTime = calculateReadingTime(news.newsContent.map((content) => content.paragraph || news.otherOptions).join(" "))
  return (
    <>
    <section className='md:px-20 px-8 space-y-5'>
        {/* <FadeInSection direction={`up`}>
            <div className='w-full bg-cover md:bg-right-top bg-center  rounded-2xl text-white' style={{backgroundImage: `url(/images/discovertech.jpg)`}}>
            </div>    
        </FadeInSection> */}
        <FadeInSection direction={`up`}>  
            <Image src={`${encodeURI(news.image)}`} width={500} height={500} alt='detail' className='rounded-2xl w-full h-[450px] object-cover opacity-80'/>
        </FadeInSection> 
        <h3 className='text-center text-seep-color md:text-3xl text-2xl font-semibold'>{news.title}</h3>
        <div className='flex gap-10 pt-10 md:flex-row flex-col-reverse'>
                {news.newsContent.length >= 1 ?
                    <section className='basis-3/4'>
                        {news.newsContent.map((content) => (
                            <div key={content.heading} id={content.heading} className='text-seep-color space-y-3 pb-5'>
                                <h3 className='md:text-3xl text-2xl'>{content.heading}</h3>
                                <p className='opacity-70 md:text-base text-sm'>{content.paragraph} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad accusantium facere id eveniet minima tempore, saepe rerum laborum nulla, laudantium voluptate, nobis accusamus ex cumque eum. Totam laborum nostrum quia?</p>
                            </div>
                        ))}

                    </section>
                :
                <section  dangerouslySetInnerHTML={{__html: news.otherOptions}}/>
                }
            <aside className='basis-1/4 space-y-7 md:sticky top-24 h-fit'>
                <div className='flex justify-between text-seep-color gap-3'>
                    <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
                        <Heart/>
                        <span>24.5k</span>
                    </div>
                    <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
                        <Eye/>
                        <span>50k</span>
                    </div>
                    <div className='flex gap-1 bg-blue-200 rounded-full w-fit h-9 px-1 items-center'>
                        <ExternalLink/>
                        <span>206</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 text-seep-color gap-y-4 '>
                    <div>
                        <h3 className='font-bold'>Publication Date</h3>
                        <p className='opacity-70 pt-1'>{new Date(news.createdAt).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"} )}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Category</h3>
                        <p className='opacity-70 pt-1 capitalize'>{news.category.name}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Reading Time</h3>
                        <p className='opacity-70 pt-1'>{readingTime} Min</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Author Name</h3>
                        <p className='opacity-70 pt-1'>{news.user.firstName} {news.user.lastName}</p>
                    </div>
                </div>
                {news.newsContent[0].heading &&
                    <TableOfContents news={news}/>
                }

            </aside>
        </div>

    </section>
    <RelatedNews news={news}/>
    </>
  )
}

export default NewsDetail

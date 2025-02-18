import FadeInSection from '@/hooks/fadeIn'
import { ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import RelatedNews from '../_components/RelatedNews'
import axios from 'axios'
import TableOfContents from '../_components/TableOfContents'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'


async function getBlogContent(id:string) {
    try {
      const res = await fetch(`${BASE_URL}/api/news/${id}`, {
        cache: "no-store", // Ensures fresh data every request
         
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Failed to fetch blog content:", error);
      return []; // Return empty array to avoid crashes
    }
  }

const NewsDetail = async ({params}: {params: {id: string}}) => {
    const {id} = params
    const news:NewsType = await getBlogContent(id)


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
            <img loading='lazy' src={`${encodeURI(news.image)}`} width={500} height={500} alt='detail' className='rounded-2xl w-full h-[450px] object-cover opacity-80'/>
        </FadeInSection> 
        <h3 className='text-center text-seep-color md:text-3xl text-2xl font-semibold'>{news.title}</h3>
        <div className='flex gap-10 py-10 md:flex-row flex-col-reverse'>
               
                    <section className='basis-3/4'>
                        {news.newsContent.length >= 1 && news.newsContent.map((content) => (
                            <div key={content.heading} id={content.heading} className=' space-y-3 pb-5'>
                                <h3 className='md:text-3xl text-2xl text-seep-color'>{content.heading}</h3>
                                <p className='opacity-70 md:text-base text-sm'>{content.paragraph}</p>
                            </div>
                        ))}
                        {news.otherOptions && 
                             <div className="whitespace-pre-wrap "  dangerouslySetInnerHTML={{__html: news.otherOptions}}/>
                        }
                    </section>
                
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
                <div className='grid grid-cols-2 text-seep-color gap-4 '>
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
                        <p className='opacity-70 pt-1'>{news.user?.firstName} {news.user?.lastName}</p>
                    </div>
                </div>
                {news.newsContent[0]?.heading &&
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

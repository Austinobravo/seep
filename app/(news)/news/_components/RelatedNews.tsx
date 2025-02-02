import axios from 'axios'
import { ArrowUpRight, ExternalLink, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// const contents = [
//     {
//         image: "/images/discovertech.jpg",
//         heading: "Entrepreneurship and Startups",
//         category: "Innovation",
//         likes: "2.2k",
//         share: "60",
//         link: ""
//     },
//     {
//         image: "/images/Ai.png",
//         heading: "Giants Unveil Cutting-Edge AI Innovations",
//         category: "Technology",
//         likes: "2.2k",
//         share: "60",
//         link: ""
//     },
//     {
//         image: "/images/Tech2schools-65.png",
//         heading: "Tech to School",
//         category: "Impact",
//         likes: "2.2k",
//         share: "60",
//         link: ""
//     },
// ]

interface newsProps{
    news: NewsType
}
const RelatedNews = async ({news}: newsProps) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)
    const relatedNews:NewsType[] = response.data.filter((content: NewsType) => content.category.id === news.category.id && content.id !== news.id )
  return (
    <>
    {relatedNews.length >= 1 &&
    <section className='space-y-7 py-5 md:px-20 px-3'>
        <div className='bg-gray-100 shadow-md flex justify-between py-3 md:text-xl text-base px-2 text-seep-color rounded-lg'>
            <h3 className=''>Related News</h3>
            <Link href={`/news/related`} className='flex'>View All News <ArrowUpRight className='text-amber-500 pl-1'/></Link>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 '>
            {relatedNews.slice(0,3).map((content) => (
                <div key={content.id} className='shadow-2xl bg-gray-100 p-4 rounded-lg text-seep-color space-y-3'>
                    <Image src={encodeURI(content.image)} width={500} height={500} alt={content.title} className='object-cover h-40'/>
                    <div>
                        <h3 className='font-bold'>{content.title}</h3>
                        <p className='opacity-70'>{content.category.name}</p>
                    </div>
                    <div className='flex justify-between text-seep-color gap-3 py-4 flex-wrap'>
                        <div className='flex gap-1 bg-blue-200  rounded-full  w-fit h-9 px-2 text-sm items-center'>
                            <Heart size={15}/>
                            <span>24.5k</span>
                        </div>
                        <div className='flex gap-1 bg-blue-200 text-sm rounded-full w-fit h-9 px-4 items-center'>
                            <ExternalLink size={15}/>
                            <span>60</span>
                        </div>
                        <Link href={`/news/${content.slug}`} className='flex bg-blue-200  text-sm rounded-full w-fit h-9 px-2 items-center'>
                            <span>Read More</span>
                            <ArrowUpRight size={15} className='text-amber-500'/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      
    </section>
    }
    </>
  )
}

export default RelatedNews

import { formatDateToString } from '@/lib/globals'
import axios from 'axios'
import { ArrowUpRight, ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNewsCard = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)
    const contents:NewsType[] = response.data
  return (
    <>
     {contents.length >=1 ?
        <div className='md:px-20 px-10 space-y-10 py-10'>
            <span className='font-semibold bg-seep-color text-white px-4 py-2'>Latest News</span>
            {contents.slice(0,5).map((content) => (
                <div key={content.id} className='flex justify-between lg:flex-row flex-col-reverse gap-x-10 gap-y-7 p-4 bg-gray-100 shadow-xl rounded-md w-fit'>
                    <div className='basis-3/4 flex justify-between  flex-col'>
                        <div className='flex gap-5 items-center text-gray-600 sm:text-sm text-xs flex-wrap'>
                            <Image src={`/images/avatar.webp`} width={200} height={200} alt='' className='w-10 h-10 rounded-full'/>
                            <h3>{content.user.firstName} {content.user.lastName}</h3>
                            <span>{formatDateToString(content.createdAt)}</span>
                        </div>
                        <div className='py-8 space-y-3'>
                            <h4 className='font-semibold sm:text-lg text-'>{content.title}</h4>
                            <p className='text-gray-600 sm:text-base text-xs'>{content.newsContent[0]?.paragraph ? content.newsContent[0]?.paragraph : <span dangerouslySetInnerHTML={{__html: content?.otherOptions}}/>}</p>
                        </div>
                        <div className='flex justify-between flex-wrap gap-4 items-end'>
                            <div className='flex justify-between text-seep-color flex-wrap gap-3 '>
                                <div className='flex gap-1 bg-blue-200 rounded-full text-sm w-fit h-9 px-2 items-center'>
                                    <Heart/>
                                    <span>24.5k</span>
                                </div>
                                <div className='flex gap-1 bg-blue-200 rounded-full text-sm w-fit h-9 px-2 items-center'>
                                    <Eye/>
                                    <span>50k</span>
                                </div>
                                <div className='flex gap-1 bg-blue-200 rounded-full text-sm w-fit h-9 px-2 items-center'>
                                    <ExternalLink/>
                                    <span>206</span>
                                </div>
                                
                            </div>
                            <Link href={`/news/${content.slug}`} className='flex text-seep-color bg-blue-200  rounded-full text-sm w-fit h-9 px-2 items-center'>
                                <span>Read More</span>
                                <ArrowUpRight className=''/>
                            </Link>
                        </div>
                    </div>
                    <div className=''>
                        <Image src={`${encodeURI(content.image)}`} width={500} height={500} alt={content.title} className='rounded-2xl size-full shadow'/>
                    </div>
                </div>

            ))}
        
        </div>
     :
     <figure className='mx-auto w-fit text-center'>
        <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
        <figcaption>No news yet.</figcaption>
    </figure>
     }
    </>
  )
}

export default LatestNewsCard

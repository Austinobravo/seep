import axios from 'axios'
import { ArrowUpRight, ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BASE_URL, formatDateToString } from "@/lib/globals";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export const dynamic = 'force-dynamic'
interface newsProps{
    news: NewsType
}

async function getNews() {
    try {
      const res = await fetch(`${BASE_URL}/api/news`, {
        cache: "no-store", // Ensures fresh data every request
         
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
      return []; // Return empty array to avoid crashes
    }
  }

  
const RelatedNews = async ({news}: newsProps) => {
    const response:NewsType[] = await getNews()
    const relatedNews = response.filter((content: NewsType) => content.category.id === news.category.id && content.id !== news.id )

  return (
    <>
    {/* {relatedNews.length >= 1 &&
    <section className='space-y-7 py-5 md:px-20 px-3'>
        <div className='bg-gray-100 shadow-md flex justify-between py-3 md:text-xl text-base px-2 text-seep-color rounded-lg'>
            <h3 className=''>Related News</h3>
            <Link href={`/news/related`} className='flex'>View All News <ArrowUpRight className='text-amber-500 pl-1'/></Link>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 '>
            {relatedNews.slice(0,3).map((content) => (
                <div key={content.id} className='shadow-2xl bg-gray-100 p-4 rounded-lg text-seep-color space-y-3'>
                    <img loading='lazy' src={encodeURI(content.image)} width={500} height={500} alt={content.title} className='object-cover h-40'/>
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
    } */}

{relatedNews.length >=1 &&

<div className='bg-seep-color/10 py-7 '>
  <div className='md:px-20 px-3'>
    <div className='flex justify-between items-center py-3'>
      <h3 className='font-bold py-2'>Related News</h3>
      <Link href={`/news/related`} className='border px-4 py-1 bg-black hover:bg-transparent text-white hover:text-black transition-all duration-700 flex gap-1'><Eye className=""/> See more</Link>

    </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {relatedNews.slice(0,3).map((post, index) => (
              <div key={`${post}-${index}`}>
                  <Card className=" flex flex-col justify-between h-80 no-scrollbar overflow-auto" >
                      <CardHeader className='p-1'>
                      <CardTitle className="">
                        <Link  href={`/news/${post.slug}`} >
                          <Image
                                  src={`${post.image}`}
                                  width={500}
                                  height={500}
                                  alt={post.title}
                                  className="object-cover h-40 w-full"
                              />
                        </Link>
                      </CardTitle>
                      </CardHeader>
                      <CardContent className="flex gap-1 flex-col p-1">
                          <Link href={`/news/${post.slug}`} className=""><h3 className='font-bold text-xl capitalize hover:text-seep-color/70 text-seep-color transition-all duration-500'>{post.title}</h3></Link>
                          <p className='opacity-70'>{post.category.name}</p>
                          <p>{post.newsContent.length ? post.newsContent[0]?.paragraph : typeof window !== "undefined" && <span className='whitespace-pre-wrap' dangerouslySetInnerHTML={{__html: `${post?.otherOptions.slice(0,100)}` }}></span> }</p>
                          
                          <div className='flex justify-between items-center'>
                            <div className='flex gap-3'>
                                <div className="bg-gray-200 rounded-full size-10 flex justify-center items-center">
                                    <span className="sr-only">User avatar</span>
                                    {post.user.image ? (
                                      <Image
                                          src={`${post.user.image}`}
                                          width={200}
                                          height={200}
                                          alt={post.userId}
                                          className="size-10 rounded-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                      src={`/images/avatar.webp`}
                                      width={200}
                                      height={200}
                                      alt={post.userId}
                                      className="size-10 rounded-full object-cover"
                                  />
                                    )}
                                </div>
                                <div className='text-sm pb-5'>
                                    <h4 className='text-seep-color capitalize'>{post.userId}</h4>
                                    <p>{formatDateToString(post.createdAt)}</p>
                                </div>

                            </div>
                            <div className='flex items-center gap-2'>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                  <div className="capitalize truncate">
                                      <div className='flex text-xs gap-1 items-center'>
                                        <Heart className='text-red-500' size={12}/>
                                        <span>40</span>
                                      </div>
                                    
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  40 Likes
                                </TooltipContent>
                              </Tooltip>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                  <div className='flex text-xs gap-1 items-center'>
                                  <Eye className='text-seep-color' size={12}/>
                                  <span>100</span>
                                </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  100 Views
                                </TooltipContent>
                              </Tooltip>
                              
                            </div>

                          </div>
                  
                  </CardContent>
                  </Card>

              </div>
          ))}

      </div>

  </div>

</div>
}
    </>
  )
}

export default RelatedNews

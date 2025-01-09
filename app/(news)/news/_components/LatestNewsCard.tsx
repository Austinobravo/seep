import { ArrowUpRight, ExternalLink, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNewsCard = () => {
  return (
    <div className='md:px-20 px-10 space-y-10 py-10'>
        <span className='seep-text-color border py-2 px-4 font-semibold'>Latest News</span>
        {[1,2,3,4].map((item) => (
            <div key={item} className='flex justify-between lg:flex-row flex-col-reverse gap-x-10 gap-y-7 p-4 border border-blue-500 shadow w-fit'>
                <div className='basis-3/4 '>
                    <div className='flex gap-5 items-center text-gray-600 text-sm'>
                        <Image src={`/images/avatar.webp`} width={200} height={200} alt='' className='w-10 h-10 rounded-full'/>
                        <h3>Nwankwo Joy</h3>
                        <span>4 days ago</span>
                    </div>
                    <div className='py-8 space-y-3'>
                        <h4 className='font-semibold text-lg'>Your portfolio is stopping you from getting that job</h4>
                        <p className='text-gray-600'>An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...</p>
                    </div>
                    <div className='flex justify-between'>
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
                        <Link href={``} className='flex seep-text-color bg-blue-200 w-fit text-sm rounded-full px-4 py-2 items-center'>
                            <span>Read More</span>
                            <ArrowUpRight className=''/>
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <Image src={`/images/discovertech.jpg`} width={500} height={500} alt='detail' className='rounded-2xl size-full shadow'/>
                </div>
            </div>

        ))}
      
    </div>
  )
}

export default LatestNewsCard

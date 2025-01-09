'use client'
import { ArrowUpRight, ExternalLink, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories = [
    {
        name: 'Impact',
        content: [
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Making Impact',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'
                
            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Making Impact',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'
                
            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Making Impact',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'
                
            },
        ]
    },
    {
        name: 'Technology',
        content: [
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Technology makes everything easy.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'
                
            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Technology makes everything easy.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'
                
            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Technology makes everything easy.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'

            },
        ]
    },
    {
        name: 'Research',
        content: [
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Benefits of research',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'

            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Benefits of research',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'

            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Benefits of research',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/beneficiaries.png'

            },
        ]
    },
    {
        name: 'Innovation',
        content: [
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Innovation : The key thing.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'

            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Innovation : The key thing.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'

            },
            {
                user_avatar: '/images/avatar.webp',
                user_name: 'Nwankwo Joy',
                published_date: '4 days ago',
                title: 'Innovation : The key thing.',
                likes: '2.2k',
                share: '60',
                url: '1',
                image: '/images/discovertech.jpg'

            },
        ]
    },
]
const RelatedNewsCard = () => {
    const [currentCategory, setCurrentCategory] = React.useState<string>('Impact')
  return (
    <div className='space-y-7 py-10 md:px-20 px-10'>
        <span className='font-semibold seep-bg-color text-white px-4 py-2'>Related News</span>

        <div className='flex flex-wrap items-center justify-center gap-x-7 gap-y-4'>
            {categories.map((category, index) => (
                <button key={`${category.name}`} onClick={()=> setCurrentCategory(category.name)} type='button' className={`${currentCategory === category.name && 'seep-bg-color text-white border-0'} cursor-pointer py-1 px-5 rounded-md border-blue-500 border`}>{category.name}</button>
            ))}
        </div>
        <div className=''>
            {categories.map((category) => (
                <div key={`${category.name}`} className='grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5'>
                    {currentCategory === category.name && category.content.map((cat, index) => (
                        <div key={`${category.name}-${cat.title}-${index}`} className='border p-2 rounded-lg shadow'>
                            <div style={{'backgroundImage': `url(${cat.image}`}} className='bg-center bg-cover h-40 w-full bg-no-repeat  items-end flex '>
                                <div className='gap-2 text-white text-sm items-end flex bg-gradient-to-b from-transparent via-[#0097FF] to-[#0097FF] w-full p-2'>
                                    <Image src={`${cat.user_avatar}`} width={500} height={500} alt='detail' className='rounded-2xl w-10 h-10 shadow'/>
                                    <h3 className='font-semibold'>{cat.user_name}</h3>
                                    <span className='text-xs'>{cat.published_date}</span> 
                                </div>
                            </div>
                            <div>
                                <div className='py-4'>
                                    <h4 className='font-semibold'>{cat.title}</h4>
                                    <h5 className='font-light opacity-80'>{category.name} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusamus in veniam voluptatem itaque, consectetur, quam totam eligendi fugit magnam ror....</h5>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex justify-between seep-text-color gap-3'>
                                        <div className='flex gap-1 bg-blue-200 rounded-full py-2 px-3 items-center'>
                                            <Heart/>
                                            <span>24.5k</span>
                                        </div>

                                        <div className='flex gap-1 bg-blue-200 rounded-full py-2 px-3 items-center'>
                                            <ExternalLink/>
                                            <span>206</span>
                                        </div>
                                        
                                    </div>
                                    <Link href={``} className='flex seep-text-color bg-blue-200 w-fit text-sm rounded-full px-3 py-2 items-center'>
                                        <span>Read More</span>
                                        <ArrowUpRight className=''/>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default RelatedNewsCard

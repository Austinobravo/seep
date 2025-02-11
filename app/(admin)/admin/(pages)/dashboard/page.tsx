import React from 'react'
import AdminNav from '../_components/AdminNav'
import { Goal, Heart, Send, StickyNote } from 'lucide-react'
import DashboardCard from '../_components/DashboardCard'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { DashboardPieChart } from '../_components/DashboardPieChart'
import { DashboardBarChart } from '../_components/DashboardBarChart'

import axios from 'axios'
import { formatDateToString } from '@/lib/globals'

 


// const data = [
//   {
//     title: "Entrepreneurship and startups",
//     post_date: "16 Nov 2021",
//     category: "Innovations",
//     comment: "136",
//     image: '/images/tech1.png'
//   },
//   {
//     title: "Giants Unveil Cutting-Edge AI Innovation",
//     post_date: "16 Nov 2021",
//     category: "Technology",
//     comment: "136",
//     image: '/images/Ai.png'
//   },
//   {
//     title: "Tech 2 school",
//     post_date: "16 Nov 2021",
//     category: "Impact",
//     comment: "136",
//     image: '/images/tech2.png'
//   },
 
// ]
const DashboardPage = async() => {
  let news:NewsType[] = []
  try{
    const newsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)
    news = newsResponse.data

  }catch(error){
    console.error("Error in the dashboard", error)
  }

  const contents = [
    {
      icon: StickyNote,
      title: news.length,
      text: 'News',
      iconColor: '#00AEB8'
    },
    {
      icon: Send,
      title: 0,
      text: 'Shares',
      iconColor: '#0097FF'
    },
    {
      icon: Heart,
      title: 0,
      text: 'Likes',
      iconColor: '#CA3132'
    },
    {
      icon: Goal,
      title: 0,
      text: 'Views',
      iconColor: '#FF8700'
    },
  ]
    
  return (
    <div className='space-y-7'>
        <AdminNav title='Dashboard' user='Joy'/>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
          {contents.map((content) => (
            <DashboardCard key={content.text} icon={content.icon} iconColor={content.iconColor} text={content.text} total={content.title} />
          ))}
        </div>
        <DashboardBarChart/>
        <div className='flex gap-4 md:flex-nowrap flex-wrap'>
          <Table>
            <TableHeader className='border rounded-lg text-seep-color '>
              <TableRow >
                <TableHead className="w-[400px] max-w-xs text-seep-color font-bold">Article Title</TableHead>
                <TableHead className='text-seep-color font-bold'>Post Date</TableHead>
                <TableHead className='text-seep-color font-bold'>Categories</TableHead>
                <TableHead className="text-right text-seep-color font-bold">Publisher</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.length >= 1 ?
                    news.slice(0,3).map((item) => (
                      <TableRow key={item.title}>
                        <TableCell className="font-medium flex gap-4 md:flex-nowrap flex-wrap">
                          <Image src={item.image} width={300} height={400} alt={item.title} className='size-16 object-cover rounded-md'/>
                          <span className='text-seep-color'>{item.title}</span>
                        </TableCell>
                        <TableCell>{formatDateToString(item.createdAt)}</TableCell>
                        <TableCell >
                          <span className='bg-seep-color text-white px-4 py-2 rounded-xl w-fit capitalize'>{item.category.name}</span>
                          </TableCell>
                        <TableCell className="text-right capitalize">{item.userId}</TableCell>
                      </TableRow>
                    ))
              :
               <figure className='mx-auto w-fit text-center'>
                    <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No News Image" className='aspect-ratio'/>
                    <figcaption>No news yet.</figcaption>
                </figure>
              }
            </TableBody>
          </Table>
          <DashboardPieChart/>
        </div>

      
    </div>
  )
}

export default DashboardPage

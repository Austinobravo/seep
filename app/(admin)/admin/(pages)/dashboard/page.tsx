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
import { BASE_URL } from "@/lib/globals";
 
export const dynamic = 'force-dynamic'


async function getNewsData() {
  try {
    const res = await fetch(`${BASE_URL}/api/news`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch news content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const DashboardPage = async() => {
  const news:NewsType[] = await getNewsData()

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
                          <Image src={item.image} width={300} height={400} alt={item.title} className='size-16 object-cover rounded-md' unoptimized/>
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

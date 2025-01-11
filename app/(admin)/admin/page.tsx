import React from 'react'
import AdminNav from './_components/AdminNav'
import { Goal, Heart, Send, StickyNote } from 'lucide-react'
import DashboardCard from './_components/DashboardCard'
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
import { DashboardPieChart } from './_components/DashboardPieChart'
import { DashboardBarChart } from './_components/DashboardBarChart'
 
const contents = [
  {
    icon: StickyNote,
    title: '248',
    text: 'Posts',
    iconColor: '#00AEB8'
  },
  {
    icon: Send,
    title: '18.38k',
    text: 'Shares',
    iconColor: '#0097FF'
  },
  {
    icon: Heart,
    title: '248.5k',
    text: 'Likes',
    iconColor: '#CA3132'
  },
  {
    icon: Goal,
    title: '248k',
    text: 'Views',
    iconColor: '#FF8700'
  },
]

const data = [
  {
    title: "Entrepreneurship and startups",
    post_date: "16 Nov 2021",
    category: "Innovations",
    comment: "136",
    image: '/images/tech1.png'
  },
  {
    title: "Giants Unveil Cutting-Edge AI Innovation",
    post_date: "16 Nov 2021",
    category: "Technology",
    comment: "136",
    image: '/images/Ai.png'
  },
  {
    title: "Tech 2 school",
    post_date: "16 Nov 2021",
    category: "Impact",
    comment: "136",
    image: '/images/tech2.png'
  },
 
]
const DashboardPage = () => {
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
            <TableHeader className='border rounded-lg seep-text-color '>
              <TableRow >
                <TableHead className="w-[400px] max-w-xs seep-text-color font-bold">Article Title</TableHead>
                <TableHead className='seep-text-color font-bold'>Post Date</TableHead>
                <TableHead className='seep-text-color font-bold'>Categories</TableHead>
                <TableHead className="text-right seep-text-color font-bold">Comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.title}>
                  <TableCell className="font-medium flex gap-4 md:flex-nowrap flex-wrap">
                    <Image src={item.image} width={300} height={400} alt={item.title} className='size-16 object-cover rounded-md'/>
                    <span className='seep-text-color'>{item.title}</span>
                  </TableCell>
                  <TableCell>{item.post_date}</TableCell>
                  <TableCell >
                    <span className='seep-bg-color text-white px-4 py-2 rounded-xl w-fit'>{item.category}</span>
                    </TableCell>
                  <TableCell className="text-right">{item.comment} comments</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <DashboardPieChart/>
        </div>

      
    </div>
  )
}

export default DashboardPage

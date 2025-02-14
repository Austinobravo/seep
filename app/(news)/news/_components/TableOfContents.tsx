"use client"
import handleIdScroll from '@/hooks/handleIdScroll'
import React from 'react'
import { TableOfContents as Tb } from 'lucide-react'
import { validateForEmptySpaces } from '@/lib/globals'

const TableOfContents = ({news}: {news:NewsType}) => {
  return (
    <div className='space-y-3'>
        <div className='flex items-center gap-x-2'>
            <Tb className='text-seep-color' size={15}/> 
            <h3 className='text-amber-500 font-semibold'>Table of Contents</h3>
        </div>
        <ul className='bg-blue-100 rounded-lg p-7 space-y-3 text-seep-color text-sm'>
            {news.newsContent.filter((news) => validateForEmptySpaces(news.heading)).map((content) => (
                <li key={content.heading} onClick={()=>handleIdScroll(content.heading)} className='marker:text-blue-500 list-disc cursor-pointer'>
                    {content.heading}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TableOfContents

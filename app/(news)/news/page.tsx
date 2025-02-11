import React from 'react'
import NewsHero from './_components/NewsHero'
import Counter from '@/components/Counter'
import NewsCategories from './_components/NewsCategories'
import Discover from './_components/Discover'
import Beneficiaries from '@/app/(seep)/seep/_components/Beneficiaries'
import LatestNews from './_components/LatestNews'
import axios from 'axios'
import { BASE_URL } from '@/lib/globals'

const Text= [
  {
      heading: '1700',
      paragraph: 'Students Impacted'
  },
  {
      heading: '15',
      paragraph: 'Skills Learnt'
  },
  {
      heading: '5',
      paragraph: 'Schools Improved'
  },
]
export const dynamic = 'force-dynamic'

const page = async () => {
  let blogContent:NewsType[] = []

    try{
      const response = await axios.get(`${BASE_URL}/api/news`)
      blogContent = response.data
  
    }catch(error){
      console.error("Error fetching News,", error)
    }
  return (
    <div>
        <NewsHero/>
        <Counter Text={Text}/>
        <NewsCategories/>
        <Discover blogContent={blogContent}/>
        <Beneficiaries/>
        <LatestNews/>
      
    </div>
  )
}

export default page

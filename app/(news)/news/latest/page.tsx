import React from 'react'
import NewsHero from '../_components/NewsHero'
import LatestNewsCard from '../_components/LatestNewsCard'
import RelatedNews from '../_components/RelatedNews'
import axios from 'axios'
import { BASE_URL } from '@/lib/globals'

export const dynamic = 'force-dynamic'

const LatestNewsPage = async () => {
   
  let contents:NewsType[] = []

  try{
    const response = await axios.get(`${BASE_URL}/api/news`)
    contents  = response.data

  }catch(error){
    console.error("Error fetching News", error)
  }
  return (
    <div>
        <NewsHero/>
        <LatestNewsCard contents={contents}/>
        {/* <RelatedNews/> */}
      
    </div>
  )
}

export default LatestNewsPage

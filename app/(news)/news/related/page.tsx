import React from 'react'
import NewsHero from '../_components/NewsHero'
import RelatedNewsCard from '../_components/RelatedNewsCard'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

const RelatedNewsPage = async () => {
  let categories:CategoryType[] = []

  try{
    const response = await axios.get(`${BASE_URL}/api/category`)
    categories = response.data

  }catch(error){
    console.error("Error fetching News", error)
  }
  return (
    <div>
        <NewsHero/>
        <RelatedNewsCard categories={categories}/>
      
    </div>
  )
}

export default RelatedNewsPage

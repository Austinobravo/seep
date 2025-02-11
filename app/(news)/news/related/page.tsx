import React from 'react'
import NewsHero from '../_components/NewsHero'
import RelatedNewsCard from '../_components/RelatedNewsCard'
import axios from 'axios'

const RelatedNewsPage = async () => {
  let categories:CategoryType[] = []

  try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
    categories = response.data

  }catch(error){
    console.error("Error fetching relatedNews", error)
  }
  return (
    <div>
        <NewsHero/>
        <RelatedNewsCard categories={categories}/>
      
    </div>
  )
}

export default RelatedNewsPage

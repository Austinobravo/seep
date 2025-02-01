import React from 'react'
import NewsHero from '../_components/NewsHero'
import RelatedNewsCard from '../_components/RelatedNewsCard'
import axios from 'axios'

const RelatedNewsPage = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`)
  const categories:CategoryType[] = response.data
  return (
    <div>
        <NewsHero/>
        <RelatedNewsCard categories={categories}/>
      
    </div>
  )
}

export default RelatedNewsPage

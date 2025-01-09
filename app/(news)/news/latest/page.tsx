import React from 'react'
import NewsHero from '../_components/NewsHero'
import LatestNewsCard from '../_components/LatestNewsCard'
import RelatedNews from '../_components/RelatedNews'

const LatestNewsPage = () => {
  return (
    <div>
        <NewsHero/>
        <LatestNewsCard />
        <RelatedNews/>
      
    </div>
  )
}

export default LatestNewsPage

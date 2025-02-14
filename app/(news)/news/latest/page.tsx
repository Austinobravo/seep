import React from 'react'
import NewsHero from '../_components/NewsHero'
import LatestNewsCard from '../_components/LatestNewsCard'
import RelatedNews from '../_components/RelatedNews'

import { BASE_URL } from '@/lib/globals'

export const dynamic = 'force-dynamic'

async function getBlogContent() {
  try {
    const res = await fetch(`${BASE_URL}/api/news`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch blog content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const LatestNewsPage = async () => {
   
  const contents = await getBlogContent()

  return (
    <div>
        <NewsHero/>
        <LatestNewsCard contents={contents}/>
        {/* <RelatedNews/> */}
      
    </div>
  )
}

export default LatestNewsPage

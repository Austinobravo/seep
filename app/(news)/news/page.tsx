import React from 'react'
import NewsHero from './_components/NewsHero'
import Counter from '@/components/Counter'
import NewsCategories from './_components/NewsCategories'
import Discover from './_components/Discover'
import Beneficiaries from '@/app/(seep)/seep/_components/Beneficiaries'
import LatestNews from './_components/LatestNews'

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

const page = async () => {
  const blogContent = await getBlogContent()


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

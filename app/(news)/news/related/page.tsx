import React from 'react'
import NewsHero from '../_components/NewsHero'
import RelatedNewsCard from '../_components/RelatedNewsCard'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL}/api/category`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetchcategory:", error);
    return []; // Return empty array to avoid crashes
  }
}

const RelatedNewsPage = async () => {
  const  categories = await getCategories()

  return (
    <div>
        <NewsHero/>
        <RelatedNewsCard categories={categories}/>
      
    </div>
  )
}

export default RelatedNewsPage

import React from 'react'
import GalleryHero from './_components/GalleryHero'
import Gallery from './_components/Gallery'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'


async function getGalleryCategory() {
  try {
    const res = await fetch(`${BASE_URL}/api/galleryCategory`, {
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
  const galleryCategory = await getGalleryCategory()
  return (
    <div>
        <GalleryHero/>
        <Gallery data={galleryCategory}/>
      
    </div>
  )
}

export default page

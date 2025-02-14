import React from 'react'
import AdminNav from '../_components/AdminNav'
import GalleryCategoryForm from './_components/GalleryCategoryForm'
import GalleryCategoryTable from './_components/GalleryCategoryTable'
import axios from 'axios'
import GalleryImageForm from './_components/GalleryImageForm'
import GalleryImageTable from './_components/GalleryImageTable'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'



async function getGalleryCategoryData() {
  try {
    const res = await fetch(`${BASE_URL}/api/galleryCategory`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch gallery content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const GalleryPage = async () => {
  const category:GalleryCategoryType[] = await getGalleryCategoryData()
  return (
    <div>
         <AdminNav title='Gallery'/>
            <div>
                <h2 className='text-2xl py-4'>Categories</h2>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <GalleryCategoryForm/>
                <GalleryCategoryTable data={category}/>
    
            </div>
            <div>
                <h2 className='text-2xl py-4'>Images</h2>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <GalleryImageForm category={category}/>
                <GalleryImageTable data={category}/>
    
            </div>

      
    </div>
  )
}

export default GalleryPage

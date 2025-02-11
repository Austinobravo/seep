import React from 'react'
import GalleryHero from './_components/GalleryHero'
import Gallery from './_components/Gallery'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

const page = async () => {
  let galleryCategory:GalleryCategoryType[] = []

  try{
    const response = await axios.get(`${BASE_URL}/api/galleryCategory`)
    galleryCategory = response.data

  }catch(error){
    console.error("Error fetching relatedNews", error)
  }
  
  return (
    <div>
        <GalleryHero/>
        <Gallery data={galleryCategory}/>
      
    </div>
  )
}

export default page

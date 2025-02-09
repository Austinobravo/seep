import React from 'react'
import GalleryHero from './_components/GalleryHero'
import Gallery from './_components/Gallery'
import axios from 'axios'

const page = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/galleryCategory`)
  const galleryCategory:GalleryCategoryType[] = response.data
  
  return (
    <div>
        <GalleryHero/>
        <Gallery/>
      
    </div>
  )
}

export default page

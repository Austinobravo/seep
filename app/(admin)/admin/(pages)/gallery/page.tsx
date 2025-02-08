import React from 'react'
import AdminNav from '../_components/AdminNav'
import GalleryCategoryForm from './_components/GalleryCategoryForm'
import GalleryCategoryTable from './_components/GalleryCategoryTable'
import axios from 'axios'
import GalleryImageForm from './_components/GalleryImageForm'
import GalleryImageTable from './_components/GalleryImageTable'

const GalleryPage = async () => {
  const categoryResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/galleryCategory`)
  const category:GalleryCategoryType[] = categoryResponse.data
  console.log("imafe", category)
  // const galleryResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gallery`)
  // const gallery:GalleryImageType[] = galleryResponse.data
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

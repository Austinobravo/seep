import Image from 'next/image'
import React from 'react'

const GalleryImage = ({data}: {data: GalleryCategoryType[] }) => {
    
  return (
    <>
    {/* {data?.galleryImage.map((item, index) => (
        <Image key={`${item.image}-${index}`} src={`${encodeURI(item.image)}`} width={500} height={200} alt={item.description} className="size-20"/>
    ))} */}
    </>
  )
}

export default GalleryImage

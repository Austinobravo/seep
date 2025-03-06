'use client'
import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import FadeInSection from '@/hooks/fadeIn';
import handleIdScroll from '@/hooks/handleIdScroll';

const Gallery = ({data}: {data:GalleryCategoryType[]}) => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false)
        const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = React.useState<number>(0)
        const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0)
        const imagesPerPage = 8
        const [currentImageEndIndex, setCurrentImageEndIndex] = React.useState<number>(imagesPerPage)
        const [imagePagination, setImagePagination] = React.useState<Record<number, { start: number; end: number }>>(
            {}
        );
        // const imagesPerPage = 8;
        
        const IncrementImages = (dataIndex: number, galleryLength: number) => {
            setImagePagination((prev) => {
                const currentStart = prev[dataIndex]?.start || 0;
                const currentEnd = prev[dataIndex]?.end || imagesPerPage;
        
                if (currentEnd >= galleryLength) return prev;
        
                const newEnd = Math.min(currentEnd + imagesPerPage, galleryLength);
                return { ...prev, [dataIndex]: { start: currentEnd, end: newEnd } };
            });
        };
        
        const DecrementImages = (dataIndex: number) => {
            setImagePagination((prev) => {
                const currentStart = prev[dataIndex]?.start || 0;
        
                if (currentStart === 0) return prev;
        
                const newStart = Math.max(currentStart - imagesPerPage, 0);
                const newEnd = newStart + imagesPerPage;
        
                return { ...prev, [dataIndex]: { start: newStart, end: newEnd } };
            });
        };
        
        // const IncrementImages = (item: any) => {
            
        //     if(currentImageEndIndex < item.length){
        //         setCurrentImageIndex(currentImageEndIndex)
        //         setCurrentImageEndIndex((prev) => (item.length) - prev < imagesPerPage ? prev + (item.length) - prev : prev + imagesPerPage )
        //     }else{
        //         return
        //     }
        // }
        // const DecrementImages = () => {
           
        //     if(currentImageIndex === 0){
        //         return
        //     }else{
        //         setCurrentImageIndex((prev) => prev - imagesPerPage)
        //         setCurrentImageEndIndex(currentImageIndex)
        //     }
        // }
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [currentImage, setCurrentImage] = React.useState<string>('')

    
    
  return (
    <section className='md:px-20 px-10 space-y-7'>
        {data.length >= 1 ?
        data.map((item, dataIndex) => (
        <section key={item.title} id='gallery' className='py-10'>
        <FadeInSection direction={`up`}>
        <div className='text-seep-color text-center space-y-2 py-8' id={item.title}>
                <blockquote className='opacity-90 md:text-3xl text-2xl font-bold capitalize'>{item.title}</blockquote>
                <div className='flex justify-center items-center text-lg capitalize'>
                    <Dot/>
                    <p id={item.subtitle}>{item.subtitle}</p>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection direction={`up`}>
            {item.galleryImage.length >= 1 ?
            <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                {item.galleryImage.slice(imagePagination[dataIndex]?.start, imagePagination[dataIndex]?.end || imagesPerPage).map((member, index) => (
                    <div key={index} className='text-seep-color w-fit mx-auto'>
                        <Dialog>
                            <DialogTrigger asChild>
                                    <div className='w-full relative' onMouseEnter={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onMouseLeave={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onClick={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}}>
                                         <Image src={member.image ? encodeURI(member.image) : '/images/avatar.webp'} width={500} height={100} loading='lazy' alt={member.description} className='hover:cursor-zoom-in object-cover mx-auto rounded-md h-72 shadow-md object-top ' onClick={()=> { setCurrentImage(member.image)}} unoptimized/>
                                        {isHovered && index === currentTeamMemberIndex && <span className='absolute text-center animate-in slide-in-from-bottom duration-500 bg-white p-2 text-amber-400 text-xs bottom-0 w-full h-20 overflow-auto no-scrollbar'>{member.description}</span>}
                                    </div> 
                               
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl border-none bg-inherit !px-0 max-h-[550px] overflow-y-auto">
                                <DialogHeader>
                                <DialogTitle></DialogTitle>
                                <DialogDescription></DialogDescription>
                                </DialogHeader>
                                <div className='flex justify-center items-center w-full'>
                                     <Image src={currentImage} width={500} height={100} loading='lazy' alt='image' className='w-fit rounded-lg flex items-center justify-center md:h-[28rem] h-full' unoptimized/>
                                </div>
                            </DialogContent>
                            </Dialog>

                    </div>
                ))}
            </div> 
            {/* Pagination and Navigation */}
            <div className="flex justify-between items-center py-5">
                                    {/* Previous Button */}
                                    <button
                                        className={`rounded-full  bg-amber-500 p-2 text-white ${
                                            (imagePagination[dataIndex]?.start || 0) === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                        }`}
                                        onClick={() => { DecrementImages(dataIndex), handleIdScroll(item.subtitle); }}
                                        disabled={(imagePagination[dataIndex]?.start || 0) === 0}
                                    >
                                        <ArrowLeft />
                                    </button>

                                    {/* Pagination Dots */}
                                    <div className="flex space-x-2">
                                            {Array.from(
                                                { length: Math.ceil(item.galleryImage.length / imagesPerPage) },
                                                (_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setImagePagination((prev) => ({
                                                            ...prev,
                                                            [dataIndex]: { start: i * imagesPerPage, end: Math.min((i + 1) * imagesPerPage, item.galleryImage.length) }
                                                        }))}
                                                        className={`size-3 rounded-full ${
                                                            (imagePagination[dataIndex]?.start || 0) === i * imagesPerPage
                                                                ? 'bg-amber-500'
                                                                : 'bg-gray-300'
                                                        }`}
                                                    ></button>
                                                )
                                            )}
                                        </div>


                                    {/* Next Button */}
                                    <button
                                        className={`rounded-full  bg-amber-500 p-2 text-white ${
                                            (imagePagination[dataIndex]?.end || imagesPerPage) >= item.galleryImage.length
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'cursor-pointer'
                                        }`}
                                        onClick={() => { IncrementImages(dataIndex, item.galleryImage.length), handleIdScroll(item.subtitle); }}
                                        disabled={(imagePagination[dataIndex]?.end || imagesPerPage) >= item.galleryImage.length}
                                    >
                                        <ArrowRight />
                                    </button>
                                </div>
            {/* <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndex > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImages(dataIndex), handleIdScroll(item.title)}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndex < item.galleryImage.length  && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImages(dataIndex, item.galleryImage.length), handleIdScroll(item.title)}}>
                        <ArrowRight/>
                    </div>
                }

                index {dataIndex}

            </div> */}
            </>
            :
            <figure className='mx-auto w-fit text-center'>
                <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No Testimonial Image" className='aspect-ratio'/>
                <figcaption>No Images for this category yet.</figcaption>
            </figure>
            }
        </FadeInSection>
      
        </section>

        ))
        :
        <figure className='mx-auto w-fit text-center'>
            <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No Testimonial Image" className='aspect-ratio'/>
            <figcaption>No Gallery Images yet.</figcaption>
        </figure>
        }
    </section>
  )
}

export default Gallery
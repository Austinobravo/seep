'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import handleIdScroll from '@/hooks/handleIdScroll'
import { ArrowLeft, ArrowRight, Dot, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';

const ImagesOf2019 = [
    {
        first: '',
        second: '/images/Frame 46.png',
        third: '/images/Frame 47.png'
    },
    {
        first: '/images/Frame 48.png',
        second: '/images/Frame 49.png',
        third: '/images/below_mission_2.png'
    },
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
    {
        first: '',
        second: '/images/Frame 46.png',
        third: '/images/Frame 47.png'
    },
    {
        first: '/images/Frame 48.png',
        second: '/images/Frame 49.png',
        third: '/images/below_mission_2.png'
    },
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
    {
        first: '',
        second: '/images/Frame 52.png',
        third: '/images/SEEP_231.png'
    },
    


]
const ImagesOf2022 = [

    {
        first: '/images/Frame 16.png',
        second: '/images/SEEP PIX 11 1.png',
        third: '/images/Tech2schools-43.png'
    },
    {
        first: '',
        second: '/images/tech3.png',
        third: '/images/tech2.png'
    },
    {
        first: '/images/Tech2schools-65.png',
        second: '',
        third: ''
    },
    {
        first: '/images/Tech2schools-65.png',
        second: '',
        third: ''
    },
]
const Gallery = ({data}: {data:GalleryCategoryType[]}) => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false)
        const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = React.useState<number>(0)
        const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0)
        const [currentImageEndIndex, setCurrentImageEndIndex] = React.useState<number>(8)
    
        const IncrementImages = (item: any) => {
            if(currentImageEndIndex < item.length){
                setCurrentImageIndex(currentImageEndIndex)
                setCurrentImageEndIndex((prev) => (item.length) - prev < 8 ? prev + (item.length) - prev : prev + 8 )
            }else{
                return
            }
        }
        const DecrementImages = () => {
            if(currentImageIndex === 0){
                return
            }else{
                setCurrentImageIndex((prev) => prev - 8)
                setCurrentImageEndIndex(currentImageIndex)
            }
        }
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [currentImage, setCurrentImage] = React.useState<string>('')

    
    
  return (
    <section className='md:px-20 px-10 space-y-7'>
        {data.length >= 1 ?
        data.map((item) => (
        <section key={item.title} id='gallery' className='md:px-20 px-10 py-10'>
        <FadeInSection direction={`up`}>
        <div className='text-seep-color text-center space-y-2 py-8'>
                <blockquote className='opacity-90 md:text-3xl text-2xl font-bold capitalize'>{item.title}</blockquote>
                <div className='flex justify-center items-center text-lg capitalize'>
                    <Dot/>
                    <p>{item.subtitle}</p>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection direction={`up`}>
            {item.galleryImage.length >= 1 ?
            <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                {item.galleryImage.slice(currentImageIndex, currentImageEndIndex).map((member, index) => (
                    <div key={index} className='text-seep-color w-fit mx-auto'>
                        <Dialog>
                            <DialogTrigger asChild>
                                    <div className='w-full relative' onMouseEnter={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onMouseLeave={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onClick={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}}>
                                        <img src={member.image ? encodeURI(member.image) : '/images/avatar.webp'} width={500} height={100} loading='lazy' alt={member.description} className='hover:cursor-zoom-in object-cover mx-auto rounded-md h-72 shadow-md object-top ' onClick={()=> { setCurrentImage(member.image)}}/>
                                        {isHovered && index === currentTeamMemberIndex && <span className='absolute text-center animate-in slide-in-from-bottom duration-500 bg-white p-2 text-amber-400 text-xs bottom-0 w-full h-20 overflow-auto no-scrollbar'>{member.description}</span>}
                                    </div> 
                               
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl border-none bg-inherit !px-0 max-h-[550px] overflow-y-auto">
                                <DialogHeader>
                                <DialogTitle></DialogTitle>
                                <DialogDescription></DialogDescription>
                                </DialogHeader>
                                <div className='flex justify-center items-center w-full'>
                                    <img src={currentImage} width={500} height={100} loading='lazy' alt='image' className='w-fit rounded-lg flex items-center justify-center md:h-[28rem] h-full'/>
                                </div>
                            </DialogContent>
                            </Dialog>

                    </div>
                ))}
            </div> 
            <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndex > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImages(), handleIdScroll("gallery")}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndex < item.galleryImage.length  && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImages(item.galleryImage), handleIdScroll("gallery")}}>
                        <ArrowRight/>
                    </div>
                }

            </div>
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

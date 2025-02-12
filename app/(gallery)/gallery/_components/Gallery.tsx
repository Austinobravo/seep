'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import handleIdScroll from '@/hooks/handleIdScroll'
import { ArrowLeft, ArrowRight, Dot, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
    
        const IncrementImages = () => {
            if(currentImageEndIndex < ImagesOf2019.length){
                setCurrentImageIndex(currentImageEndIndex)
                setCurrentImageEndIndex((prev) => (ImagesOf2019.length) - prev < 8 ? prev + (ImagesOf2019.length) - prev : prev + 8 )
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

    
    const [currentImageIndexof2019, setCurrentImageIndexof2019] = React.useState<number>(0)
    const [currentImageEndIndexof2019, setCurrentImageEndIndexof2019] = React.useState<number>(3)

    const IncrementImagesOf2019 = () => {
        if(currentImageEndIndexof2019 < ImagesOf2019.length){
            setCurrentImageIndexof2019(currentImageEndIndexof2019)
            setCurrentImageEndIndexof2019((prev) => (ImagesOf2019.length) - prev < 3 ? prev + (ImagesOf2019.length ) - prev : prev + 3 )
        }else{
            return
        }
    }
    const DecrementImagesOf2019 = () => {
        if(currentImageIndexof2019 === 0){
            return
        }else{
            setCurrentImageIndexof2019((prev) => prev - 3)
            setCurrentImageEndIndexof2019(currentImageIndexof2019)
        }
    }

    const [currentImageIndexof2022, setCurrentImageIndexof2022] = React.useState<number>(0)
    const [currentImageEndIndexof2022, setCurrentImageEndIndexof2022] = React.useState<number>(3)

    const IncrementImagesOf2022 = () => {
        if(currentImageEndIndexof2022 < ImagesOf2022.length){
            setCurrentImageIndexof2022(currentImageEndIndexof2022)
            setCurrentImageEndIndexof2022((prev) => (ImagesOf2022.length) - prev < 3 ? prev + (ImagesOf2022.length ) - prev : prev + 3 )
        }else{
            return
        }
    }
    const DecrementImagesOf2022 = () => {
        if(currentImageIndexof2022 === 0){
            return
        }else{
            setCurrentImageIndexof2022((prev) => prev - 3)
            setCurrentImageEndIndexof2022(currentImageIndexof2022)
        }
    }
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
                        <div className='w-full relative' onMouseEnter={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onMouseLeave={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}} onClick={()=>{setIsHovered(!isHovered), setCurrentTeamMemberIndex(index)}}>
                            <Image src={member.image ? encodeURI(member.image) : '/images/avatar.webp'} width={500} height={100} alt={member.description} className='hover:cursor-zoom-in object-cover mx-auto rounded-md h-72 shadow-md object-top ' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(member.image)}}/>
                            {isHovered && index === currentTeamMemberIndex && <span className='absolute text-center animate-in slide-in-from-bottom duration-500 bg-white p-2 text-amber-400 text-xs bottom-0 w-full h-20 overflow-auto no-scrollbar'>{member.description}</span>}
                        </div> 

                    </div>
                ))}
            </div> 
            <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndex > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImages(), handleIdScroll("gallery")}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndex < ImagesOf2019.length  && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImages(), handleIdScroll("gallery")}}>
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
        {/* <div id="seep_2019">
            <div className='text-seep-color text-center space-y-2 py-8'>
                <blockquote className='opacity-90 md:text-3xl text-2xl font-bold'>“A flow of student entrepreneurs into the Nigeria economy”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-innov8ion 2019</p>
                </div>
            </div>
            {ImagesOf2019.slice(currentImageIndexof2019, currentImageEndIndexof2019).map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                    <FadeInSection direction={`up`}>
                        {image.first && 
                            <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                        }
                    </FadeInSection>
                    <div className='flex md:flex-nowrap flex-wrap gap-5'>
                        <FadeInSection direction={`left`}>
                        {image.second && 
                            <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover ' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                            }
                        </FadeInSection>
                        <FadeInSection direction={`right`}>
                            {image.third && 
                            <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                            }
                        </FadeInSection>
                    </div>

                </div>
            ))}
            <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndexof2019 > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImagesOf2019(), handleIdScroll("seep_2019")}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndexof2019 < ImagesOf2019.length && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImagesOf2019(), handleIdScroll("seep_2019")}}>
                        <ArrowRight/>
                    </div>
                }

            </div>
        </div>
        <div id='seep_2022'>
            <div className='text-seep-color text-center space-y-2 py-8'>
                <blockquote className='opacity-90 text-3xl font-bold'>“Taking Tech to School”</blockquote>
                <div className='flex justify-center items-center text-lg'>
                    <Dot/>
                    <p>SEEP-Tech2School 2022</p>
                </div>
            </div>  
            {ImagesOf2022.slice(currentImageIndexof2022, currentImageEndIndexof2022).map((image, index)=> (
                <div key={index} className='space-y-5 py-5'>
                <FadeInSection direction={`up`}>
                    {image.first && 
                        <Image src={image.first} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.first)}}/>
                    }
                </FadeInSection>
                <div className='flex md:flex-nowrap flex-wrap gap-5'>
                    <FadeInSection direction={`left`}>
                    {image.second && 
                        <Image src={image.second} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.second)}}/>
                        }
                    </FadeInSection>
                    <FadeInSection direction={`right`}>
                        {image.third && 
                        <Image src={image.third} width={500} height={100} alt='image' className='w-full hover:cursor-zoom-in rounded-lg cursor-pointer md:h-[28rem] h-48 object-cover' onClick={()=> {setIsModalOpen(!isModalOpen), setCurrentImage(image.third)}}/>
                        }
                    </FadeInSection>
                </div>

            </div>
            ))}
        </div>
        <div className='flex ml-auto items-center w-fit py-10 space-x-3 '>
                {currentImageIndexof2022 > 0 && 
                    <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white' onClick={()=> {DecrementImagesOf2022(), handleIdScroll("seep_2022")}}>
                        <ArrowLeft/>
                    </div>
                }
                {currentImageEndIndexof2022 < ImagesOf2022.length && 
                    <div className='ml-auto w-fit cursor-pointer rounded-full bg-amber-500 p-1  text-white' onClick={()=> {IncrementImagesOf2022(), handleIdScroll("seep_2022")}}>
                        <ArrowRight/>
                    </div>
                }

            </div>
        <div>
            {isModalOpen && 
                <div className='bg-black/50 fixed left-0 top-0 w-full h-full z-50'>
                    <div className='ml-auto w-fit p-4 cursor-pointer' onClick={()=> setIsModalOpen(!isModalOpen)}>
                        <X className='text-white' size={40}/>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <Image src={currentImage} width={500} height={100} alt='image' className='w-fit rounded-lg flex items-center justify-center md:h-[28rem] h-full'/>
                    </div>
                </div>
            }
        </div> */}
      
    </section>
  )
}

export default Gallery

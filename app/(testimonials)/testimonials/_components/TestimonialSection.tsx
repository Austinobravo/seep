import FadeInSection from '@/hooks/fadeIn'

import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Link from 'next/link';
import { Building, Handshake, Heart } from 'lucide-react';

const Testimonials = [
    {
        image: '',
        name: 'Olivia Thomas',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
    {
        image: '',
        name: 'John Bassey',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
    {
        image: '',
        name: 'Onome Francis',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
]
const TestimonialSection = ({testimonials}: {testimonials: TestimonialType[]}) => {
  return (
    <section className='md:px-20 px-10 py-20'>
        <FadeInSection direction={`down`}>
            {/* <div className='w-[90%] rounded-md mx-auto h-96 mb-7 bg-cover cursor-pointer bg-center flex justify-center items-center' style={{backgroundImage: `url(/images/SEEP_231.png)`}}>
                <Image src={`/images/VideoIcon.png`} width={100} height={100} alt='Icon'/>
            </div> */}
            <div className='w-[90%] rounded-md mx-auto h-96 mb-7 bg-cover cursor-pointer bg-center flex justify-center items-center'>
                <iframe className='w-full h-full'  src='https://www.youtube.com/embed/OSBuf4r512Q'></iframe>
            </div>



        </FadeInSection>
        <FadeInSection direction={`up`}>
           {testimonials.length >= 1 ?
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {testimonials.map((testimonial, index) => (
                <Card key={`${index}-testimonial`} className="relative pt-10 pb-5  bg-gray-100 hover:scale-105 overflow-y-visible transition-all duration-700" >
                            <CardHeader className='p-1'>
                            <CardTitle className="">
                            <div className='bg-amber-500 absolute -top-2 left-6 text-6xl text-white size-10 pt-10 flex justify-center items-center '>
                                    “
                            </div>
                            </CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-1 justify-between items-center flex-col p-1 space-y-7">
                            <div className='bg-[#B4E0FF] rounded-full p-3 w-fit h-fit'>
                                <Image
                                        src={`/images/avatar.webp`}
                                        width={200}
                                        height={200}
                                        alt={testimonial.individual_name}
                                        className="size-10 rounded-full object-cover"
                                        unoptimized
                                    />
                                    
                            </div>

                                <div className=''>
                                    <p className=''><em>" {testimonial.content} "</em></p>
                                </div>
                                <div className='space-y-2 '>
                                    <h4 className='font-semibold text-center'>{testimonial.individual_name}</h4>
                                    <div className='flex items-center gap-4'>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger>
                                            <div className='flex items-start text-xs gap-1'>
                                            <Building size={20} className='text-seep-color'/>
                                            <span>{testimonial.school}</span>
                                        </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                School
                                            </TooltipContent>
                                            </Tooltip>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger>
                                            <div className='flex items-center text-xs gap-1'>
                                            <Handshake size={20} className='text-seep-color'/>
                                            <span>{testimonial.program}</span>
                                        </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Program
                                            </TooltipContent>
                                            </Tooltip>
                                    
                                        

                                    </div>
                                </div>
                        
                        </CardContent>
                        </Card>

                ))}
                    
                </div> 
                    :
                    <figure className='mx-auto w-fit text-center'>
                        <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No Testimonial Image" className='aspect-ratio'/>
                        <figcaption>No Testimonials yet.</figcaption>
                    </figure>
                    } 
        </FadeInSection>
       

      
    </section>
  )
}

export default TestimonialSection

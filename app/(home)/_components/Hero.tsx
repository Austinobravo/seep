"use client"
import LinkButton from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from 'swiper/modules';

const slides = [
  {
    title: 'Social Entrepreneurial Enhancement Support Center (SEE - Support Center)',
    description:
      'Creating a network of business opportunities and ideas, for a sustainable global economy.',
    image: '/images/hero.png',
  },
  {
    title: 'Empowering Entrepreneurs Worldwide',
    description:
      'Providing the tools, resources, and support needed to drive innovation and success.',
    image: '/images/Tech2schools-65.png',
  },
  {
    title: 'Building a Sustainable Future',
    description:
      'Fostering global economic growth through collaboration and creativity.',
    image: '/images/tech3.png',
  },
];
const Hero = () => {
  return (
    <section className={`md:px-20 px-10`} id='hero'>
      <FadeInSection direction={`up`}>
      <Swiper modules={[EffectFade, Autoplay]} effect='' autoplay={{delay: 5000, disableOnInteraction: false}} loop={true} className="w-full md:h-[500px] h-[600px] rounded-2xl">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
              <div className='w-full bg-cover bg-no-repeat md:bg-top bg-center  rounded-2xl text-white ' style={{"backgroundImage": `url(${slide.image})`}}>
                  <div className='md:bg-gradient-to-r from-[#0097FF] via-transparent to-transparent md:h-[500px] h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 justify-center space-y-5'>
                      <h1 className='md:text-4xl text-2xl  leading-relaxed md:w-[600px]'>{slide.title}</h1>
                      <p className='leading-relaxed md:w-[600px]'>{slide.description}</p>
                      <LinkButton title="Learn More" icon={MoveRight} path='/about'/>
                  </div>
              </div>

          </SwiperSlide>
        ))}
      </Swiper>
      </FadeInSection>
    </section>
  )
}

export default Hero
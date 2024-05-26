import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import path from 'path'
import React from 'react'
const items = [
    {
        heading: 'Who we are',
        paragraph: 'SEEP is a program of SEE-Support Center crafted specially for the academic environment to thread academics and entrepreneurship for a developed and sustainable Nigeria and Global economy.',
        path: '/about',
        buttonText: 'Learn More',
        image: '/images/Frame 13.png'
    },
    {
        heading: 'What we do',
        paragraph: 'We thread academics and entrepreneurship for a developed and sustainable Nigerian and Global economy. We are committed to Screening, Recruiting, Training, Mentoring, Networking, Empowering and Supervising Students and young entrepreneurs in Nigeria.',
        path: '/about',
        buttonText: 'Learn More',
        image: '/images/Frame 14.png'
    },
    {
        heading: 'Get Involved',
        paragraph: 'Volunteering connects you to your community and the world, expands your network, boosts your social skills, and advances your career.',
        path: '/join',
        buttonText: 'Volunteer Now',
        image: '/images/Frame 15.png',
    },
]
const WhoWeAre = () => {
  return (
    <section className='md:px-28 px-10'>
        <div>
            {items.map((item, index) => (
                <div key={index} className='flex flex-wrap md:flex-nowrap gap-5 pb-5 seep-text-color'>
                    <FadeInSection direction={`left`}>
                        <div className='md:basis-1/2 space-y-5'>
                            <h2 className='md:text-5xl text-4xl'>{item.heading}</h2>
                            <p>{item.paragraph}</p>
                            <Button title={item.buttonText} icon={MoveRight} path={item.path}/>
                        </div>
                    </FadeInSection>
                    <FadeInSection direction={`right`}>
                        <div className='md:basis-1/2 w-full'>
                            <Image src={item.image} width={200} height={100} alt={item.heading} className='rounded-lg w-full'/>
                        </div>
                    </FadeInSection>

                </div>
            ))}

        </div>

      
    </section>
  )
}

export default WhoWeAre

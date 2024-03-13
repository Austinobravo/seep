import Button from '@/components/Button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import path from 'path'
import React from 'react'
const items = [
    {
        heading: 'Who we are',
        paragraph: 'SEE-Support Center is a social enterprise that complements the government’s efforts to create employment opportunities for Nigerians.',
        path: '',
        buttonText: 'Learn More',
        image: '/images/Frame 13.png'
    },
    {
        heading: 'What we do',
        paragraph: 'We aim at developing tech skills in young people in order to enable them posses enterpreneurial power and empower for the global economy.',
        path: '',
        buttonText: 'Learn More',
        image: '/images/Frame 14.png'
    },
    {
        heading: 'Get Involved',
        paragraph: 'Volunteering connects you to your community and the world, expands your network, boosts your social skills, and advances your career.',
        path: '',
        buttonText: 'Volunteer Now',
        image: '/images/Frame 15.png'
    },
]
const WhoWeAre = () => {
  return (
    <section className='md:px-28 px-10'>
        <div>
            {items.map((item, index) => (
                <div key={index} className='flex flex-wrap md:flex-nowrap gap-5 pb-5  seep-text-color'>
                    <div className='md:basis-1/2 space-y-5'>
                        <h2 className='md:text-5xl text-4xl'>{item.heading}</h2>
                        <p>{item.paragraph}</p>
                        <Button title={item.buttonText} icon={MoveRight} path={item.path}/>
                    </div>
                    <div className='md:basis-1/2 w-full'>
                        <Image src={item.image} width={200} height={100} alt={item.heading} className='rounded-lg w-full'/>
                    </div>

                </div>
            ))}

        </div>

      
    </section>
  )
}

export default WhoWeAre

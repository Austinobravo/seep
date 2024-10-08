import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const items = [
    {
        image: '/images/Frame 16.png',
        heading: 'SEEP ( Student Enterpreneurial Empowerment Program)',
        paragraph: 'We aim at developing tech skills in young people in order to enable them posses enterpreneurial power and empower for the global economy.'
    },
    {
        image: '/images/Frame 17.png',
        heading: 'Tech 2 School',
        paragraph: 'We reach out to different schools and partner with the schools to educate their students about the tech industry, the future industry, and different means which they could earn money for themselves.'
    },
]
const ProgramsAndBeneficiary = () => {
  return (
    <section className='md:px-20 px-10 py-10'>
      <FadeInSection direction={`up`}>
        <h2 className='seep-text-color text-center md:text-4xl text-2xl md:py-10 py-5 font-bold'>Our Programmes / Beneficiaries</h2>    
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div>
          {items.map((item, index) => (
            <div key={index} className='seep-text-color space-y-2 pb-3'>
              <Image src={item.image} width={500} height={100} alt={item.heading} className='w-full rounded-lg md:h-[28rem] h-48 object-cover'/>
              <div className='py-5 space-y-2'>
                <h3 className='font-bold md:text-3xl text-xl tracking-wider'>{item.heading}</h3>
                <p className='md:text-lg font-thin md:w-[900px] w-full'>{item.paragraph}</p>
                <Button title="Learn More" icon={MoveRight} path='/seep'/>
              </div>
            </div>
          ))}
        </div>        
      </FadeInSection>
      
    </section>
  )
}

export default ProgramsAndBeneficiary

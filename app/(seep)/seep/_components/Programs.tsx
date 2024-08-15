import FadeInSection from '@/hooks/fadeIn'
import Image from 'next/image'
import React from 'react'
const items = [
    {
        image: '/images/Frame 16.png',
        heading: 'SEEP ( Student Enterpreneurial Empowerment Program)',
        paragraph: 'The SEEP Project is a program of SEE-Support Center specially crafted for the academic environment to thread academics and entrepreneurship for a developed and sustainable Nigerian and Global economy. We are committed to Screening, Recruiting, Training, Mentoring, Networking, Empowering and Supervising Students and young entrepreneurs in Nigeria.'
    },
    {
        image: '/images/Frame 17.png',
        heading: 'Tech 2 School',
        paragraph: 'We reach out to different schools and partner with them to educate their students about the Tech, the Future industry, while providing them with mentorships, a community of like-minds and relevant resources to become self sufficient and relevant in the industry. We aim at developing tech skills in young people in order to enable them posses entrepreneurial power and empowerment for the Nigerian and global economy.'
    },
]
const Programs = () => {
  return (
    <section className='md:px-20 px-10 py-10'>
      <FadeInSection direction={`up`}>
        <h2 className='seep-text-color text-center md:text-4xl text-2xl py-5 font-bold'>Our Programmes / Beneficiaries</h2>    
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div>
          {items.map((item, index) => (
            <div key={index} className='seep-text-color space-y-2 pb-3'>
              <Image src={item.image} width={500} height={100} alt={item.heading} className='w-full rounded-lg md:h-[28rem] h-48 object-cover'/>
              <div className='py-5 space-y-2'> 
                <h3 className='font-bold md:text-3xl text-xl tracking-wider'>{item.heading}</h3>
                <p className='md:text-lg font-thin w-full'>{item.paragraph}</p>

              </div>
            </div>
          ))}
        </div>        
      </FadeInSection>
      
    </section>
  )
}

export default Programs

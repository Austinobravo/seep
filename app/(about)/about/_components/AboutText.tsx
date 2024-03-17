import FadeInSection from '@/hooks/fadeIn'
import React from 'react'

const Text = [
    {
        name: 'About',
        paragraph: 'SEE- Support Center as a non-state actor is a social enterprise that tends to compliment the activities of the government to research on, develop ideas and create a business network of enterpreneurs who will futher create employment opportunities for Nigerians and other African countries in order to reduce unemployment rate ofa greater percetage by 2023 while leveraging and investing on Human Capacity Development, Research, Innovations, Science and Technology for a progressive and susutainable economy.'
    },
    {
        name: 'Our Vision',
        paragraph: 'Our mission is to provide a supporting platform to discover, nurture, and harness young potentials while leveraging Research, Innovation, Empowerment, Science and Technology for a productive, developed and sustainable Nigerian and Global Economy.'
    },
    {
        name: 'Our Mission',
        paragraph: 'We thread academics and enterpreneurship for a developed and sustainable Nigeria and Africa economy at large. We are committed to Screening, Recruiting, Training, Mentoring, Networking, Empowering and Supervising Students and young enterpreneurs in Nigeria.'
    },
    
]

const Benefits =[
    'A paradigm shift on the economy through leveraging business Networking, Research, Innovation, Empowerment, Science and Technology.  ',
    'High digital literacy for students and young graduates.',
    'Economic sustenance, Revenue generation, Market Nigeria, Africa and the Global environment.',
    'Emergence of Start-up.',
    'Cooperate economic development ideology.',
    'Revenue generation through venture capitalism and royalties',
    'Opportunity to earn while learning in the industry',
    'Reduction in cyber crimes and social vices.'
]

const AboutText = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div>
                {Text.map((item, index) => (
                    <div key={index} className='seep-text-color space-y-4'>
                        <h3 className='hover:underline text-3xl'>{item.name}</h3>
                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>
                    </div>
                ))}
            </div>   
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color space-y-4'>
                <h3 className='hover:underline text-3xl'>Our Projected Benefits and Impact</h3>
                <ol type='1'>
                    {Benefits.map((benefit, index) => (
                        <li key={index} className='pb-5 text-base'>
                            {index +1}. {benefit}
                        </li>
                    ))}
                </ol>
            </div>   
        </FadeInSection>

    </section>
  )
}

export default AboutText

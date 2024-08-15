import FadeInSection from '@/hooks/fadeIn'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Text = [

    {
        name: 'Our Vision',
        paragraph: 'Our Vision is to be a leading social enterprise that spearheads the producing and nurturing of Young-Business leaders who will emerge as outstanding Entrepreneurs in making significant global impact by creating a paradigm shift for a sustainable Socio-economic development in Nigeria and Africa at large while following the trends and future destination of the global economy.',
        image: '/images/about_vision.png',
        swap: true
    },
    {
        name: 'Our Mission',
        paragraph: 'Our mission is to provide a supporting platform to discover, nurture, and harness young potentials while leveraging Research, Innovation, Empowerment, Science and Technology for a productive, developed and sustainable Nigerian and Global Economy.',
        image: '/images/about_mission.png',
        swap: false,
    },
    
]

const Benefits =[
    {
        name: 'A paradigm shift on the economy through leveraging business Networking, Research, Innovation, Empowerment, Science and Technology.  ',
        image: '/images/project1.png',
        swap: false
    },
    {
        name: 'High digital literacy for students and young graduates.',
        image: '/images/project2.png',
        swap: true
    },
    {
        name: 'Economic sustenance, Revenue generation, Market Nigeria, Africa and the Global environment.',
        image: '/images/project3.png',
        swap: false
    },
    {
        name: 'Emergence of Start-up.',
        image: '/images/project4.png',
        swap: true
    },
    {
        name: 'Cooperate economic development ideology.',
        image: '/images/project5.png',
        swap: false
    },
    {
        name: 'Revenue generation through venture capitalism and royalties',
        image: '/images/project6.png',
        swap: true
    },
    {
        name: 'Opportunity to earn while learning in the industry',
        image: '/images/project7.png',
        swap: false
    },
    {
        name: 'Reduction in cyber crimes and social vices.',
        image: '/images/project8.png',
        swap: true
    },

]

const AboutText = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div>
                <div className='seep-text-color space-y-4'>
                    <h3 className='text-3xl'>About</h3>
                    <p className='leading-relaxed pb-5 text-lg'>SEE- Support Center as a non-state actor is a social enterprise registered with CAC as Enterprise and Innovation Initiative RC:7485124 that tends to compliment the activities of the government to; research on, develop ideas and create a business network of entrepreneurs who will further create employment opportunities for Nigerians and other Africans to significantly reduce unemployment rate by the year 2023. We are leveraging and investing on Human Capacity Development, Research, Innovations, Science and Technology for a progressive and sustainable economy.</p>
                </div>
            </div>   
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className=''>
                {Text.map((item, index) => (
                    <div key={index} className=''>
                        {item.swap ?
                        <>
                            <h3 className='hover:underline text-3xl py-12 seep-text-color w-fit mx-auto'>{item.name}</h3>
                            <div className='flex md:flex-nowrap flex-wrap flex-col-reverse md:flex-row gap-x-4 gap-y-2 text-center md:text-justify'>
                                <FadeInSection direction={`right`}>
                                    <div  className='seep-text-color space-y-4 md:basis-1/2'>
                                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>
                                    </div>
                                </FadeInSection>
                                <FadeInSection direction={`left`}>
                                    <div className='md:basis-1/2 mx-auto w-fit md:w-full'>
                                        <Image src={item.image} width={500} height={100} alt={item.name} className='ml-auto'/>
                                    </div>
                                </FadeInSection>

                            </div>
                        </>
                        :
                        <>
                            <h3 className=' text-3xl py-12 seep-text-color w-fit mx-auto '>{item.name}</h3>
                            <div className='flex md:flex-nowrap flex-wrap gap-x-4 gap-y-2'>
                                <FadeInSection direction={`right`}>
                                    <div  className='md:basis-1/2 mx-auto w-fit md:w-full'>
                                        <Image src={item.image} width={500} height={100} alt={item.name}/>
                                    </div>   
                                </FadeInSection>
                                <FadeInSection direction={`left`}>
                                    <div className='seep-text-color space-y-4 md:basis-1/2 text-center md:text-justify'>
                                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>
                                    </div> 
                                </FadeInSection>

                            </div>
                        </>
                        }
                        
                    </div>
                        
                ))}
            </div>   
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='seep-text-color space-y-4 '>
                <h3 className=' text-3xl text-center py-16'>Our Projected Benefits and Impact</h3>
                <ol className=' text-center'>
                    {Benefits.map((benefit, index) => (
                        <li key={index} className='pb-5 text-base flex '>
                            {!benefit.swap ?
                            <div className='flex md:flex-nowrap flex-wrap items-center w-full gap-4'>
                                <FadeInSection direction={`right`}>
                                    <div className='md:basis-1/2 mx-auto w-fit md:w-full'>
                                        <Image src={benefit.image} width={400} height={100} alt={benefit.name}/>
                                    </div>
                                </FadeInSection>
                                <FadeInSection direction={`left`}>
                                    <p className='md:basis-1/2 flex mx-auto w-fit md:w-full'>
                                        <span className='flex ml-auto'><Dot color='#0097FF' size={25}/> {benefit.name}</span>
                                    </p>     
                                </FadeInSection>
                            </div>
                            :
                            <div className='flex md:flex-nowrap flex-wrap items-center w-full flex-col-reverse md:flex-row gap-4'>
                                <FadeInSection direction={`right`}>
                                    <p className='md:basis-1/2 flex mx-auto w-fit md:w-full'>
                                        <Dot color='#0097FF' size={25}/> {benefit.name}
                                    </p>
                                </FadeInSection>
                                <FadeInSection direction={`left`}>
                                    <div className='md:basis-1/2 mx-auto w-fit md:w-full'>
                                        <Image src={benefit.image} width={400} height={100} alt={benefit.name} className='ml-auto'/>
                                    </div>   
                                </FadeInSection>
                            </div>
                            }
                        </li>
                    ))}
                </ol>
            </div>   
        </FadeInSection>

    </section>
  )
}

export default AboutText

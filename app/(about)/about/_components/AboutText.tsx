import FadeInSection from '@/hooks/fadeIn'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Text = [

    {
        name: 'Our Vision',
        paragraph: 'Our Vision is to be a leading social enterprise that spearheads the production and nurturing of young business leaders who will emerge as outstanding entrepreneurs in making significant global impacts by creating a paradigm shift towards sustainable socio-economic development in Africa and Nigeria while aligning with trends and future destinations of the global economy.',
        image: '/images/about_vision.png',
        swap: true
    },
    {
        name: 'Our Mission',
        paragraph: 'Our mission is to provide a supportive platform for discovering, nurturing, and harnessing young potential, leveraging research, innovation, empowerment, science, and technology to foster a productive, developed, and sustainable global and Nigerian economy.',
        image: '/images/about_mission.png',
        swap: false,
    },
    
]

const Benefits =[
    {
        name: 'A paradigm shift in the economy through leveraging business networking, research, innovation, empowerment, science and technology.',
        image: '/images/project1.png',
        swap: false
    },
    {
        name: 'High digital literacy for students and young graduates.',
        image: '/images/project2.png',
        swap: true
    },
    {
        name: 'Economic sustenance, revenue generation, market for Nigeria, Africa and the Global environment.',
        image: '/images/project3.png',
        swap: false
    },
    {
        name: 'Emergence of Start-ups.',
        image: '/images/project4.png',
        swap: true
    },
    {
        name: 'Cooperate economic development ideology.',
        image: '/images/project5.png',
        swap: false
    },
    {
        name: 'Revenue generation through venture capitalism and royalties.',
        image: '/images/project6.png',
        swap: true
    },
    {
        name: 'Opportunity to earn while learning in the industry.',
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
                    <p className='leading-relaxed pb-5 text-lg'>SEE- Support Center, as a non-state actor and a social enterprise is an arm of the Enterprise and Innovation Initiative (RC:7485124) that compliments the activities of the government to research, develop ideas and create a business network of entrepreneurs who will further create employment opportunities for Nigerians and other Africans to reduce unemployment rate by the year 2030 significantly. We leverage and invest in human capacity development, research, innovations, science and technology for a progressive and sustainable global and Nigerian economy.</p>
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

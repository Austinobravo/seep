import LinkButton from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const missionAndVision = [
    {
        title: 'Our Mission',
        paragraph: 'Our mission is to provide a supportive platform for discovering, nurturing, and harnessing young potential, leveraging research, innovation, empowerment, science, and technology to foster a productive, developed, and sustainable global and Nigeria economy.'
    },
    {
        title: 'Our Vision',
        paragraph: 'Our Vision is to be a leading social enterprise that spearheads the production and nurturing of young business leaders who will emerge as outstanding Entrepreneurs in making significant global impacts by creating a paradigm shift towards sustainable socio-economic development in Africa and Nigeria while aligning with trends and future destinations of the global economy.'
    },
    {
        title: 'Our Mission',
        paragraph: 'Our mission is to thread academics and entrepreneurship for a developed and sustainable Nigerian Economy and Africa at large. We are committed to screening, Recruiting, Training, Mentoring, Networking, Empowering and Supervising Student Entrepreneurs in Nigeria.'
    },
    {
        title: 'Our Vision',
        paragraph: 'Our Vision is to be a leading social enterprise to spearhead the producing and nurturing of Student-Business leaders who will emerge outstanding Entrepreneurs in making global impact by creating a paradigm shift for a sustainable Socio-economic development in Nigeria and Africa at large by following the trends and future destination of global economy.'
    },
]


const Mission = () => {
  return (
    <section className='md:px-20 px-10 py-16'>
        <FadeInSection direction={`up`}>
            <div className='py-3 '>
                {missionAndVision.slice(0,2).map((item, index) => (
                    <div key={index} className='text-seep-color space-y-4'>
                        <h3 className=' text-3xl'>{item.title}</h3>
                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>

                    </div>
                ))}
            </div>
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
                <div  className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-7'>
                    <h1 className='md:text-4xl text-3xl leading-relaxed md:w-[600px]'>Student Entrepreneurial Empowerment Program (SEEP)</h1>
                    <p className=' md:w-[600px] md:text-base text-sm line-clamp-3 text-gray-200'>
                        SEEP is an offshoot of the SEE-Support Center initiative, designed to drive innovation and empowerment in the academic environment. The SEEP program carefully integrates academics and entrepreneurship to foster a developed and sustainable Global, African, and Nigerian economy. We achieve this by screening, training, mentoring, networking, empowering, and supervising student entrepreneurs in Nigeria. 
                        Aligning with the SEE-Support Center's core drivers, our mission is to create a platform that births and nurtures innovative ideas, making profound impacts on the global environment.</p>
                    <LinkButton title='Learn More' icon={ArrowRight} path='/seep'/>
                </div>
            </div>
        </FadeInSection>
        {/* <FadeInSection direction={`up`}>
            <div className='py-3 mt-10'>
                {missionAndVision.slice(2).map((item, index) => (
                    <div key={index} className='text-seep-color space-y-4'>
                        <h3 className='hover:underline text-3xl'>{item.title}</h3>
                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>

                    </div>
                ))}
            </div> 
        </FadeInSection> */}
    </section>
  )
}

export default Mission
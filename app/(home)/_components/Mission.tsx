import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const missionAndVision = [
    {
        title: 'Our Mission',
        paragraph: 'Our mission is to provide a supporting platform to discover, nurture, and harness young potentials while leveraging Research, Innovation, Empowerment, Science and Technology for a productive, developed and sustainable Nigerian and Global Economy.'
    },
    {
        title: 'Our Vision',
        paragraph: 'Our Vision is to be a leading social enterprise to spearhead the producing and nurturing of Young-Business leaders who will emerge outstanding Entrepreneurs in making global impact by creating a paradigm shift for a sustainable Socio-economic development in Nigeria and Africa at large by following the trends and future destination of global economy.'
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
            <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_1.png)`}}>
                <div  className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                    <h1 className='md:text-4xl text-3xl leading-relaxed md:w-[600px]'>Social Entrepreneurial Enhancement Support Center (SEE - Support Center)</h1>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='py-3 mt-10'>
                {missionAndVision.slice(0,2).map((item, index) => (
                    <div key={index} className='seep-text-color space-y-4'>
                        <h3 className='hover:underline text-3xl'>{item.title}</h3>
                        <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>

                    </div>
                ))}
            </div>
        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
                <div  className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-7'>
                    <h1 className='md:text-4xl text-3xl leading-relaxed md:w-[600px]'>Student Entrepreneurial Empowerment Program (SEEP)</h1>
                    <p className=' md:w-[600px] md:text-base text-sm  md:line-clamp-none line-clamp-6 text-gray-200'>SEEP is an offshoot of the SEE-Support Center initiative designed to drive innovation and empowerment in the academic environment. The SEEP program is carefully crafted to thread academics and entrepreneurship for a developed and sustainable Nigerian, African and the Global economy. To create global impact, we are committed to Screening, Training, Mentoring, Networking, Empowering and Supervising Student Entrepreneurs in Nigeria.The SEEP program is driven in unity with the core drivers of the SEE-Support Center initiative. We are committed to creating a platform to birth, nurture innovative ideas that will greatly impact the global environment.</p>
                    <Button title='Learn More' icon={ArrowRight} path='/seep'/>
                </div>
            </div>
        </FadeInSection>
        {/* <FadeInSection direction={`up`}>
            <div className='py-3 mt-10'>
                {missionAndVision.slice(2).map((item, index) => (
                    <div key={index} className='seep-text-color space-y-4'>
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
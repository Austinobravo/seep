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
        <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_1.png)`}}>
            <div  className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                <h1 className='md:text-4xl text-3xl leading-relaxed md:w-[600px]'>Social Entrepreneurial Enhancement Support Center (SEE - Support Center)</h1>
            </div>
        </div>
        <div className='py-3 mt-10'>
            {missionAndVision.slice(0,2).map((item, index) => (
                <div key={index} className='seep-text-color space-y-4'>
                    <h3 className='hover:underline text-3xl'>{item.title}</h3>
                    <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>

                </div>
            ))}
        </div>
        <div className='w-full bg-cover md:bg-right-top bg-center h-[600px] rounded-2xl text-white' style={{backgroundImage: `url(/images/mission_2.png)`}}>
            <div  className='bg-gradient-to-r from-[#0097FF] via-transparent to-transparent h-[600px] rounded-2xl flex flex-col md:pl-10 pl-5 md:justify-center justify-end pb-16 space-y-5'>
                <h1 className='md:text-4xl text-3xl leading-relaxed md:w-[600px]'>Student Entrepreneurial Empowerment Program (SEEP)</h1>
            </div>
        </div>
        <div className='py-3 mt-10'>
            {missionAndVision.slice(2).map((item, index) => (
                <div key={index} className='seep-text-color space-y-4'>
                    <h3 className='hover:underline text-3xl'>{item.title}</h3>
                    <p className='leading-relaxed pb-5 text-lg'>{item.paragraph}</p>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Mission
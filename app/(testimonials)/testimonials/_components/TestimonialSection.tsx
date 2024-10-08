import FadeInSection from '@/hooks/fadeIn'
import Image from 'next/image'
import React from 'react'
const Testimonials = [
    {
        image: '',
        name: 'Olivia Thomas',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
    {
        image: '',
        name: 'John Bassey',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
    {
        image: '',
        name: 'Onome Francis',
        paragraph: 'Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech.',
        school: 'Government Technical Secondary School Uyo',
        program: 'Tech to School Beneficiary'
    },
]
const TestimonialSection = () => {
  return (
    <section className='md:px-20 px-10 py-20'>
        <FadeInSection direction={`down`}>
            <div className='w-[90%] rounded-md mx-auto h-96 mb-7 bg-cover cursor-pointer bg-center flex justify-center items-center' style={{backgroundImage: `url(/images/SEEP_231.png)`}}>
                <Image src={`/images/VideoIcon.png`} width={100} height={100} alt='Icon'/>
            </div>


        </FadeInSection>
        <FadeInSection direction={`up`}>
            <div className='text-[#33ACFF] space-y-10'>
                {Testimonials.map((testimonial, index) => (
                    <div key={index} className='rounded-lg border space-y-5 border-[#0097FF] py-7 px-10'>
                        <Image src={`/images/comma.png`} width={100} height={100} alt='comma' />
                        <p>{testimonial.paragraph}</p>
                        <div className='flex gap-x-2 '>
                            <div className='bg-[#B4E0FF] rounded-full p-6 w-fit h-fit'>
                                <Image src={`/images/avatar.webp`} width={50} height={50} alt='avatar'/>
                            </div>
                            <div>
                                <h2 className='seep-text-color text-2xl font-bold'>{testimonial.name}</h2>
                                <p className='md:text-base text-sm mb-1'>{testimonial.school}</p>
                                <p className='md:text-base text-sm'>{testimonial.program}</p>
                            </div>
                        </div>

                    </div>

                ))}

            </div>  
        </FadeInSection>

      
    </section>
  )
}

export default TestimonialSection

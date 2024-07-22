'use client'
import Button from '@/components/Button'
import FadeInSection from '@/hooks/fadeIn'
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const occasions = [
  {
    image: '/images/beneficiaries.png',
    title: 'Financial Summit 2019',
  },
  {
    image: '/images/tech3.png',
    title: 'Tech to school 2022',
  },
  {
    image: '/images/tech2.png',
    title: '',
  },
]
const Beneficiaries = () => {
  const[currentImageIndex, setCurrentImageIndex] = React.useState<number>(0)

  const IncrementIndex = () => {
    setCurrentImageIndex((prev) => occasions.length - 1 === prev ? 0 : prev + 1)
  }
  const DecrementIndex = () => {
    setCurrentImageIndex((prev) => 0 === prev ? occasions.length -1 : prev - 1)
  }
  return (
    <section className='md:px-28 px-10 py-10 seep-text-color'>
      <FadeInSection direction={`up`}>
        <div>
            <h2 className=' text-center text-4xl  py-5 font-bold'>Meet Our Beneficiaries</h2>
            {/* {occasions.map((occasion, index) => ( */}
              
            {/* ))} */}
            <div className='seep-bg-color bg-center bg-cover bg-no-repeat relative h-80 w-full rounded-lg' style={{backgroundImage : `url(${occasions[currentImageIndex].image})`}}>
              <div className='bg-gradient-to-t from-[#0097FF] h-80 via-transparent to-transparent'>
                <div className='flex justify-between items-center pt-24 px-5'>
                  <ChevronLeft color='white' size={45} onClick={DecrementIndex} className='cursor-pointer'/>
                  <ChevronRight color='white' size={45} onClick={IncrementIndex} className='cursor-pointer'/>
                </div>
                <div className='bottom-10 absolute px-10 w-full'>
                  <div>
                    <p className='text-white font-bold text-xl'>{occasions[currentImageIndex].title}</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={`/images/seep_logo.png`} width={100} height={100} alt='seep logo'/>
                    <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
                  </div>

                </div>

              </div>

            </div>
        </div>
            
      </FadeInSection>
      <FadeInSection direction={`up`}>
        <div className='py-10 space-y-3'>
            <h2 className=' text-center text-4xl py-5 font-bold'>Donate and Partner with Us</h2>
            <p>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
            <div className='mx-auto w-fit'>
                <Button title='Donate Now' icon={MoveRight} path=''/>
            </div>
        </div> 
      </FadeInSection>


      
    </section>
  )
}

export default Beneficiaries

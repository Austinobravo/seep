'use client'
import DonateModal from '@/app/(contact)/contact/_components/DonateModal'
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
    setCurrentImageIndex((next) => occasions.length - 1 === next ? 0 : next + 1)
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
            <div className=' bg-cover bg-no-repeat bg-top relative h-[26rem] w-full rounded-lg' style={{backgroundImage : `url(${occasions[currentImageIndex].image})`}}>
              <div className='bg-gradient-to-t from-[#0097FF] h-[26rem] via-transparent to-transparent'>
                <div className='flex justify-between items-center pt-24 md:px-5 px-2'>
                  <ChevronLeft color='white' size={45} onClick={DecrementIndex} className='cursor-pointer'/ >
                  <ChevronRight color='white' size={45} onClick={IncrementIndex} className='cursor-pointer'/>
                </div>
                <div className='bottom-10 absolute md:px-10 px-3 w-full'>
                  <div>
                    <p className='text-white font-bold text-xl'>{occasions[currentImageIndex].title}</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={`/images/seep_logo.png`} width={100} height={100} alt='seep logo' className='md:w-28 w-20'/>
                    <Image src={`/images/logo.png`} width={100} height={100} alt='logo' className='md:w-28 w-20'/>
                  </div>

                </div>

              </div>

            </div>
        </div>
            
      </FadeInSection>
     


      
    </section>
  )
}

export default Beneficiaries

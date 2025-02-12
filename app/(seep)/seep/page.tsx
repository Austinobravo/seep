import React from 'react'
import SeepHero from './_components/SeepHero'
import Counter from '../../../components/Counter'
import WhoWeAre from './_components/WhoWeAre'
import Programs from './_components/Programs'
import Beneficiaries from './_components/Beneficiaries'
import FadeInSection from '@/hooks/fadeIn'
import DonateModal from '@/app/(contact)/contact/_components/DonateModal'

const Text= [
  {
      heading: '1700',
      paragraph: 'Students Impacted'
  },
  {
      heading: '15',
      paragraph: 'Skills Learnt'
  },
  {
      heading: '5',
      paragraph: 'Schools Improved'
  },
]
const page = () => {
  return (
    <div>
        <SeepHero/>
        <Counter Text={Text}/>
        <WhoWeAre/>
        <Programs/>
        <Beneficiaries/>
        <FadeInSection direction={`up`}>
          <div className='py-10 space-y-3 text-seep-color md:px-20 p-x10 '>
              <h2 className=' text-center text-4xl py-5 font-bold'>Donate and Partner with Us</h2>
              <p>Your generosity will enable us to assist these students and young graduates in rural and urban communities, helping them discover and develop their potential and interest in tech. We invite you to join us in providing everyone with the opportunity to learn through technology. Together, we can make a lasting impact on the lives of many.</p>
          </div> 
        </FadeInSection>
        <div>
              <DonateModal/>
        </div>
      
    </div>
  )
}

export default page

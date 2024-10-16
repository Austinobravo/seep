import React from 'react'
import SeepHero from './_components/SeepHero'
import Counter from '../../../components/Counter'
import WhoWeAre from './_components/WhoWeAre'
import Programs from './_components/Programs'
import Beneficiaries from './_components/Beneficiaries'

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
      
    </div>
  )
}

export default page

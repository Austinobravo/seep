import React from 'react'
import SeepHero from './_components/SeepHero'
import Counter from './_components/Counter'
import WhoWeAre from './_components/WhoWeAre'
import Programs from './_components/Programs'
import Beneficiaries from './_components/Beneficiaries'

const page = () => {
  return (
    <div>
        <SeepHero/>
        <Counter/>
        <WhoWeAre/>
        <Programs/>
        <Beneficiaries/>
      
    </div>
  )
}

export default page

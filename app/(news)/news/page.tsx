import React from 'react'
import NewsHero from './_components/NewsHero'
import Counter from '@/components/Counter'
import NewsCategories from './_components/NewsCategories'
import Discover from './_components/Discover'
import Beneficiaries from '@/app/(seep)/seep/_components/Beneficiaries'
import LatestNews from './_components/LatestNews'

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
        <NewsHero/>
        <Counter Text={Text}/>
        <NewsCategories/>
        <Discover/>
        <Beneficiaries/>
        <LatestNews/>
      
    </div>
  )
}

export default page

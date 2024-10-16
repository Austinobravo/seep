import React from 'react'
import NewsHero from './_components/NewsHero'
import Counter from '@/components/Counter'

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
      
    </div>
  )
}

export default page

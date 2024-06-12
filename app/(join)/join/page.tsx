import React from 'react'
import JoinHero from './_components/JoinHero'
import JoinForm from './_components/JoinForm'
import SupportForm from '@/app/(support)/support/_components/SupportForm'
import SupportHero from '@/app/(support)/support/_components/SupportHero'

const page = () => {
  return (
    <div>
        <JoinHero/>
        {/* <JoinForm/> */}
        <SupportHero/>
        {/* <SupportForm/> */}
      
    </div>
  )
}

export default page

import React from 'react'
import ContactHero from './_components/ContactHero'
import ContactForm from './_components/ContactForm'
import ContactDetails from './_components/ContactDetails'

const page = () => {
  return (
    <div>
        <ContactHero/>
        <div className='flex flex-wrap md:flex-nowrap gap-10 md:px-20 px-10 '>
          <div className='md:basis-1/2 w-full'>
          <ContactDetails/>
          </div>
          <div className='md:basis-1/2 w-full'>
          <ContactForm/>
          </div>
        </div>
    </div>
  )
}

export default page
import React from 'react'

import TestimonialCard from './_components/TestimonialCard'
import AdminNav from '../_components/AdminNav'
import axios from 'axios'

const TestimonialPage = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials`)
    const Testimonials:TestimonialType[] = response.data

  return (
    <section>
        <AdminNav title='Testimonials'/>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {Testimonials.map((testimonial:TestimonialType) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial}/>

            ))}
        </div>
      
    </section>
  )
}

export default TestimonialPage

import React from 'react'

import TestimonialCard from './_components/TestimonialCard'
import AdminNav from '../_components/AdminNav'
import axios from 'axios'
import Image from 'next/image'
import { CreateTestimonial } from './_components/CreateTestimonial'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

async function getTestimonialData() {
    try {
      const res = await fetch(`${BASE_URL}/api/testimonials`, {
        cache: "no-store", // Ensures fresh data every request
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Failed to fetch testimonial content:", error);
      return []; // Return empty array to avoid crashes
    }
  }
  

const TestimonialPage = async () => {
    const Testimonials:TestimonialType[] = await getTestimonialData()

  return (
    <section>
        <AdminNav title='Testimonials'/>
        <div className='py-3 ml-auto w-fit'>
            <CreateTestimonial/>
        </div>
        {Testimonials.length >= 1 ?
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {Testimonials.map((testimonial:TestimonialType) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial}/>

            ))}
        </div>
        :
        <figure className='mx-auto w-fit text-center'>
            <Image src={`/images/nothing.jpg`} width={500} height={200} alt="No Testimonial Image" className='aspect-ratio'/>
            <figcaption>No testimonial yet.</figcaption>
        </figure>
        }
      
    </section>
  )
}

export default TestimonialPage

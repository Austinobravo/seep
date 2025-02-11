import React from 'react'
import TestimonialHero from './_components/TestimonialHero'
import TestimonialSection from './_components/TestimonialSection'
import axios from 'axios';

const Page = async () => {
  let testimonials = [];

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials`);
    testimonials = response.data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
  }
  return (
    <div>
      <TestimonialHero/>
      <TestimonialSection testimonials={testimonials}/>
    </div>
  )
}

export default Page

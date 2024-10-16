import FadeInSection from '@/hooks/fadeIn'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const categories = [
    {
        heading: "Latest News",
        shorten_desc: "Stay current",
        description: "Over 100 articles published monthly"
    },
    {
        heading: "Volunteers",
        shorten_desc: "Trusted insights",
        description: "20+ volunteers on our team"
    },
    {
        heading: "Testimonials",
        shorten_desc: "Impact",
        description: "Over 50 beneficials yearly"
    },

]
const NewsCategories = () => {
  return (
    <section className='md:px-20 px-10'>
        <h2 className='text-center seep-text-color text-2xl font-semibold pb-5'>CATEGORIES</h2>
        <FadeInSection direction={"up"}>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                {categories.map((category) => (
                    <div key={category.heading} className='bg-black/5 flex p-7 rounded-lg justify-between'>
                        <div className='seep-text-color'>
                            <h3 className='text-xl font-semibold'>{category.heading}</h3>
                            <span className='text-xs opacity-70'>{category.shorten_desc}</span>
                            <p className='text-sm opacity-70 pt-7'>{category.description}</p>
                        </div>
                        <div>
                        <div className='rounded-full cursor-pointer bg-amber-500 p-1  text-white'>
                                <ArrowUpRight/>
                            </div>
                        </div>


                    </div>

                ))}

            </div>
        </FadeInSection>

      
    </section>
  )
}

export default NewsCategories

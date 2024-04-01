"use client"
import FadeInSection from '@/hooks/fadeIn'
import React from 'react'

const ContactForm = () => {
    const submitForm =(event:any)=>{
        event.preventDefault()
        alert("Calm down")
    }
  return (
    <section >
        <FadeInSection direction={`up`}>
            <form onSubmit={submitForm} className='py-10 space-y-4'>
                <h2 className='font-bold text-xl'>Leave a message for us here and will get back to us when we can.</h2>
                <div>
                    <label htmlFor='name'></label>
                    <input type='text' id='name' name='name' placeholder='Name' className='border-2 px-2 py-3  rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div>
                    <label htmlFor='email_address'></label>
                    <input type='email' id='email_address' name='email_address' placeholder='Email Address' className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div>
                    <label htmlFor='phone_number'></label>
                    <input type='number' id='phone_number' name='phone_number' placeholder='Your Phone Number' className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div>
                    <label htmlFor='message'></label>
                    <textarea rows={10} cols={10} id='message' name='message' placeholder='Your Message' className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div className='pb-10'>
                    <button type='submit' className='bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-3 w-full rounded-lg '>Send us a message</button>
                </div>

            </form>       
        </FadeInSection>
      
    </section>
  )
}

export default ContactForm

import FadeInSection from '@/hooks/fadeIn'
import React from 'react'

const JoinForm = () => {
    const submitForm =(event:any)=>{
        event.preventDefault()
        alert("Calm down")
    }
  return (
    <section className='md:px-20 px-10'>
        <FadeInSection direction={`up`}>
            <form onSubmit={submitForm} className='py-10 space-y-4'>
                <div>
                    <label htmlFor='name'></label>
                    <input type='text' id='name' name='name' placeholder='Name' className='border-2 px-2 py-3  rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div>
                    <label htmlFor='email_address'></label>
                    <input type='email' id='email_address' name='email_address' placeholder='Email Address' className='border-2 px-2 py-3 rounded-lg w-full focus:border-[#0097FF] outline-none'/>
                </div>
                <div className='pb-10'>
                    <button type='submit' className='bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-3 w-full rounded-lg '>Join Us</button>
                </div>

            </form>
        </FadeInSection>
      
    </section>
  )
}

export default JoinForm
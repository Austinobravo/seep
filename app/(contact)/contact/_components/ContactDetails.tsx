
import {  Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import DonateModal from './DonateModal'

const ContactDetails = () => {
  return (
    <section className='py-10 space-y-4'>
        <h2 className='font-bold text-xl'>Frequently Asked Questions</h2>
        <p className='text-lg seep-text-color'>Reach out to us with your frequently asked question</p>
        <div className='flex items-center gap-x-3'>
            <Mail/>
            <div>
                <h3 className='font-bold'>Email</h3>
                <p className='seep-text-color'>Support@seep.com</p>
            </div>
        </div>
        <div className='flex items-center gap-x-3'>
            <Phone/>
            <div>
                <h3 className='font-bold'>Phone</h3>
                <p className='seep-text-color'>+234 70 111 1111</p>
            </div>
        </div>
        <div className='flex items-center gap-x-3'>
            <MapPin/>
            <div>
                <h3 className='font-bold'>Location</h3>
                <p className='seep-text-color'>No 3 Woods Avenue (East LA)</p>
            </div>
        </div>
        <div>
            <DonateModal/>
        </div>
      
    </section>
  )
}

export default ContactDetails

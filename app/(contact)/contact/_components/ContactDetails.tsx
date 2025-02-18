
import {  Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import DonateModal from './DonateModal'
import Link from 'next/link'

const ContactDetails = () => {
  return (
    <section className='py-10 space-y-4'>
        <h2 className='font-bold text-xl'>Frequently Asked Questions</h2>
        <p className='text-lg text-seep-color'>Reach out to us with your frequently asked question</p>
        <div className='flex items-start gap-x-3'>
            <Mail className='w-5 h-5'/>
            <div>
                <h3 className='font-bold'>Email</h3>
                <p className='text-seep-color'><Link href={`mailto:info.seesc.official@gmail.com`}>info.seesc.official@gmail.com</Link></p>
                <p className='text-seep-color'><Link href={`mailto:seepng.info@gmail.com`}>seepng.info@gmail.com</Link></p>
            </div>
        </div>
        <div className='flex items-start gap-x-3'>
            <Phone className='w-5 h-5'/>
            <div>
                <h3 className='font-bold'>Phone</h3>
                <p className='text-seep-color'><Link href={`tel:+234 806 375 0853`}><span className='font-bold'>WhatsApp:</span>+234 806 375 0853</Link></p>
                <p className='text-seep-color'><Link href={`tel:+234 916 208 5151,`}><span className='font-bold'>WhatsApp:</span>+234 916 208 5151,</Link></p>
                <p className='text-seep-color'><Link href={`tel:+234 916 208 5151,`}><span className='font-bold'>Calls:</span>+234 916 208 5151</Link></p>
            </div>
        </div>
        <div className='flex items-start gap-x-3'>
            <MapPin className='w-5 h-5'/>
            <div>
                <h3 className='font-bold'>Location</h3>
                <p className='text-seep-color'><span className='font-bold'>Head Office:</span> 13 Kenneth Nwaigwe Avenue, World Bank Estate Owerri, Imo State.</p>
                <p className='text-seep-color'><span className='font-bold'>Uyo Office:</span> Apostle Umana Building, Uwem Lazarus Road, Osongoma Estate Extension Uyo, Akwa Ibom State.</p>
            </div>
        </div>
        <div>
            <DonateModal/>
        </div>
      
    </section>
  )
}

export default ContactDetails

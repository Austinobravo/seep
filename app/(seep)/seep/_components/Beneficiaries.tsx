import Button from '@/components/Button'
import { MoveRight } from 'lucide-react'
import React from 'react'

const Beneficiaries = () => {
  return (
    <section className='md:px-28 px-10 py-10 seep-text-color'>
        <div>
            <h2 className=' text-center text-4xl  py-5 font-bold'>Meet Our Beneficiaries</h2>
            <div className='seep-bg-color py-40 w-full rounded-lg'>

            </div>
        </div>
        <div className='py-10 space-y-3'>
            <h2 className=' text-center text-4xl py-5 font-bold'>Donate and Partner with Us</h2>
            <p>Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.</p>
            <div className='mx-auto w-fit'>
                <Button title='Donate Now' icon={MoveRight} path=''/>
            </div>

        </div>


      
    </section>
  )
}

export default Beneficiaries

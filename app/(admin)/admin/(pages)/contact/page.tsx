import React from 'react'
import AdminNav from '../_components/AdminNav'
import axios from 'axios'
import { JoinTable } from './_component/JoinTable'
import { ContactTable } from './_component/ContactTable'

const page = async () => {
  let joinData:JoinUsType[] = []
  let contactData:ContactUsType[] = []
  try{
    const joinResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/join`)
    joinData = joinResponse.data
    const contactResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`)
    contactData = contactResponse.data

  }catch(error){
    console.error("Error in the Contact page", error)
  }
  return (
    <section>
      <AdminNav title='Contact '/>

      <div>
        <h4>Join us Subscribers</h4>
        <JoinTable data={joinData}/>
      </div>
      <div>
        <h4>Contact us Subscribers</h4>
        <ContactTable data={contactData}/>
      </div>
      
    </section>
  )
}

export default page

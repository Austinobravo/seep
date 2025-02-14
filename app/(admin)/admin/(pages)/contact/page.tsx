import React from 'react'
import AdminNav from '../_components/AdminNav'
import axios from 'axios'
import { JoinTable } from './_component/JoinTable'
import { ContactTable } from './_component/ContactTable'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'


async function getJoinData() {
  try {
    const res = await fetch(`${BASE_URL}/api/join`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch join content:", error);
    return []; // Return empty array to avoid crashes
  }
}

async function getContactData() {
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch contact content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const page = async () => {
  const joinData = await getJoinData()
  const contactData = await getContactData()

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

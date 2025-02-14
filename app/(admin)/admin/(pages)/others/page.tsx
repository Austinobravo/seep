import React from 'react'
import PrivacyClientPage from './clientPage'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

async function getPrivacyData() {
  try {
    const res = await fetch(`${BASE_URL}/api/privacy`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch privacy content:", error);
    return []; // Return empty array to avoid crashes
  }
}

async function getTermsData() {
  try {
    const res = await fetch(`${BASE_URL}/api/terms`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch terms content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const OthersPage = async () => {
  const privacyData:PrivacyType = await getPrivacyData()
  const termsData:PrivacyType = await getTermsData()
  
  return (
    <div>
        <PrivacyClientPage privacyData={privacyData} termsData={termsData}/>
      
    </div>
  )
}

export default OthersPage

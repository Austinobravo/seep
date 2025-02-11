import React from 'react'
import PrivacyClientPage from './clientPage'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

const OthersPage = async () => {
  let privacyData = {} as PrivacyType
  let termsData = {} as PrivacyType
  try{
    const privacyResponse = await axios.get(`${BASE_URL}/api/privacy`)
    privacyData = privacyResponse.data
    const termsResponse = await axios.get(`${BASE_URL}/api/terms`)
    termsData = termsResponse.data

  }catch(error){
    console.error("Error in the gallery", error)
  }
  
  return (
    <div>
        <PrivacyClientPage privacyData={privacyData} termsData={termsData}/>
      
    </div>
  )
}

export default OthersPage

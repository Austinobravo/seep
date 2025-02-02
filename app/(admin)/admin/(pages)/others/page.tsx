import React from 'react'
import PrivacyClientPage from './clientPage'
import axios from 'axios'

const OthersPage = async () => {
    const privacyResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/privacy`)
    const privacyData:PrivacyType = privacyResponse.data
    const termsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/terms`)
    const termsData:PrivacyType = termsResponse.data
  
  return (
    <div>
        <PrivacyClientPage privacyData={privacyData} termsData={termsData}/>
      
    </div>
  )
}

export default OthersPage

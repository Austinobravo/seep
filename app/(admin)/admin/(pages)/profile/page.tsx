import React from 'react'
import AdminNav from '../_components/AdminNav'
import ProfileForm from '../_components/ProfileForm'
import axios from 'axios'

const ProfilePage = async () => {
  const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`)
  if(response.status !== 200) return
  return (
    <div>
        <AdminNav title='Profile' user=''/>
        <ProfileForm countryCode={response.data.countryCode}/>
    </div>
  )
}

export default ProfilePage

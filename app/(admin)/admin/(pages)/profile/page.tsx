import React from 'react'
import AdminNav from '../_components/AdminNav'
import ProfileForm from '../_components/ProfileForm'
import axios from 'axios'
import { getCurrentUser } from '@/lib/serverSession'

const ProfilePage = async () => {
  const user = await getCurrentUser()
  const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`)
  if(response.status !== 200) return
  const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user?.id}`)
  const userData:UserType = userResponse.data


  return (
    <div>
        <AdminNav title='Profile' />
        <ProfileForm countryCode={response.data.countryCode} data={userData}/>
    </div>
  )
}

export default ProfilePage

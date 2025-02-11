import React from 'react'
import AdminNav from '../_components/AdminNav'
import ProfileForm from '../_components/ProfileForm'
import axios from 'axios'
import { getCurrentUser } from '@/lib/serverSession'

const ProfilePage = async () => {

  let userData = {} as UserType
  let data = {} as any
  const user = await getCurrentUser()
  try{
    const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`)
    if(response.status !== 200) return
    data = response.data.countryCode
    const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user?.id}`)
    userData = userResponse.data


  }catch(error){
    console.error("Error in the gallery", error)
  }
  


  return (
    <div>
        <AdminNav title='Profile' />
        <ProfileForm countryCode={data} data={userData}/>
    </div>
  )
}

export default ProfilePage

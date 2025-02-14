import React from 'react'
import AdminNav from '../_components/AdminNav'
import ProfileForm from '../_components/ProfileForm'
import axios from 'axios'
import { getCurrentUser } from '@/lib/serverSession'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

async function getUserData(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/api/users/${id}`, {
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

const ProfilePage = async () => {
  const user = await getCurrentUser()

  const userData:UserType = await getUserData(user?.id)
  let data = {} as any
  try{
    const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`)
    if(response.status !== 200) return
    data = response.data.countryCode



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

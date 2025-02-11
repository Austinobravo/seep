import React from 'react'
import { AdminTabs } from '../_components/AdminTabs'
import AdminNav from '../../_components/AdminNav'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'

const AdminDetailsPage = async ({params}: {params:{id: string}}) => {
  let userData = {} as UserType
  try{
    const userResponse = await axios.get(`${BASE_URL}/api/users/${params?.id}`)
    userData = userResponse.data

  }catch(error){
    console.error("Error in the Admins page", error)
  }

  return (
    <div>
        <AdminNav title='Admin'/>
        <AdminTabs userData={userData}/>
      
    </div>
  )
}

export default AdminDetailsPage

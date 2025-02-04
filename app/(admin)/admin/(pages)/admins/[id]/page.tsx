import React from 'react'
import { AdminTabs } from '../_components/AdminTabs'
import AdminNav from '../../_components/AdminNav'
import axios from 'axios'

const AdminDetailsPage = async ({params}: {params:{id: string}}) => {
  console.log("paras", params)
  const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${params?.id}`)
  const userData:UserType = userResponse.data
  console.log("user", userData)
  return (
    <div>
        <AdminNav title='Admin'/>
        <AdminTabs userData={userData}/>
      
    </div>
  )
}

export default AdminDetailsPage

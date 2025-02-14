import React from 'react'
import { AdminTabs } from '../_components/AdminTabs'
import AdminNav from '../../_components/AdminNav'
import axios from 'axios'
import { BASE_URL } from "@/lib/globals";

export const dynamic = 'force-dynamic'


async function getUserData(id:string) {
  try {
    const res = await fetch(`${BASE_URL}/api/users/${id}`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch user content:", error);
    return []; // Return empty array to avoid crashes
  }
}

const AdminDetailsPage = async ({params}: {params:{id: string}}) => {
  const userData:UserType = await getUserData(params.id)


  return (
    <div>
        <AdminNav title='Admin'/>
        <AdminTabs userData={userData}/>
      
    </div>
  )
}

export default AdminDetailsPage

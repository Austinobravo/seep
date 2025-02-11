import React from 'react'
import AdminNav from '../_components/AdminNav'
import AdminCard from './_components/AdminCard'
import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react'
import { AdminTable } from './_components/AdminTable'
import axios from 'axios'

const AdminsPage = async () => {
  let usersData:UserType[] = []
  try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`)
    usersData = response.data

  }catch(error){
    console.error("Error in the Admins page", error)
  }

  const contents= [
    {
      title : 'Total Admin',
      total: usersData.length,
      percentage: '+6.08%',
      icon: TrendingUp,
      iconColor: '#000',
      bgColor: 'bg-[#ddd]'
    },
    {
      title : 'Active Admin',
      total: usersData.filter((user) => user.isActive).length ,
      percentage: '+6.08%',
      icon: TrendingUp,
      iconColor: '#14532d',
      bgColor: 'bg-[#D0FFE0]'
    },
    {
      title : 'Inactive Admin',
      total: usersData.filter((user) => !user.isActive).length ,
      percentage: '+6.08%',
      icon: TrendingDown,
      iconColor: '#7f1d1d',
      bgColor: 'bg-[#E6E6E6]'
    },
    {
      title : 'Blocked/Reported Admin',
      total: usersData.filter((user) => user.isBlocked).length,
      bgColor: 'bg-[#FFD0D1]'
    },
  ]
  
  return (
    <div className=''>
        <AdminNav title='Administrators' user='Joy'/>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
          {contents.length >= 1 && contents.map((content) => (
            <AdminCard key={content.title} title={content.title} total={content.total} percentage={content.percentage} bgColor={content.bgColor} iconColor={content.iconColor} icon={content.icon}/>
          ))}
        </div>
        <div className='bg-blue-100 rounded-xl shadow-lg px-4 py-20 mt-10'>
          <AdminTable data={usersData}/>
        </div>

      
    </div>
  )
}

export default AdminsPage

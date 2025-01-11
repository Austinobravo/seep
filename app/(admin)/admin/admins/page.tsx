import React from 'react'
import AdminNav from '../_components/AdminNav'
import AdminCard from '../_components/AdminCard'
import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react'
import { AdminTable } from '../_components/AdminTable'

const contents= [
  {
    title : 'Total Admin',
    total: '2.80M',
    percentage: '+6.08%',
    icon: TrendingUp,
    iconColor: '#000',
    bgColor: '#ddd'
  },
  {
    title : 'Active Admin',
    total: '2,318',
    percentage: '+6.08%',
    icon: TrendingUp,
    iconColor: '#14532d',
    bgColor: '#D0FFE0'
  },
  {
    title : 'Inactive Admin',
    total: '2,318',
    percentage: '+6.08%',
    icon: TrendingDown,
    iconColor: '#7f1d1d',
    bgColor: '#E6E6E6'
  },
  {
    title : 'Blocked/Reported Admin',
    total: '2,318',
    bgColor: '#FFD0D1'
  },
]
const AdminsPage = () => {
  return (
    <div className=''>
        <AdminNav title='Administrators' user='Joy'/>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
          {contents.map((content) => (
            <AdminCard key={content.title} title={content.title} total={content.total} percentage={content.percentage} bgColor={content.bgColor} iconColor={content.iconColor} icon={content.icon}/>
          ))}
        </div>
        <div className='bg-blue-100 rounded-xl shadow-lg px-4 py-20 mt-10'>
          <AdminTable/>
        </div>

      
    </div>
  )
}

export default AdminsPage

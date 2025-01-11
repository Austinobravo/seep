import { LucideIcon } from 'lucide-react'
import React from 'react'

interface cardPropsType{
    icon: LucideIcon
    iconColor: string
    total: string
    text: string
}
const DashboardCard = ({icon:Icon,iconColor, total, text}: cardPropsType) => {
  return (
    <div className='bg-blue-100 rounded-xl p-5 space-y-6 flex flex-col justify-center items-center text-center'>
        <Icon color={`${iconColor}`}/>
        <div>
            <h4 className='text-2xl font-semibold'>{total}</h4>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default DashboardCard

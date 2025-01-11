import { LucideIcon } from 'lucide-react'
import React from 'react'


interface AdminCardProps {
    bgColor?: string
    title: string
    total: string
    percentage?: string
    icon?: LucideIcon 
    iconColor?: string
}
const AdminCard = ({bgColor, title, total, percentage, icon:Icon, iconColor}: AdminCardProps) => {

  return (
    <div className={`${bgColor ? `bg-[${bgColor}]` : ''} rounded-xl p-5 space-y-6 shadow`}>
        <h4>{ title }</h4>
        <div className='flex justify-between items-center'>
            <h5 className='text-2xl'>{ total }</h5>
            <div className='flex text-sm gap-1 items-center'>
                <span className={`${iconColor ? `text-[${iconColor}]` : ''} `}> { percentage } </span>
                {Icon && <Icon color={`${iconColor}`} size={15}/>}
            </div>
        </div>
      
    </div>
  )
}

export default AdminCard

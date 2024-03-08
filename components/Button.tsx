import { LucideIcon } from 'lucide-react'
import React from 'react'
interface Props{
    title: string
    icon: LucideIcon
}
const Button = ({title,icon:Icon}:Props) => {
  return (
    <div className='bg-[#FFA807] py-2 px-4 text-white space-x-3 w-fit items-center flex rounded-full'>
        <span>{title}</span>
        <Icon/> 
    </div>
  )
}

export default Button
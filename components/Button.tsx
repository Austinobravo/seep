import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface Props{
    title: string
    icon: LucideIcon
    path: string
}
const Button = ({title,icon:Icon,path}:Props) => {
  return (
    <Link href={path} className='bg-[#FFA807] py-2 px-4 text-white space-x-3 w-fit items-center flex rounded-full'>
        <span>{title}</span>
        <Icon/> 
    </Link>
  )
}

export default Button
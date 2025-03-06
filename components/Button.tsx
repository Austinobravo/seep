import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React, { ComponentProps } from 'react'

type Props = ComponentProps<'a'> &{
    title: string
    icon: LucideIcon
    path: string
}
const LinkButton = ({title,icon:Icon,path, ...otherTags}:Props) => {
  return (
    <Link href={path} {...otherTags} className='bg-[#FFA807] overflow-hidden  relative hover:bg-[#FFA807]/90 hover:scale-105 transition-all duration-700 py-2 px-4 text-white space-x-3 w-fit items-center flex rounded-full'>
        <span>{title}</span>
        <span className='bg-black inset-0 absolute translate-x-0 opacity-0 delay-75 hover:opacity-50 transition-all duration-700 hover:translate-x-full'></span>
        <Icon/> 
    </Link>
  )
}

export default LinkButton
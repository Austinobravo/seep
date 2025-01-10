import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
type Props = {
    title: string
    user?: string
}
const AdminNav = ({title, user} : Props) => {
  return (
    <div className='flex justify-between items-center py-5 flex-wrap'>
        <div className='flex items-center w-full gap-x-4'>
            <Image src={`/images/logo.png`} width={500} height={500} alt='Logo' className='size-20 object-contain'/>
            <div className=''>
                <h3 className='text-3xl seep-text-color font-semibold'>{title}</h3>
                <h4>Hi {user ? user : 'Chief'}, Welcome back!</h4>
            </div>
        </div>
        <div className='bg-gray-200 flex rounded-md size-fit py-2 w-full sm:basis-2/4 px-2 gap-2'>
            <Search/>
            <input type='text' placeholder='Search...' className='bg-inherit placeholder:text-black rounded-lg w-full !outline-0 outline-none ring-0 ' />
        </div>
    </div>
  )
}

export default AdminNav

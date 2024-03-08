import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
const MobileNav = () => {
  return (
    <div className='flex px-10 items-ceenter justify-between py-7'>
        <div>
            <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
        </div>
        <div>
            <Menu size={40}/>
        </div>
    </div>
  )
}

export default MobileNav
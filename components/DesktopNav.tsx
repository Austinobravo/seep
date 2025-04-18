'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Gallery',
        link: '/gallery'
    },
    {
        name: 'Programs & Projects',
        link: '/programs'
    },
    {
        name: 'Contact Us',
        link: '/contact '
    },
]

const DesktopNav = () => {
    const pathname = usePathname()
  return (
    <nav id='desktopNav' className={`flex justify-between items-center fixed bg-white w-full md:px-20 z-20 px-10 py-7 ${pathname.includes('/admin') && 'hidden'}`}>
        <Link href='/'>
            <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
        </Link>
        <div>
            <ul className='flex space-x-10 items-center'>
                {navLinks.map((navLink, index) => (
                    <li key={index} className={`transition-all duration-500 ease-in-out ${navLink.name === 'Contact Us' && "bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-1 px-4 rounded-full hover:!text-white hover:scale-105"} ${pathname === navLink.link && 'text-[#0097FF] font-bold'} hover:text-[#0097FF] hover:font-bold`}>
                        <Link href={navLink.link}>
                            {navLink.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    </nav>
  )
}

export default DesktopNav
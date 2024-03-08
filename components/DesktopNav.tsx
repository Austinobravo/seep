import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navLinks = [
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
        link: '/about'
    },
    {
        name: 'Contact Us',
        link: '/contact-us'
    },
]

const DesktopNav = () => {
  return (
    <div className='flex justify-between items-center w-full px-10 py-7'>
        <div>
            <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
        </div>
        <div>
            <ul className='flex space-x-10 items-center'>
                {navLinks.map((navLink, index) => (
                    <li key={index} className={`${navLink.name === 'Contact Us' && "bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-1 px-4 rounded-full"}`}>
                        <Link href={navLink.link}>
                            {navLink.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default DesktopNav
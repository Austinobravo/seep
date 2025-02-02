'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { usePathname } from 'next/navigation'

const footerLinks = [
    [
        {
            name: 'About Us',
            link: '/about'
        },
        {
            name: 'Programs & Projects',
            link: '/programs'
        },
        {
            name: 'Support Us',
            link: '/join'
        },
        
    ],
    [
        {
            name: 'News & Events',
            link: '/news'
        },
        {
            name: 'Gallery',
            link: '/gallery'
        },
        {
            name: 'Testimonials',
            link: '/testimonials'
        },
        
    ],
    [
        {
            name: 'Join Us',
            link: '/join'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        },

    ]
]

const socialLinks = [
    {
        href: 'https://www.facebook.com/profile.php?id=100064560137846&mibextid=ZbWKwL',
        icon: <Facebook/>,
    },
    {
        href: '', 
        icon: <Twitter/>,
    },
    {
        href: '',
        icon: <Youtube/>,
    },
    {
        href: '',
        icon: <Instagram/>,
    },
]
const Footer = () => {
    const pathname = usePathname()
  return (
    <section className={`bg-seep-color flex md:flex-nowrap flex-wrap text-white py-20 gap-x-20 px-10 items-center space-y-6 ${pathname.includes('/admin') && 'hidden'}`}>
        <div className='space-y-2'>
            <Link href={`/`}>
                <Image src={`/images/logo-white.png`} width={100} height={100} alt='logo'/> 
            </Link>
            <p>SEE Support Centre</p>
        </div>
        <div className='flex md:flex-nowrap flex-wrap gap-x-16 w-fit md:mx-auto '>
            {footerLinks.map((footerlink, index) => (
                <ul key={index} className='space-y-4 pb-7'>
                    {footerlink.map((eachLink, index) => (
                        <li key={index}>
                            {/* <Link href={eachLink.link} onClick={(event)=> {eachLink.link === '/news' && event.preventDefault()}} className={`${eachLink.link === '/news' && 'opacity-70'}`}>{eachLink.name}</Link> */}
                            <Link href={eachLink.link}>{eachLink.name}</Link>
                        </li>
                    ))}
                </ul>
            ))}

        </div>
        <Link href={`/seep`}>
            <Image src={`/images/seep_logo.png`} width={100} height={100} alt='seep_logo'/>
        </Link>
        <div>
            <ul className='flex md:flex-col flex-row gap-2'>
                {socialLinks.map((link, index) => (
                    <li key={index} className={`border rounded-lg p-1`}>
                        <Link href={link.href} target='_blank' onClick={(event)=> {!link.href && event.preventDefault()}} className={`${!link.href && 'text-white/50 cursor-not-allowed'}`}>
                            {link.icon}
                        </Link>
                    </li>
                ))}

            </ul>


        </div>
    </section>
  )
}

export default Footer
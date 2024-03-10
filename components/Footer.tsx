import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
            link: '/support'
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
const Footer = () => {
  return (
    <section className='seep-bg-color flex md:flex-nowrap flex-wrap text-white py-20 gap-x-20 px-10 items-center space-y-6'>
        <div className='space-y-2'>
            <Image src={`/images/logo-white.png`} width={100} height={100} alt='logo'/> 
            <p>SEE Support Centre</p>
        </div>
        <div className='flex md:flex-nowrap flex-wrap gap-x-16 w-fit md:mx-auto '>
            {footerLinks.map((footerlink, index) => (
                <ul key={index} className='space-y-4 pb-7'>
                    {footerlink.map((eachLink, index) => (
                        <li key={index}>
                            <Link href={eachLink.link}>{eachLink.name}</Link>
                        </li>
                    ))}
                </ul>
            ))}

        </div>
    </section>
  )
}

export default Footer
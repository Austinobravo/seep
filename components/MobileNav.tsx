'use client'
import React from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

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

const MobileNav = () => {
  const [isMenuToggled, setIsMenuToggled] = React.useState<boolean>(false)

  React.useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth >= 756){
        setIsMenuToggled(false)
      }
    }
    window.addEventListener('resize', handleResize)
  
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }

  },[])
  return (
    <nav className='fixed top-0 w-full z-20 overflow-y-hidden'>
      <div className='flex px-10 items-center justify-between py-7  bg-white'>
        <Link href={`/`}>
            <Image src={`/images/logo.png`} width={100} height={100} alt='logo'/>
        </Link>
        <div onClick={()=>setIsMenuToggled(!isMenuToggled)} className='cursor-pointer'>
          {isMenuToggled ?
            <X size={40}/>
          :
            <Menu size={40}/>
          }
        </div>
      </div>
      <div className={`transition-all duration-500 delay-150 ease-in-out ${isMenuToggled ? 'h-screen': '-translate-y-full'}`}>
        {isMenuToggled && 
          <ul className='bg-white h-screen flex flex-col items-center space-y-12 border-t border-black pt-5'>
            {navLinks.map((navLink, index) => (
              <li key={index} className={`${navLink.name === 'Contact Us' && "bg-gradient-to-r from-[#0097FF] to-[#CCEAFF] text-white py-1 px-4 rounded-full hover:!text-white hover:scale-105"} hover:text-[#0097FF] hover:font-bold text-2xl`}>
                <Link href={navLink.link} onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                  {navLink.name}
                </Link>
              </li>
            ))}

          </ul>
        }

      </div>
    </nav>
  )
}

export default MobileNav
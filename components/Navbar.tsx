import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <section>
        <nav className='lg:flex hidden'>
            <DesktopNav/>
        </nav>
        <nav className='lg:hidden block'>
            <MobileNav/>
        </nav>
    </section>
  )
}

export default Navbar
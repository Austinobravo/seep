import React from 'react'
import AdminSidebar from './_components/AdminSidebar'

const AdminLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='flex -mt-28 h-screen'>
        <aside className='w-52 sm:block hidden'>
            <AdminSidebar/>
        </aside>
        <div>
            {children}
        </div>
      
    </div>
  )
}

export default AdminLayout

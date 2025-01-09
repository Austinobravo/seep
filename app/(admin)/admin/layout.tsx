import React from 'react'
import AdminSidebar from './_components/AdminSidebar'

const AdminLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='flex -mt-28 h-screen gap-4'>
        <aside className='w-60 '>
            <AdminSidebar/>
        </aside>
        <div className='w-full'>
            {children}
        </div>
      
    </div>
  )
}

export default AdminLayout

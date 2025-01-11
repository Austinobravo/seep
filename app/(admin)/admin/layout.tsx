import React from 'react'
import AdminSidebar from './_components/AdminSidebar'

const AdminLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='flex -mt-28'>
        <aside className='sm:w-60 !h-screen bg-blue-100'>
            <AdminSidebar/>
        </aside>
        <div className='w-full h-screen overflow-y-auto pb-10 mx-4 no-scrollbar'>
            {children}
        </div>
      
    </div>
  )
}

export default AdminLayout

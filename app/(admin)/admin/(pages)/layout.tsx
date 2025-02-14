import React from 'react'
import AdminSidebar from './_components/AdminSidebar'
import { getCurrentUser } from '@/lib/serverSession'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'

const AdminLayout = async ({children}: {children:React.ReactNode}) => {
  const user = await getCurrentUser()
  if(!user) return redirect('/admin')

  
  return (
    <div className='flex -mt-28'>
        <aside className='sm:w-60 !h-screen bg-blue-100 overflow-auto no-scrollbar'>
            <AdminSidebar user={user}/>
        </aside>
        <div className='w-full h-screen overflow-y-auto pb-10 mx-4 no-scrollbar'>
            {children}
        </div>
      
    </div>
  )
}

export default AdminLayout

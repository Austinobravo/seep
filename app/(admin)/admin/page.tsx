import { TriangleAlert } from 'lucide-react'
import React from 'react'
import LoginForm from './(pages)/_components/LoginForm'
import { getCurrentUser } from '@/lib/serverSession'
import { redirect } from 'next/navigation'

const AdminLoginPage = async () => {
  const user = await getCurrentUser()
  if(user) return redirect('/admin/dashboard')
  return (
    <section className='flex justify-center items-center h-screen'>
        <div className='shadow-md max-w-96  py-5 px-3 rounded-md space-y-4'>
            <h2 className='text-3xl font-bold text-center'><span className='text-blue-500'>Admin</span> Login</h2>
            <div className='flex items-center gap-2 text-xs font-semibold'>
                <TriangleAlert className='text-amber-500'/> 
                <p className='hover:underline-offset-4'>Don't waste your time if you don't have an account here.</p>
            </div>
            <LoginForm/>
        

        </div>
    </section>
  )
}

export default AdminLoginPage

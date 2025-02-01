"use client"
import { useAdminNavigation } from '@/hooks/useAdminNavigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronDown, ChevronUp, LogOut, PanelRight } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type UserProps = {
    username: string;
    id: string;
    firstName: string;
    lastName: string;
} | undefined

const AdminSidebar = ({user}: {user:UserProps}) => {
    const paths = useAdminNavigation()
    const [currentPath,  setCurrentPath] = React.useState<string>("")
    const [isCurrentPathToggled,  setIsCurrentPathToggled] = React.useState<boolean>(false)
    const [isSidebarToggled,  setIsSidebarToggled] = React.useState<boolean>(false)


    const router = useRouter()

    const setCurrent = (value:string) => {
        setIsCurrentPathToggled(!isCurrentPathToggled)
        setCurrentPath(value)

    }
    const logOut = async () => {
        const SignOut = await signOut({redirect:false})
        if(SignOut.url) return router.push("/admin")
    }
  return (
    <div className='flex'>
        <section className={`sm:block ${isSidebarToggled ? '' : "hidden"} space-y-3 py-4  bg-blue-100 !h-screen pt-10 relative`}>
            <div className='flex flex-col items-center justify-center pb-7 text-center'>
                <Image src={`/images/avatar.webp`} width={500} height={500} alt='avatar' className='size-20'/>
                <h3 className='pt-2 pb-1 font-semibold'>{user?.lastName} {user?.firstName} </h3>
                <h4 className='text-sm'>Administrator</h4>
            </div>
            <div>
                <h4 className='pl-5 pb-2'>MENU</h4>
                <div className='space-y-3'>
                    {paths.map((path) =>{
                        const Icon = path.icon
                        return (
                            <div key={path.name} className={`flex flex-col ${path.active && "seep-bg-color rounded-lg !text-white mx-2"} seep-text-color `}>
                                <div className={`flex items-center gap-2 px-4`}>
                                    <Icon className={`${path.active && "text-white" } text-black size-6 `}/>
                                    <Link href={`/admin/${path.href}`} className='flex items-center justify-between w-full' onClick={(event)=> {path.children && event.preventDefault(), setCurrent(path.name)}}>
                                        <span className='py-1 text-sm'>{path.name}</span>
                                        {path.children && path.children && 
                                            <div>
                                                {isCurrentPathToggled && currentPath === path.name ?
                                                <ChevronUp color='white' className='w-6 h-6'/>
                                                :
                                                <ChevronDown color='white' className='w-6 h-6'/>
                                                }
                                                <span className='sr-only'>Open Menu</span>
                                            </div>
                                            }
                                    </Link>
                                </div>
                                {path.children && currentPath === path.name && isCurrentPathToggled &&
                                    <ul className='bg-gray-800 font-semibold space-y-2 py-2 slide-in-from-top'>
                                        {path.children.length > 0 && path.children.map((path_children) => (
                                            <li key={path_children.name} className='text-gray-200 px-4 py-1 hover:bg-gray-700 '>
                                                <Link href={path_children.href}> {path_children.name}</Link>
                                            </li>
                                        ) )}
                                    </ul>
                                }
                            </div>
                        )
                    }
                    
                    )}

                </div>

            </div>

            <div className='absolute bottom-4 pl-5'>
                <button type='button' className='flex seep-text-color mx-auto cursor-pointer' onClick={logOut}>
                    <LogOut/>
                    <span>Log Out</span>
                </button>

            </div>

        </section>

        <section className='sm:hidden'>
            <PanelRight onClick={() => setIsSidebarToggled(!isSidebarToggled)}/>
        </section>
    </div>
    
  )
}

export default AdminSidebar

"use client"
import { useAdminNavigation } from '@/hooks/useAdminNavigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronDown, ChevronUp, LogOut, PanelRight } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'


const AdminSidebar = ({user}: {user:UserType}) => {
    const paths = useAdminNavigation(user.role)
    const [currentPath,  setCurrentPath] = React.useState<string>("")
    const [isCurrentPathToggled,  setIsCurrentPathToggled] = React.useState<boolean>(false)
    const [isSidebarToggled,  setIsSidebarToggled] = React.useState<boolean>(false)
    const { toast } = useToast()
    const router = useRouter()

    const pathname  = usePathname()
    if(pathname.includes("/admins") && user.role !== "superuser"){
         router.push("/admin")
    }

    const { data: session } = useSession();


    React.useEffect(() => {
        if (session?.user.isBlocked) {
            logOut();
        }
    }, [session, router]);



    const setCurrent = (value:string) => {
        setIsCurrentPathToggled(!isCurrentPathToggled)
        setCurrentPath(value)

    }
    const logOut = async () => {
        const SignOut = await signOut({redirect:false})
        toast({
            description: "We'll miss you. Come back shortly",
            variant: "default"
        })
        if(SignOut.url) return router.push("/admin")
    }
  return (
    <div className='flex'>
        <section className={`sm:block ${isSidebarToggled ? '' : "hidden"} space-y-3 py-4 bg-blue-100 !h-screen pt-10 relative`}>
            <div className='flex flex-col items-center justify-center pb-7 text-center'>
                <Image src={`${user.image ? encodeURI(user.image) : "/images/avatar.webp"}`} width={500} height={500} alt='avatar' className='size-20 rounded-full ob'/>
                <h3 className='pt-2 pb-1 font-semibold'>{user?.firstName} {user?.lastName} </h3>
                <h4 className='text-sm'>Administrator</h4>
            </div>
            <div className='pb-20'>
                <h4 className='pl-5 pb-2'>MENU</h4>
                <div className='space-y-3'>
                    {paths.map((path) =>{
                        const Icon = path.icon
                        return (
                            <div key={path.name} className={`flex flex-col ${path.active && "bg-seep-color hover:bg-seep-color/80  !text-white mx-2"} rounded-lg text-seep-color hover:bg-gray-50`}>
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

                <Dialog>
                        <DialogTrigger asChild>
                        <div className='mt-20 pb-5 pl-5'>
                            <button type='button' className='flex text-seep-color gap-x-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-md' >
                                <LogOut className=''/>
                                <span>Log Out</span>
                            </button>

                        </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm max-h-[550px] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Log Out</DialogTitle>
                            <DialogDescription>
                            Are you sure?.
                            </DialogDescription>
                        </DialogHeader>
                        <div className='flex gap-5 w-fit ml-auto'>
                            <DialogClose>
                                Cancel
                            </DialogClose>
                            <Button type='button' variant={'destructive'} onClick={logOut} className='border-0'>Log out</Button>
        
                        </div>
                        </DialogContent>
                        
                    </Dialog>

            

        </section>

        <section className='sm:hidden'>
            <PanelRight onClick={() => setIsSidebarToggled(!isSidebarToggled)}/>
        </section>
    </div>
    
  )
}

export default AdminSidebar

// import { faDashboard, faPodcast } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from "next/navigation"
import {  Inbox, LayoutPanelTop, Lock, LucideIcon, NotebookPen, User} from 'lucide-react'
import React from "react"

type navLinksTypes = ({
    name: string;
    href: string;
    active: boolean;
    icon: LucideIcon;
    children: {
        name: string;
        href: string;
    }[];
} | {
    name: string;
    href: string;
    active: boolean;
    icon: LucideIcon;
    children?: undefined;
})[]

export const useAdminNavigation = () => {
    
    const pathname = usePathname()
    const navLinks:navLinksTypes = React.useMemo(() => [
        {
            name: "Dashboard",
            href: "/dashboard",
            active: pathname === '/admin',
            // icon: House
            icon: User,
            
        },
        {
            name: "Profile",
            href: "/profile",
            active: pathname.includes("/profile"),
            icon: User,
            
        },
        {
            name: "Post",
            href: "/post",
            active: pathname.includes("/post"),
            icon: LayoutPanelTop,
            
        },
        {
            name: "Categories",
            href: "/categories",
            active: pathname.includes("/categories"),
            icon: Inbox,
            
        },
        {
            name: "Privacy policy",
            href: "/privacy-policy",
            active: pathname.includes("/privacy-policy"),
            icon: Lock,
            
        },
        {
            name: "Terms & Conditions",
            href: "/terms-and-conditions",
            active: pathname.includes("/terms-and-conditions"),
            icon: NotebookPen,
            
        },
        {
            name: "Administrators",
            href: "/admins",
            active: pathname.includes("/admins"),
            icon: NotebookPen,
            // icon: UserRoundPen,
            
        },
        
        // {
        //     name: "Post",
        //     href: "/post",
        //     active: pathname.includes("/post"),
        //     icon: faPodcast,
        //     children: [
        //         {
        //             name: "All Posts",
        //             href: "/post/all-posts",
        //         },
        //         {
        //             name: "Add New",
        //             href: "/post/add-new",
        //         },
        //         {
        //             name: "Categories",
        //             href: "/post/categories",
        //         },
        //     ]
        // },
        
        
    ], [pathname])
    return navLinks
}


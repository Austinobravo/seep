// import { faDashboard, faPodcast } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from "next/navigation"
import {  PencilRuler, House, Inbox, Lock, LucideIcon, NotebookPen, PanelsTopLeft, User, UserRoundPen, Image, Contact, UserCircle} from 'lucide-react'
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

export const useAdminNavigation = (userRole: string) => {
    
    const pathname = usePathname()
    const navLinks:navLinksTypes = React.useMemo(() => {
        const links = 
        [
        {
            name: "Dashboard",
            href: "dashboard",
            active: pathname.includes("/dashboard"),
            icon: House,
            
        },
        {
            name: "Profile",
            href: "profile",
            active: pathname.includes("/profile"),
            icon: User,
            
        },
        {
            name: "News",
            href: "/news",
            active: pathname.includes("/news"),
            icon: PanelsTopLeft,
            
        },
        {
            name: "Categories",
            href: "category",
            active: pathname.includes("/category"),
            icon: Inbox,
            
        },
        {
            name: "Permissions",
            href: "permissions",
            active: pathname.includes("/permissions"),
            icon: Lock,
            
        },
        {
            name: "Others",
            href: "others",
            active: pathname.includes("/others"),
            icon: NotebookPen,
            
        },
        {
            name: "Gallery",
            href: "gallery",
            active: pathname.includes("/gallery"),
            icon: Image,
            
        },
        {
            name: "Team Members",
            href: "team-members",
            active: pathname.includes("/team-member"),
            icon: UserCircle,
            
        },
        {
            name: "Testimonials",
            href: "testimonials",
            active: pathname.includes("/testimonials"),
            icon: PencilRuler,
            
        },
        {
            name: "Contact",
            href: "contact",
            active: pathname.includes("/contact"),
            icon: Contact,
            
        },
    
        // {
        //     name: "Privacy policy",
        //     href: "privacy-policy",
        //     active: pathname.includes("/privacy-policy"),
        //     icon: Lock,
            
        // },
        // {
        //     name: "Terms & Conditions",
        //     href: "terms-and-conditions",
        //     active: pathname.includes("/terms-and-conditions"),
        //     icon: NotebookPen,
            
        // },
       
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
        
        
    ]

    if(userRole === "superuser"){
        links.push(
            {
                name: "Administrators",
                href: "admins",
                active: pathname.includes("/admins"),
                icon: UserRoundPen,
                
            },
            
        )
    }
    return links
}
, [pathname, userRole])
    return navLinks
}


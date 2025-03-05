"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }  
]

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8 font-bold text-2xl">
            {links.map((items, index) => {
                return (
                    <Link key={index} href={items.path}
                        className={`${items.path === pathname && 'text-cyan-500 border-b-2 border-cyan-500 '} 
                        capitalize hover:text-cyan-500 transition-all duration-300`}
                    >
                        {items.name}
                    </Link>
                )
            })}
        </nav>
    )
}
export default Navbar
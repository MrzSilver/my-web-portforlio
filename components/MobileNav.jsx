"use client"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <RiMenu4Fill className="text-[32px] text-cyan-500" />
            </SheetTrigger>
            <SheetContent>
                {/* logo */}
                <div className="text-white text-4xl mb-40 mt-32 text-center">
                    <h1 className="font-semibold font-pacifico">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 px-2">Silversv</span>
                    </h1>
                </div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8 text-white">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.path} 
                            className={`${link.path === pathname && 'text-cyan-500 border-b-2 border-cyan-500'} text-2xl capitalize hover:text-cyan-500 transition-all font-semibold`}
                            onClick={() => setOpen(false)} // ปิดเมนูเมื่อคลิกลิงก์
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;

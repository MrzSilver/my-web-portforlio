import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl-py-12 text-white">
            <div className="container mx-auto flex justify-between items-center px-2">
                {/* logo */}
                <Link href={"/"}>
                    <h1 className="font-pacifico text-4xl font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 px-2">Silversv</span>
                    </h1>
                </Link>

                {/* Navbar Desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href={"/contact"}>
                        <Button className="hover:cursor-pointer">Hire Me</Button>
                    </Link>
                </div>

                {/* Navbar Mobile */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}
export default Header
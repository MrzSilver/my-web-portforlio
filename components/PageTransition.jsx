"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const PageTransition = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { deley: 1, duration: 3, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen bg-black pointer-events-none top-0 fixed"

                />
                {children}
            </div>
        </AnimatePresence>
    )
}
export default PageTransition
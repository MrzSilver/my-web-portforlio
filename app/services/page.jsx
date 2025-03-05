'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const servies = [
  {
    num: '01',
    title: "Web devolopment",
    description: " ออกแบบและพัฒนาเว็บไซต์ ด้วย React, Tailwind CSS, HTML, Bootstrap, Node.js, Express.js, MySQL",
    href: ""
  },
  {
    num: '02',
    title: "Graphic design",
    description: "ออกแบบโลโก้, แบนเนอร์, Artwork สำหรับสื่อออนไลน์ ออกแบบป้ายโฆษณา, โปสเตอร์, นามบัตร สำหรับธุรกิจหรืออีเวนต์",
    href: ""
  },
  {
    num: '03',
    title: "Video editor",
    description: "ตัดต่อวิดีโอสำหรับ YouTube, TikTok, Facebook, ทำวิดีโอโฆษณาสั้น, วิดีโอโปรโมทสินค้า",
    href: ""
  },
  {
    num: '04',
    title: "Technical and support",
    description: "ให้คำแนะนำเกี่ยวกับการใช้ซอฟต์แวร์ออกแบบและตัดต่อ (Pr, Ps, Ai, Canva, CapCut) ช่วยแก้ปัญหาทางเทคนิคเกี่ยวกับเว็บไซต์และระบบออนไลน์",
    href: ""
  }
];


const Services = () => {
  return (
    <section className="text-white min-h-[80vh] flex flex-col  justify-center py-12 xl:py-0 font-JetBrains_Mono">
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
        >
          {servies.map((items, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col gap-6 group'>

                <div className='w-full flex items-center justify-between'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-cyan-500 hover:cursor-pointer transition-all duration-500'>
                    {items.num}
                  </div>
                  <Link
                    href={items.href}
                    className='w-[60px] h-[60px] bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex justify-center items-center group-hover:bg-cyan-500 transition-all duration-500 hover:-rotate-45'>
                    <BsArrowDownRight className='text-3xl text-white'/>
                  </Link>
                </div>

                <h1 className='text-[42px] font-bold leading-none text-white group-hover:text-cyan-500 transition-all duration-500'>{items.title}</h1>

                <p className='text-white/60'>{items.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
export default Services
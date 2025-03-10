'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Description } from '@radix-ui/react-dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+66)61-181-80XX"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mr.silversv@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "อ.เมือง จ.นครปฐม 73000"
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-4 text-white font-JetBrains_Mono"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-2xl'>
              <h3 className='text-4xl text-cyan-500 font-bold'>Let's work together</h3>
              <p className='text-white/60'>กรุณากรอกรายละเอียดของคุณ...</p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder='Firstname' />
                <Input type="lastname" placeholder='Lastname' />
                <Input type="email" placeholder='Email address' />
                <Input type="phone" placeholder='Phone number' />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>Graphic Design</SelectItem>
                    <SelectItem value='mst'>Video Editing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder='Type your message here...' />
              {/* button */}
              <Button size="md" className="max-w-40">Submit</Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-500 rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default Contact
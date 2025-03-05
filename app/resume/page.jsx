'use client'

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// about data
const about = {
  title: "About Me",
  description: "Web Developer & Video Editor",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Peeranat Janchote"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66)61-181-80xx"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thailand"
    },
    {
      fieldName: "Email",
      fieldValue: "mr.silversv@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Thai"
    }
  ]
}

// Experience  data
const experience = {
  icon: '/public/assets/resume/badge.svg',
  title: " My experience",
  description: "ผมเชี่ยวชาญในการพัฒนาเว็บไซต์โดยใช้ React, Tailwind CSS, HTML, Node.js, Express.js และ MySQL ผมสามารถสร้างเว็บที่สวยงาม ตอบโจทย์การใช้งาน และ มีประสิทธิภาพ",
  items: [
    {
      company: "Sichon Hospital",
      position: "IT support",
      duration: "2021 - 2022"
    },
    {
      company: "Watpradu subdistrict municipality",
      position: "Graphic Designer",
      duration: "2024 - 2025"
    },
    {
      company: "Web Design",
      position: "Freelance Web Devoloper",
      duration: "2022 - Present"
    },
  ]
}

//Education data
const education = {
  icon: '/public/assets/resume/cap.svg',
  title: " My education",
  description: "Education Record",
  items: [
    {
      institution: "Songklanakarin University",
      degree: "Computer Engineering",
      duration: "2018 - 2021"
    },
    {
      institution: "Online Course Platform",
      degree: "Front-End Developer",
      duration: "2022"
    },
    {
      institution: "Online Course by Canva",
      degree: "Video Editor & Graphic Designer",
      duration: "2023"
    },
  ]
}

// Skills data
const skills = {
  title: "My Skills",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, inventore.",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.JS"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0 text-white font-JetBrains_Mono px-4'
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='w-full min-h-[70vh]'>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold '>{experience.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{experience.description}</p>
              </div>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-12'>
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-cyan-500'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-cyan-500'></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold '>{education.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{education.description}</p>
              </div>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-12'>
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-cyan-500'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-cyan-500'></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillslist.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-cyan-500 transition-all duration-300 hover:cursor-pointer'>{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div>{item.name}</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-20 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return(
                      <li key={index} className='flex justify-between items-center xl:justify-start gap-4'>
                        <span className='text-white/60 text-xl'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
export default Resume
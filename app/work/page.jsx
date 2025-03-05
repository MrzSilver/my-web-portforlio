"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "project 1",
    description: "เครื่องมือที่ใช้",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://bakery-cy3kgqpmi-silversvs-projects.vercel.app/", // Replace with the actual live URL
    github: "https://github.com/MrzSilver/Bakery-web", // Replace with the actual GitHub URL
  },
  // {
  //   num: "02",
  //   category: "fullstack",
  //   title: "project 2",
  //   description: "รายละเอียดโปรเจค",
  //   stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
  //   image: "/assets/work/thumb2.png",
  //   live: "", // Replace with the actual live URL
  //   github: "", // Replace with the actual GitHub URL
  // },
  {
    num: "02",
    category: "front-end",
    title: "project 3",
    description: "เครื่องมือที่ใช้",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/work2.png",
    live: "https://nextcent-project-01.netlify.app/", // Replace with the actual live URL
    github: "https://github.com/MrzSilver/Nextcent", // Replace with the actual GitHub URL
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const swiperInstance = swiperRef.current.swiper;
        if (swiperInstance) {
          const nextIndex = (swiperInstance.activeIndex + 1) % projects.length;
          swiperInstance.slideTo(nextIndex);
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-500 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-cyan-500 text-xl font-JetBrains_Mono font-bold">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                {project.live ? (
                  <Link href={project.live} target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[78px] h-[78px] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[78px] h-[78px] rounded-full bg-gray-500/20 flex justify-center items-center">
                    <BsArrowUpRight className="text-white text-3xl " />
                  </div>
                )}
                {project.github ? (
                  <Link href={project.github} target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[78px] h-[78px] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-cyan-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[78px] h-[78px] rounded-full bg-gray-500/20 flex justify-center items-center">
                    <BsGithub className="text-white text-3xl " />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 text-white"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10"></div>
                    <div className="relative w-full h-full">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-cyan-500 hover:bg-cyan-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full hover:cursor-pointer"
                iconStyles='text-white text-xl'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

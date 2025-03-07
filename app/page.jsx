"use client"; 
import { IoMdDownload } from "react-icons/io";
import { Button } from '@/components/ui/button';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Cv.peeranat janchote.pdf";
    link.download = "Cv.peeranat janchote.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto text-white px-2">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">

          {/* ข้อความ */}
          <div className="text-center xl:text-left font-JetBrains_Mono order-2 xl:order-none">
            <span className="text-2xl">Fullstack Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 px-2">Silversv</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hi, I'm Peeranat Janchote, a passionate web developer and video editor. 
              I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <IoMdDownload className="ml-2 text-xl" />
              </Button>

              {/* social */}
              <div className="mb-8 xl:mb-0">
                <Social 
                  containarStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-cyan-500 rounded-full flex items-center justify-center text-md text-white 
                  hover:bg-cyan-500 hover:transition-all duration-500 hover:text-primary"
                />
              </div>
            </div>
          </div>

          {/* รูปภาพ */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

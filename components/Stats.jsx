'use client'
import CountUp from "react-countup"

const stats = [
    {
        num: 3,
        text: "Year of experience"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 200,
        text: "Code commits"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto text-white">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none" >
                {stats.map((items, index)=>{
                    return(
                        <div key={index} className="flex flex-1 gap-4 justify-center items-center xl:justify-start">
                            <CountUp end={items.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold "/>
                            <p className={`${items.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{items.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
export default Stats
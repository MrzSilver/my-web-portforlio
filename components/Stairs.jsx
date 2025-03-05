import { motion ,animate, reverseEasing } from "framer-motion"

const reverseIndex = (index) => {
    return 5 - index;
  };

const stairAnimation ={
    initial: {
        top: "0%",
    },
    animate : {
        top: "100%",
    },
    exit: {
        top:["100%","0%"]
    },
};

const Stairs = () => {
  return (
    <>
      {/* ทำการเรนเดอร์ การเคลื่อนไหว 6 ตัวตามลำดับขั้น แต่ละตัวมีแอนิเมชันเดียวกัน และหน่วงเวลาตามลำดับเพื่อให้เกิดเอฟเฟกต์เคลื่อนไหวแบบต่อเนื่องกันเป็นขั้นบันได */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }} className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}
export default Stairs

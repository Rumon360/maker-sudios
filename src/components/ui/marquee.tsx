import { motion } from "framer-motion";

function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      className="h-screen w-screen flex justify-center items-center fixed z-20 inset-0 bg-pink-200"
    >
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <h1
            key={index}
            className="text-[7.5vw] md:text-[6.5vw] animate-marquee pr-12 leading-none tracking-tighter text-black"
          >
            ExtraCredit
          </h1>
        ))}
      </div>
    </motion.div>
  );
}

export default Marquee;

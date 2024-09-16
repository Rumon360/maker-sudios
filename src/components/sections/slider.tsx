import { useRef } from "react";
import AnimationText from "../ui/animation-text";
import { motion, useScroll, useTransform } from "framer-motion";
import { sliderItems } from "../../utils/data";
import MovingBall from "../ui/movingball";

const SliderSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const sliderX = useTransform(scrollYProgress, [0, 1], ["0%", "-210%"]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] relative w-full mt-10 md:mt-36"
    >
      <div className="pb-0 md:pb-10 lg:pb-20">
        <div className="w-full relative h-[2px] overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -400px 0px" }}
            className="absolute w-full h-full origin-left bg-white"
          ></motion.div>
        </div>
      </div>
      <div className="h-screen sticky top-0 w-full overflow-hidden">
        <div className="h-full flex flex-col justify-between">
          <div className="max-w-[95%] w-full flex items-center justify-between mx-auto">
            <div className="hidden md:block w-full">
              <AnimationText className="text-[5vw] font-medium  leading-[1.1]">
                Beyond logos &
              </AnimationText>
              <AnimationText className="text-[5vw] font-medium leading-[1.1]">
                creative websites
              </AnimationText>
            </div>
            <AnimationText className="md:hidden text-4xl w-[80vw] font-medium leading-[1.1]">
              Beyond logos & creative websites
            </AnimationText>
            <MovingBall
              text="Start a Project"
              className="hidden md:flex text-xl size-[200px] bg-pink-200"
            />
          </div>
          <motion.div
            style={{ x: sliderX }}
            className="ml-[2.5%] transition-all ease-linear py-0 md:pt-6"
          >
            <div className="flex text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium uppercase">
              {sliderItems.map((item, indx) => (
                <motion.div
                  key={indx}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "0% -40% 0% 0%" }}
                  className="w-[80%] md:w-[70%] opacity-30 flex flex-col gap-4 flex-shrink-0"
                >
                  <span className="text-sm border px-6 rounded-full w-fit py-1">
                    {String(indx + 1).padStart(3, "0")}
                  </span>
                  <h3 className="max-w-2xl w-[90%] sm:w-[95%] md:w-[100%]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
            <div className="w-[300vw] my-10">
              <div className="w-full bg-gray-400 h-[2px] relative">
                <motion.div
                  style={{ scaleX: progress }}
                  className="bg-white w-full transition ease-linear h-full absolute inset-0 origin-left"
                ></motion.div>
              </div>
            </div>
            <div className="flex">
              {sliderItems.map((item, indx) => (
                <motion.div
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "0% -40% 0% 0%" }}
                  key={indx}
                  className="last:w-[70%] text-base lg:text-2xl w-[80%] md:w-[70%] opacity-30 flex flex-shrink-0"
                >
                  <p className="max-w-lg w-[95%] md:w-[100%]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="w-full h-[2px] mt-10 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;

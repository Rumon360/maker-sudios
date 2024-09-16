import { useRef, useState } from "react";
import AnimationText from "./ui/animation-text";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMousePositionContext } from "../hooks/useMousePositionContext";

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothOptions = { damping: 20, stiffness: 200, mass: 0.5 };
  const moveLeft = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
  const moveRight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ["0px", "6px"]);
  const moveLeftSpring = useSpring(moveLeft, smoothOptions);
  const moveRightSpring = useSpring(moveRight, smoothOptions);
  const blurValue = useMotionTemplate`blur(${blur})`;
  const videoPosition = useTransform(scrollYProgress, [0, 0.8], ["50%", "0%"]);
  const videoPositionSpring = useSpring(videoPosition, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });
  const videoScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1]);
  const videoScaleSpring = useSpring(videoScale, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });

  const { cursorWidth, cursorHeight, setContent } = useMousePositionContext();

  const [videoSound, setVideoSound] = useState(false);

  const handleClick = () => {
    setVideoSound((prevState) => {
      const newSoundState = !prevState;
      setContent(
        <div className="text-base flex justify-center h-full w-full items-center">
          <p className="text-white font-medium">
            Sound {newSoundState ? "Off" : "On"}
          </p>
        </div>
      );
      return newSoundState;
    });
  };

  return (
    <div
      ref={containerRef}
      className="h-[200vh] md:h-[250vh] w-full relative max-w-full md:max-w-[95%] mx-auto"
    >
      <div className="md:h-[calc(100vh-4.5rem)] pt-16 md:pt-0 sticky top-0 w-full flex justify-center items-center">
        <div className="space-y-8 md:space-y-16">
          <div>
            <AnimationText
              move={moveLeftSpring}
              opacity={opacity}
              blur={blurValue}
              delay={0.5}
              className="text-[9.5vw] font-medium md:text-[6.5vw] leading-[1.1] text-center"
            >
              A design studio made
            </AnimationText>
            <AnimationText
              delay={0.6}
              move={moveRightSpring}
              opacity={opacity}
              blur={blurValue}
              className="text-[9.5vw] font-medium md:text-[6.5vw] leading-[1.1] text-center"
            >
              to elevate your brand
            </AnimationText>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ opacity, filter: blurValue }}
              transition={{ delay: 0.9 }}
              className="max-w-sm px-1 md:max-w-md lg:max-w-lg mx-auto text-base md:text-lg lg:text-xl text-center"
            >
              We build brand identities, creative websites, and visual
              narratives that showcase the full extent of your potential. Based
              in Washington DC, working with clients world-wide.
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        style={{ y: videoPositionSpring }}
        className="sticky top-0 z-20 flex justify-center items-center w-full h-screen"
      >
        <motion.div
          onMouseEnter={() => {
            cursorHeight.set(30);
            cursorWidth.set(100);
            setContent(
              <div className="text-base flex justify-center h-full w-full items-center">
                <p className="text-white font-medium">Sound On</p>
              </div>
            );
          }}
          onMouseLeave={() => {
            cursorWidth.set(16);
            cursorHeight.set(16);
            setContent(null);
          }}
          onClick={handleClick}
          style={{ scale: videoScaleSpring }}
          className="w-[1280px] origin-center h-full relative"
        >
          <video
            src="/hero.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted={!videoSound}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;

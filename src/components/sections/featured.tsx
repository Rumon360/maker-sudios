import { motion } from "framer-motion";
import { useMousePositionContext } from "../../hooks/useMousePositionContext";

function Featured() {
  const { cursorWidth, cursorHeight, setContent } = useMousePositionContext();

  const handleMouseEnterHoverCursor = () => {
    cursorHeight.set(30);
    cursorWidth.set(80);
    setContent(
      <div className="text-base flex justify-center h-full w-full items-center">
        <p className="text-white font-medium">View</p>
      </div>
    );
  };

  const handleMouseLeaveHoverCursor = () => {
    cursorWidth.set(16);
    cursorHeight.set(16);
    setContent(null);
  };

  return (
    <div className="pt-10 md:pt-20 lg:pt-36 border-t border-black w-full ">
      <div className="w-full">
        <div className="max-w-[95%] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl max-w-xs lg:max-w-sm">
            Featured <span className="block">work</span>
          </h2>
        </div>
        <div className="md:-mt-16 w-full">
          <div className="flex gap-4 md:gap-0 w-full justify-between">
            <div className="pt-[280px] ml-[2.5%]">
              <div className="w-[85%] h-[245px] lg:w-[460px] lg:h-[580px] overflow-hidden">
                <motion.div
                  style={{
                    clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
                  }}
                  whileInView={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                  viewport={{ margin: "0% 0% 0% 0%", once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full group h-full relative"
                  onMouseEnter={handleMouseEnterHoverCursor}
                  onMouseLeave={handleMouseLeaveHoverCursor}
                >
                  <img
                    src="/imgs/blue-car.webp"
                    className="object-cover hover:blur-sm hover:scale-110 transition ease-in-out duration-500 h-full w-full"
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-medium">MGNY</h3>
                <p className="text-base">
                  Brand Strategy, Website, Creative Direction, Illustration
                </p>
              </div>
            </div>
            <div className="mr-[1.5rem] md:mr-0">
              <div className="w-[100%] h-[245px] lg:w-[460px] lg:h-[580px] relative overflow-hidden">
                <video
                  src="/video-one.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-medium">MadeGood</h3>
                <p className="text-base">
                  Brand Strategy, Website project-image
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-20">
          <div className="flex gap-4 md:gap-0 w-full justify-between">
            <div className="pt-[280px] ml-[2.5%]">
              <div className="w-[100%] h-[245px] lg:w-[460px] lg:h-[580px] relative overflow-hidden">
                <video
                  src="/video-two.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-medium">MadeGood</h3>
                <p className="text-base">
                  Brand Strategy, Website project-image
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mr-[1.5rem] md:mr-0 max-w-[85%] md:max-w-full ml-auto">
                <div className="w-[100%] h-[245px] lg:w-[460px] lg:h-[580px] overflow-hidden">
                  <motion.div
                    style={{
                      clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
                    }}
                    whileInView={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                    viewport={{ margin: "0% 0% 0% 0%", once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <img
                      src="/imgs/finturity.webp"
                      className="object-cover hover:blur-sm hover:scale-110 transition ease-in-out duration-500 h-full w-full"
                      alt=""
                    />
                  </motion.div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-medium">Finturity</h3>
                  <p className="text-base">
                    Brand Strategy, Brand Identity, Website, Graphic Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

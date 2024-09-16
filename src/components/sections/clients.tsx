import { clients } from "../../utils/data";
import { useMotionValue, motion, useSpring } from "framer-motion";
import { useMousePositionContext } from "../../hooks/useMousePositionContext";
import AnimationText from "../ui/animation-text";
import { useRef, useState } from "react";

function ClientsSection() {
  const [currentClient, setCurrentClient] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const positionBox = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const opacity = useMotionValue(0);

  const { cursorHeight, cursorWidth } = useMousePositionContext();

  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };

  const smoothPositionBox = {
    x: useSpring(positionBox.x, smoothOptions),
    y: useSpring(positionBox.y, smoothOptions),
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    if (boxRef.current) {
      const { width: boxWidth, height: boxHeight } =
        boxRef.current.getBoundingClientRect();

      const x = clientX - boxWidth / 2;
      const y = clientY - boxHeight / 2;

      cursorHeight.set(0);
      cursorWidth.set(0);
      opacity.set(1);
      positionBox.x.set(x);
      positionBox.y.set(y);
    }
  };

  const handleMouseLeave = () => {
    cursorHeight.set(16);
    cursorWidth.set(16);
    opacity.set(0);
  };

  return (
    <div className="py-20 lg:py-36 w-full  bg-[#0f0d0d]">
      <div className="">
        <div className="max-w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <AnimationText className="text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
              <span className="text-purple-300">Mentions</span> Clients
            </AnimationText>
            <button className="group px-4 md:px-6 py-1 rounded-full border border-white overflow-hidden relative bg-transparent text-xs md:text-sm capitalize flex justify-center items-center">
              <span className="group-hover:text-black z-30 transition ease-in-out duration-300">
                View clients
              </span>
              <div className="absolute rounded-full opacity-0 group-hover:opacity-100 duration-300 group-hover:scale-100 transition ease-in-out w-full h-full origin-center scale-50 z-10 bg-white"></div>
            </button>
          </div>
          <div
            ref={containerRef}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="text-xl md:text-2xl relative capitalize border-t mt-10  font-medium"
          >
            {clients.map((client, index) => (
              <div
                onMouseEnter={() => {
                  setCurrentClient(index);
                }}
                key={client.name}
                className="flex justify-between text-zinc-600 hover:text-white transition ease-in-out items-center w-full py-6 border-b"
              >
                <h4>{client.name}</h4>
                <div className="text-base md:text-lg flex items-center gap-10">
                  <p>{client.type}</p>
                  <h6>{client.year}</h6>
                </div>
              </div>
            ))}
            <motion.div
              style={{
                left: smoothPositionBox.x,
                top: smoothPositionBox.y,
                opacity: opacity,
              }}
              className="hidden md:block fixed z-50 pointer-events-none transition-opacity ease-in-out duration-500"
              ref={boxRef}
            >
              <div className="relative w-[450px] h-[350px] overflow-hidden">
                {clients.map((client, index) => (
                  <motion.img
                    key={client.name}
                    src={client.image}
                    style={{ opacity: index === currentClient ? 1 : 0 }}
                    className="w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ease-in-out"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;

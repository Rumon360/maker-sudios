import { useState } from "react";
import { useMousePositionContext } from "../../hooks/useMousePositionContext";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { tabs } from "../../utils/data";

function Information() {
  const { cursorWidth, cursorHeight } = useMousePositionContext();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full pb-20 md:pb-36">
      <div className="max-w-[95%] mx-auto">
        <span className="text-base block mb-2 font-normal capitalize md:hidden">
          Capabilities
        </span>
        <div className="flex gap-6 items-end max-w-4xl">
          <h3 className="text-2xl md:text-5xl uppercase leading-[1.2] font-medium">
            <span className="hidden md:block text-xl mb-2 font-normal capitalize mr-6">
              Capabilities
            </span>{" "}
            At Duo Studio, we have a passion for crafting personalized
            solutions, including:
          </h3>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <div className="flex pt-4 xl:-mt-6 justify-between gap-10 items-end w-full">
          <div
            onMouseEnter={() => {
              cursorHeight.set(40);
              cursorWidth.set(40);
            }}
            onMouseLeave={() => {
              cursorWidth.set(16);
              cursorHeight.set(16);
            }}
            className="w-1/2 max-w-[calc(min(1000px,45%))] ml-auto"
          >
            {tabs.map((tab, index) => (
              <div
                onMouseEnter={() => setSelectedImage(index)}
                key={index}
                className={cn("border-t group relative py-6 border-black", {
                  "border-b": index === tabs.length - 1,
                })}
              >
                <h3 className="text-2xl font-medium">{tab.title}</h3>
                <p className="text-base max-w-md">{tab.desc}</p>
                <button className="hidden group-hover:block absolute bottom-4 border border-black px-4 py-1 text-sm hover:bg-black hover:text-white transition ease-in-out duration-300 rounded-full right-2">
                  Expand
                </button>
              </div>
            ))}
          </div>
          <div className="relative w-1/2 h-[600px] overflow-hidden">
            {tabs.map((tab, index) => {
              const opacity = selectedImage === index ? 1 : 0;
              return (
                <motion.div
                  key={index}
                  style={{
                    backgroundImage: `url(${tab.image})`,
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity,
                  }}
                  className="absolute top-0 transition ease-in-out duration-700 left-0 w-full h-full"
                />
              );
            })}
          </div>
        </div>
        <div className="pt-4 max-w-[95%] mx-auto">
          <button className="px-6 capitalize font-medium py-1 bg-purple-300 rounded-full text-base">
            learn more
          </button>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-1 gap-6 max-w-[95%] mx-auto pt-10">
        {tabs.map((tab, index) => (
          <div key={index} className="space-y-4">
            <img
              src={tab.image}
              className="w-full h-[300px] object-cover"
              alt=""
            />
            <h3 className="text-2xl font-medium">{tab.title}</h3>
            <p className="text-lg max-w-md">{tab.desc}</p>
            <button className="border border-black px-4 py-1 text-base rounded-full">
              Expand
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;

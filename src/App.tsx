import Header from "./components/header";
import Hero from "./components/hero";
import Cursor from "./components/ui/cursor";
import Information from "./components/sections/information";
import { useTheme } from "./hooks/useTheme";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import Featured from "./components/sections/featured";
import SliderSection from "./components/sections/slider";
import ClientsSection from "./components/sections/clients";
import Footer from "./components/sections/footer";
import Marquee from "./components/ui/marquee";
import Loader from "./components/ui/loader";

function App() {
  const { setTheme } = useTheme();
  const ref = useRef(null);
  const footerRef = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% 0% 0%" });
  const footerIsInView = useInView(footerRef, { margin: "0% 0% -96% 0%" });

  const [showCredit, setShowCredit] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (footerIsInView) {
      setTheme("light");
    } else if (isInView) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [footerIsInView, isInView, setTheme]);

  useEffect(() => {
    const handleMediaLoad = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      const mediaPromises: Promise<void>[] = [
        ...images.map((img) => {
          return new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.addEventListener("load", () => resolve());
              img.addEventListener("error", () => resolve());
            }
          });
        }),
        ...videos.map((video) => {
          return new Promise<void>((resolve) => {
            if (video.readyState === 4) {
              resolve();
            } else {
              video.addEventListener("loadeddata", () => resolve());
              video.addEventListener("error", () => resolve());
            }
          });
        }),
      ];

      Promise.all(mediaPromises).then(() => {
        setIsLoading(false);
      });
    };

    handleMediaLoad();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="w-full h-full px-1">
          <Header setShowCredit={setShowCredit} />
          <Hero />
          <div ref={ref} className="h-full w-full mt-20 md:mt-36 relative">
            <Information />
            <Featured />
          </div>
          <SliderSection />
          <ClientsSection />
          <div ref={footerRef}>
            <Footer />
          </div>
          <AnimatePresence>{showCredit && <Marquee />}</AnimatePresence>
          <Cursor />
        </div>
      )}
    </>
  );
}

export default App;

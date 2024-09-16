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
import AnimationText from "./components/ui/animation-text";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setTheme } = useTheme();
  const ref = useRef(null);
  const footerRef = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% 0% 0%" });
  const footerIsInView = useInView(footerRef, { margin: "0% 0% -96% 0%" });

  const [showCredit, setShowCredit] = useState(false);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  });

  useEffect(() => {
    if (footerIsInView) {
      setTheme("light");
    } else if (isInView) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [footerIsInView, isInView, setTheme]);

  if (isLoading)
    return (
      <div className="h-screen mix-blend-difference flex justify-center items-center uppercase w-full text-6xl font-medium">
        <AnimationText>Loading...</AnimationText>
      </div>
    );

  return (
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
  );
}

export default App;

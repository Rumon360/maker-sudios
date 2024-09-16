import { useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

function useMousePosition() {
  const cursorWidth = useMotionValue(16);
  const cursorHeight = useMotionValue(16);
  const [content, setContent] = useState<ReactNode | null>(null);

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothOptions),
    y: useSpring(mousePosition.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mousePosition.x.set(clientX - cursorWidth.get() / 2);
      mousePosition.y.set(clientY - cursorHeight.get() / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mousePosition.x, mousePosition.y, cursorWidth, cursorHeight]);

  return { smoothMouse, cursorWidth, cursorHeight, content, setContent };
}

export default useMousePosition;

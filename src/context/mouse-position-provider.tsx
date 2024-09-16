import React, { createContext, ReactNode } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MotionValue } from "framer-motion";

interface MousePositionContextType {
  smoothMouse: { x: MotionValue<number>; y: MotionValue<number> };
  content: null | ReactNode;
  setContent: React.Dispatch<React.SetStateAction<ReactNode | null>>;
  cursorWidth: MotionValue<number>;
  cursorHeight: MotionValue<number>;
}

export const MousePositionContext = createContext<
  MousePositionContextType | undefined
>(undefined);

export const MousePositionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const mouseOptions = useMousePosition();

  return (
    <MousePositionContext.Provider value={mouseOptions}>
      {children}
    </MousePositionContext.Provider>
  );
};

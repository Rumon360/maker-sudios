import { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { motion, MotionValue } from "framer-motion";

type Props = {
  className?: string;
  children: ReactNode;
  delay?: number;
  move?: MotionValue<number>;
  opacity?: MotionValue<number>;
  blur?: MotionValue<string>;
};

function AnimationText({ children, className, delay = 0, blur, move }: Props) {
  return (
    <motion.div
      style={{
        x: move,
        filter: blur,
      }}
    >
      <motion.div className={cn("overflow-hidden")}>
        <motion.h1
          initial={{ rotate: 2, y: "50%", opacity: 0 }}
          animate={{ rotate: 0, y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay }}
          className={cn("", className)}
        >
          {children}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default AnimationText;

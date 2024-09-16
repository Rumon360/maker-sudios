import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";

import React from "react";

type Props = {
  text: string;
  className?: string;
};

function MovingBall({ text, className }: Props) {
  const position = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const positionText = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothPosition = {
    x: useSpring(position.x),
    y: useSpring(position.y),
  };

  const smoothPositionText = {
    x: useSpring(positionText.x),
    y: useSpring(positionText.y),
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceFromCenterX = clientX - centerX;
    const distanceFromCenterY = clientY - centerY;

    const maxDistanceX = rect.width / 2;
    const maxDistanceY = rect.height / 2;

    const normalizedX = distanceFromCenterX / maxDistanceX;
    const normalizedY = distanceFromCenterY / maxDistanceY;

    const valueX = Math.max(-1, Math.min(1, normalizedX));
    const valueY = Math.max(-1, Math.min(1, normalizedY));

    position.x.set(valueX * 60);
    position.y.set(valueY * 60);

    positionText.x.set(valueX * 8);
    positionText.y.set(valueY * 8);
  };

  const handleMouseLeave = () => {
    position.x.set(0);
    position.y.set(0);

    positionText.x.set(0);
    positionText.y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer w-[400px] h-[300px] flex justify-center items-center"
    >
      <motion.div
        style={{ x: smoothPosition.x, y: position.y }}
        className={cn(
          "size-[170px] transition-all ease-linear flex justify-center items-center text-black rounded-full",
          className
        )}
      >
        <motion.p style={{ x: smoothPositionText.x, y: smoothPositionText.y }}>
          {text}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default MovingBall;

import { AnimatePresence, motion } from "framer-motion";
import { useMousePositionContext } from "../../hooks/useMousePositionContext";

function Cursor() {
  const { smoothMouse, cursorHeight, cursorWidth, content } =
    useMousePositionContext();

  return (
    <motion.div
      id="cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: cursorWidth,
        height: cursorHeight,
      }}
      className="hidden md:block fixed z-[999] transition-[width,height] ease-in-out duration-300 pointer-events-none rounded-full bg-purple-200 mix-blend-difference"
    >
      <AnimatePresence>
        {content !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full relative origin-center"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Cursor;

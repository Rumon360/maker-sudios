import { useMousePositionContext } from "../../hooks/useMousePositionContext";

function Logo() {
  const { cursorHeight, cursorWidth } = useMousePositionContext();
  return (
    <span
      onMouseEnter={() => {
        cursorHeight.set(40);
        cursorWidth.set(40);
      }}
      onMouseLeave={() => {
        cursorHeight.set(16);
        cursorWidth.set(16);
      }}
      className="uppercase text-2xl tracking-tighter font-semibold"
    >
      Maker
    </span>
  );
}

export default Logo;

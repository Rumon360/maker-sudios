import { useMousePositionContext } from "../../hooks/useMousePositionContext";

function Logo() {
  const { cursorSize } = useMousePositionContext();
  return (
    <span
      onMouseEnter={() => cursorSize.set(40)}
      onMouseLeave={() => cursorSize.set(16)}
      className="uppercase text-2xl tracking-tighter font-semibold"
    >
      Maker
    </span>
  );
}

export default Logo;

import { useMousePositionContext } from "../../hooks/useMousePositionContext";

function Menu({
  setShowCredit,
}: {
  setShowCredit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cursorWidth, cursorHeight } = useMousePositionContext();

  const handleMouseEnter = () => {
    cursorWidth.set(0);
    cursorHeight.set(0);
    setShowCredit(true);
  };
  const handleMouseLeave = () => {
    cursorWidth.set(16);
    cursorHeight.set(16);
    setShowCredit(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer size-4 bg-white rounded-full"
      >
        <div className="absolute group-hover:translate-x-[-100%] transition ease-in-out top-0 size-4 bg-white rounded-full"></div>
      </div>
    </>
  );
}

export default Menu;

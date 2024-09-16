import { useMousePositionContext } from "../hooks/useMousePositionContext";
import { cn } from "../utils/cn";
import Logo from "./ui/logo";
import Menu from "./ui/menu";

const nav = [
  {
    id: 1,
    title: "Home",
    active: true,
  },
  {
    id: 2,
    title: "Work",
    active: false,
  },
  {
    id: 3,
    title: "Services",
    active: false,
  },
  {
    id: 4,
    title: "Studio",
    active: false,
  },
  {
    id: 5,
    title: "Journal",
    active: false,
  },
  {
    id: 6,
    title: "Contact",
    active: false,
  },
];

function Header({
  setShowCredit,
}: {
  setShowCredit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cursorHeight, cursorWidth } = useMousePositionContext();
  return (
    <header className="max-w-[95%] mx-auto w-full z-50 text-white mix-blend-difference sticky top-0 h-20 flex justify-between items-center py-4">
      <div>
        <Logo />
      </div>
      <nav className="hidden lg:block">
        <ul
          onMouseEnter={() => {
            cursorHeight.set(40);
            cursorWidth.set(40);
          }}
          onMouseLeave={() => {
            cursorWidth.set(16);
            cursorHeight.set(16);
          }}
          className="flex gap-2 tracking-tight"
        >
          {nav.map((navLink, index) => (
            <li key={navLink.id} className="">
              <a
                href="#"
                className={cn("relative font-medium text-base", {
                  "after:absolute after:left-0 after:h-[0.8px] after:bg-primary after:w-full after:bottom-0":
                    navLink.active,
                })}
              >
                {navLink.title}
                {index !== nav.length - 1 && <span>,</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Menu setShowCredit={setShowCredit} />
      </div>
    </header>
  );
}

export default Header;

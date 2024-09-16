import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";
import { MousePositionProvider } from "../context/mouse-position-provider";
import { ThemeProvider } from "../context/theme-provider";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="h-full w-full relative">
        <ReactLenis root>
          <MousePositionProvider>{children}</MousePositionProvider>
        </ReactLenis>
      </div>
    </ThemeProvider>
  );
}

export default Layout;

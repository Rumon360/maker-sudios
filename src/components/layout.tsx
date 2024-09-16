import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect, useState } from "react";
import { MousePositionProvider } from "../context/mouse-position-provider";
import { ThemeProvider } from "../context/theme-provider";
import Loader from "./ui/loader";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleMediaLoad = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      const mediaPromises: Promise<void>[] = [
        ...images.map((img) => {
          return new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.addEventListener("load", () => resolve());
              img.addEventListener("error", () => resolve());
            }
          });
        }),
        ...videos.map((video) => {
          return new Promise<void>((resolve) => {
            if (video.readyState === 4) {
              resolve();
            } else {
              video.addEventListener("loadeddata", () => resolve());
              video.addEventListener("error", () => resolve());
            }
          });
        }),
      ];

      Promise.all(mediaPromises).then(() => {
        setIsLoading(false);
      });
    };
    handleMediaLoad();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="h-full w-full relative">
          <ReactLenis root>
            <MousePositionProvider>{children}</MousePositionProvider>
          </ReactLenis>
        </div>
      )}
    </ThemeProvider>
  );
}

export default Layout;

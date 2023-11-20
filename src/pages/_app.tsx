import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { opensaucesans } from "~/constants/fonts";
import useIsomorphic from "~/hooks/use-isomorphic";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  const [isCursor, setIsCursor] = useState(false);

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  useIsomorphic(() => {
    setIsCursor(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.5,
      normalizeWheel: true,
      smoothTouch: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.5,
      touchMultiplier: 0.5,
      wheelMultiplier: 0.5,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className={opensaucesans.className}>
      <Component {...pageProps} />
      {isCursor && (
        <Cursor
          isGelly={true}
          cursorSize={0}
          cursorBackgrounColor="#111111"
          cursorInnerColor="#f0cca8"
        />
      )}
    </div>
  );
};

export default App;

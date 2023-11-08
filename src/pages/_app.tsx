import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import type { AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";
import { opensaucesans } from "~/constants/fonts";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  gsap.registerPlugin(ScrollToPlugin);

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
    </div>
  );
};

export default App;

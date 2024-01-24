import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useState } from "react";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { Footer, Header } from "~/components";
import { linkdata, metadata, opensaucesans, title } from "~/constants";
import { useIsomorphic } from "~/hooks";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  const [isCursor, setIsCursor] = useState<boolean>();

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  useIsomorphic(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    setIsCursor(true);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        {metadata.map((meta) => (
          <meta key={meta.name ?? meta.property} {...meta} />
        ))}
        {linkdata.map((link) => (
          <link key={link.rel} {...link} />
        ))}
      </Head>
      <div className={opensaucesans.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        {isCursor && (
          <Cursor
            isGelly={true}
            cursorSize={0}
            cursorBackgrounColor="#111111"
            cursorInnerColor="#f0cca8"
          />
        )}
      </div>
    </>
  );
};

export default App;

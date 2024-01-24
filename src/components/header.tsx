import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ElementRef } from "react";
import { Button } from "~/components/ui";
import { useIsomorphic } from "~/hooks";
import { fadeOut, scrollTo } from "~/utils";

const Header = () => {
  const containerRef = useRef<ElementRef<"header">>(null);

  const currentYear = new Date().getFullYear();
  const scrollToContact = () => scrollTo("#contact");

  useIsomorphic(() => {
    const ctx = gsap.context(() => {
      fadeOut(containerRef.current, 0.5, -100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={containerRef}
      id="header"
      className="container flex justify-between py-5 md:items-center">
      <div className="h-fit w-fit">
        <Link href="/">
          <Image
            src="/fiquell-512x512.png"
            alt="Fiquell Logo"
            width={55}
            height={55}
          />
        </Link>
      </div>
      <div className="text-xs font-medium md:text-[10px] lg:text-xs">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10 lg:gap-16">
          <div className="md:w-48 lg:w-[32rem]">
            <p>FRONTEND DEVELOPER</p>
            <p>FOLIO / 2021 - {currentYear}</p>
          </div>
          <div>
            <p>AVAILABLE FOR FREELANCE</p>
            <p>WORK FROM OCTOBER 2023</p>
          </div>
          <Button onClick={scrollToContact} className="w-fit">
            SAY HELLO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

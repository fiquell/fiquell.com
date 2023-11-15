import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Button from "~/components/ui/button";
import anima from "~/utils/anima";
import goto from "~/utils/goto";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      anima(headerRef.current, 0.3, -100);
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      id="header"
      className="container flex justify-between py-5 md:items-center">
      <div className="h-fit w-fit">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={55} height={55} />
        </Link>
      </div>
      <div className="text-xs font-medium md:text-[10px] lg:text-xs">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10 lg:gap-16">
          <div className="md:w-48 lg:w-[44rem]">
            <p>FRONTEND DEVELOPER</p>
            <p>FOLIO / 2021 - {new Date().getFullYear()}</p>
          </div>
          <div>
            <p>AVAILABLE FOR FREELANCE</p>
            <p>WORK FROM OCTOBER 2023</p>
          </div>
          <Button onClick={() => goto("contact")} className="w-fit">
            SAY HELLO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

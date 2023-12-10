import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui";
import { useIsomorphic } from "~/hooks";
import { scrollTo } from "~/utils";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  const scrollToHeader = () => scrollTo("#header");
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  };

  useIsomorphic(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="container flex flex-col items-center gap-5 py-5 md:flex-row md:justify-between">
      <div className="flex items-center gap-5 md:text-xs lg:text-base">
        <p>{currentTime}</p>
        <p>LOMBOK, ID</p>
      </div>
      <div className="flex items-center gap-2">
        <Link href="https://twitter.com/_fiquell">
          <Button>TWITTER</Button>
        </Link>
        <Link href="https://github.com/fiquell">
          <Button>GITHUB</Button>
        </Link>
        <Button onClick={scrollToHeader}>TOP</Button>
      </div>
    </footer>
  );
};

export default Footer;

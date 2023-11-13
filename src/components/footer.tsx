import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "~/components/ui/button";
import goto from "~/utils/goto";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="container flex items-center justify-between py-5">
      <div className="flex items-center gap-2 md:text-xs lg:text-base">
        <p>{currentTime}</p>
        <p className="text-accent">LOMBOK, ID</p>
      </div>
      <div className="flex items-center gap-2">
        <Link href="https://github.com/fiquell">
          <Button>GITHUB</Button>
        </Link>
        <Button onClick={() => goto("header")}>TOP</Button>
      </div>
    </footer>
  );
};

export default Footer;

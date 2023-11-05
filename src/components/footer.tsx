import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "~/components/ui/button";

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
    <footer className="container mt-8 flex items-center justify-between py-8">
      <div className="flex items-center gap-4 md:text-xs lg:text-base">
        <p className="text-accent">LOMBOK, ID</p>
        <p>{currentTime}</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/fiquell">
          <Button>GITHUB</Button>
        </Link>
        <Link href="/">
          <Button>TOP</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

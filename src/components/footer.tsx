import Link from "next/link";
import { useEffect, useState } from "react";

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
        <Link
          href="https://github.com/fiquell"
          className="rounded-full border-2 border-accent px-3 py-1.5 text-sm font-medium md:text-xs lg:text-sm">
          <p>GITHUB</p>
        </Link>
        <Link
          href="/"
          className="rounded-full border-2 border-accent px-3 py-1.5 text-sm font-medium md:text-xs lg:text-sm">
          <p>TOP</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

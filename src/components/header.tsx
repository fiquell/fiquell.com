import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <header className="container mt-8 flex justify-between md:mt-5 md:items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={80} height={32} />
      </Link>
      <div className="text-xs font-medium text-accent">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10 lg:gap-16">
          <div className="md:w-48 lg:w-[44rem]">
            <p>FRONTEND DEVELOPER</p>
            <p>FOLIO / 2020 - {currentYear}</p>
          </div>
          <div>
            <p>AVAILABLE FOR FREELANCE</p>
            <p>WORK FROM OCTOBER 2023</p>
          </div>
          <Link
            href="/"
            className="w-fit rounded-full border-2 border-accent px-5 py-2 text-sm text-text">
            SAY HELLO
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

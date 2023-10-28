import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container flex items-center justify-between py-2">
      <p className="md:text-xs lg:text-base">
        &copy; {currentYear} Fiquell. All Rights Reserved.
      </p>
      <Link
        href="/"
        className="rounded-full border-2 border-accent px-4 py-2 text-sm font-medium md:text-xs lg:text-sm">
        <p>TOP</p>
      </Link>
    </footer>
  );
};

export default Footer;

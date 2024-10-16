import type { Metadata } from "next";
import "./styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Fiquell - Indonesian Creative",
  description:
    "A multi-faceted Indonesian Creative with a passion for merging aesthetic principles with practical solutions.",
  icons: {
    shortcut: "https://fav.farm/🔥",
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

import {
  M_PLUS_1_Code,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";

export const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const mono = M_PLUS_1_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

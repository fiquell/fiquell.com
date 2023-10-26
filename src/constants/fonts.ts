import localFont from "next/font/local";

export const commissioner = localFont({
  src: [
    {
      path: "../../public/fonts/commissioner-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/commissioner-medium.ttf",
      weight: "500",
    },
  ],
});

export const bebasNeue = localFont({
  src: [
    {
      path: "../../public/fonts/bebas-neue-regular.ttf",
      weight: "400",
    },
  ],
});

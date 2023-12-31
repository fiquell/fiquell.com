import localFont from "next/font/local";

export const opensaucesans = localFont({
  src: [
    {
      path: "../../public/fonts/opensaucesans-regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/opensaucesans-medium.woff2",
      weight: "500",
    },
  ],
});

export const bebasneue = localFont({
  src: [
    {
      path: "../../public/fonts/bebasneue-regular.woff2",
      weight: "400",
    },
  ],
});

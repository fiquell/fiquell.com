export const title = "Fiquell ✺ Frontend Developer";

const description = [
  "Crafting captivating websites for exciting online journeys",
];

const keywords = [
  "collaboration",
  "creativity",
  "digital experiences",
  "frontend developer",
  "web development",
];

export const metadata = [
  { name: "description", content: description[0] },
  { name: "author", content: "Fiquell" },
  { name: "keywords", content: keywords.join(", ") },
  { name: "theme-color", content: "#111111" },
  { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  { property: "og:title", content: title },
  { property: "og:description", content: description[0] },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://fiquell.com/" },
  {
    property: "og:image",
    content: "https://fiquell.com/fiquell-social-share.png",
  },
  { property: "og:image:type", content: "image/png" },
  { property: "og:image:width", content: "1920" },
  { property: "og:image:height", content: "1080" },
];

export const linkdata = [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/manifest.json" },
];

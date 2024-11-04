import type { MetadataRoute } from "next";
import { siteConfig } from "~/config/site";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: siteConfig.name,
    short_name: siteConfig.tagline,
    description: siteConfig.description,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    id: "/",
    start_url: "/",
    theme_color: siteConfig.color,
    background_color: siteConfig.color,
    display: "standalone",
  };
};

export default manifest;

import type { Metadata, Viewport } from "next";
import DotPattern from "~/components/dot-pattern";
import Indicator from "~/components/indicator";
import Noise from "~/components/noise";
import { siteConfig } from "~/config/site";
import { space_mono, spline_sans } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    shortcut: "https://fav.farm/🔥",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.color,
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased",
          spline_sans.variable,
          space_mono.variable,
        )}>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(circle_at_top,theme('colors.base-100'),transparent,transparent)]",
          )}
        />
        <main>{children}</main>
        <Noise />
        <Indicator />
      </body>
    </html>
  );
};

export default RootLayout;

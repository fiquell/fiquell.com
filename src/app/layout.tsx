import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import DotPattern from "~/components/dot-pattern";
import Indicator from "~/components/indicator";
import Noise from "~/components/noise";
import { siteConfig } from "~/config/site";
import { mono, sans, serif } from "~/lib/fonts";
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
          sans.variable,
          serif.variable,
          mono.variable,
        )}>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(circle_at_top,theme('colors.base-100'),transparent,transparent)]",
          )}
        />
        <Noise />
        <main className="container">{children}</main>
        <Toaster
          toastOptions={{
            className: "font-sans",
          }}
        />
        <Indicator />
      </body>
    </html>
  );
};

export default RootLayout;

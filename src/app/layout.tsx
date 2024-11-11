import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import DotPattern from "~/components/dot-pattern";
import Indicator from "~/components/indicator";
import Noise from "~/components/noise";
import { siteConfig } from "~/config/site";
import { mono, sans, serif } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

export const viewport: Viewport = {
  themeColor: siteConfig.color,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        alt: siteConfig.tagline,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@_fiquell",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          sans.variable,
          serif.variable,
          mono.variable,
        )}>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(circle_at_right,theme('colors.base-100'),transparent,transparent)]",
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

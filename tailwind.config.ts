import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fafafa",
          secondary: "#27272a",
          accent: "#68686a",
          neutral: "#232326",
          "base-100": "#09090b",
          "base-content": "#fafafa",
        },
      },
    ],
  },
};

export default config;

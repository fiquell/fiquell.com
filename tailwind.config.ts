import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["bumblebee"],
  },
};

export default config;

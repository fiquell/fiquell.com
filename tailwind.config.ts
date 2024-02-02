import { type Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        text: "#aaaaaa",
        background: "#111111",
        primary: "#f0cca8",
        accent: "#777777",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-3d")],
} satisfies Config;

export default config;

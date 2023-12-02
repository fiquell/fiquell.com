import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1476px",
    },
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

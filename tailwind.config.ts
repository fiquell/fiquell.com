import { type Config } from "tailwindcss";

export default {
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
        accent: "#777777",
      },
    },
  },
  plugins: [],
} satisfies Config;

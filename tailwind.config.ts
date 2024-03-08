import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        md: '6rem',
        lg: '8rem',
        xl: '10rem'
      }
    },
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['"Overpass Variable"', ...fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;


import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9b87f5',
          foreground: '#ffffff'
        },
        background: '#181622',
        card: '#201d2e',
        "card-glass": "rgba(40, 36, 60, 0.86)",
        "card-hover": "#27244a"
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: "1.25rem",
        lg: '1rem',
        md: '0.65rem',
        sm: '0.475rem'
      },
      boxShadow: {
        glass: "0 4px 24px 0 rgba(72,49,160, 0.1), 0 1.5px 16px 0 rgba(0,0,0,0.14)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

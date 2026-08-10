import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./content.ts"],
  theme: {
    extend: {
      colors: {
        // Azul Born (color interactivo principal)
        brand: {
          50: "#ecf8fd",
          100: "#d1eefb",
          200: "#a7e0f6",
          300: "#71cdf0",
          400: "#47bced",
          500: "#29abe2",
          600: "#1b8cc4",
          700: "#1a72a0",
          800: "#1c5f83",
          900: "#1c4f6c",
        },
        // Verde Born (acento natural / gradientes)
        leaf: {
          50: "#f3faea",
          100: "#e6f4cf",
          200: "#cfe9a3",
          300: "#b3db6f",
          400: "#97cd47",
          500: "#7bb92b",
          600: "#5f991f",
          700: "#49761d",
          800: "#3c5e1d",
          900: "#34501d",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

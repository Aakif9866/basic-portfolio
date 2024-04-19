import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(30, 30, 30);",
        linkYellow: "yellow",
        contactHover: "rgb(235,235,235)",
        cardBg: "rgb(54,54,54)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 0, 255, 0.5)",
      },
      keyframes: {
        opening: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0)" },
        },
        closing: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        open: "opening 0.8s linear",
        close: "closing 0.5s linear",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

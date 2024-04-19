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
    },
  },
  plugins: [require("flowbite/plugin")],
};

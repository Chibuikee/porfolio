/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        ping: {
          "75%": {
            transform: "scale(2)",
            opacity: " 0",
          },
          "100%": {
            transform: "scale(2)",
            opacity: " 0",
          },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        open_Sans: ["var(--font-open_Sans)"],
        inter: ["var( --font-inter)"],
        poppins: ["var(--font-poppins)"],
        hind: ["var(--font-hind)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};

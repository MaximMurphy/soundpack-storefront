/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        primary1: "rgb(222, 222, 222);",
        primary2: "rgb(36, 36, 36);",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        turn: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        move: {
          "0%": { transform: "translateY(-5%) rotate(0deg)" },
          "50%": { transform: "translateY(40%) rotate(180deg)" },
          "100%": { transform: "translateY(-5%) rotate(360deg)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "300% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 200%",
            "background-position": "right center",
          },
        },
        wavy: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-15%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        carousel: "marquee 30s linear infinite",
        carousel2: "marquee2 30s linear infinite",
        turn: "turn 10s linear infinite",
        move: "move 15s linear infinite",
        text: "text 8s ease infinite",
        wavy: "wavy 3s ease infinite",
      },
    },
    plugins: [],
  },
  darkMode: "class",
};

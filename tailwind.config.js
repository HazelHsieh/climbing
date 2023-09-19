/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      cyan: colors.cyan,
      indigo: colors.indigo,
      emerald: colors.emerald,
      pink: colors.pink,
      // 自定義
      // base_dark: "#30535B",
      text_color: "#474B42",
    },
    // extend 舊GPIM
    extend: {
      animation: {
        rotate: "rotate 10s linear infinite",
        "rotate-slow": "rotate 40s linear infinite",
        linearGradient: "linearGradient 8s ease-in-out infinite",
        scale: "scale 5s ease-in-out infinite",
        // 燈光
        light: "opacity 3s ease-in-out infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        linearGradient: {
          "0%": { backgroundPosition: "0% 100%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "0% 100%" },
          "75%": { backgroundPosition: "100% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        opacity: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
      },
      linearBorderGradients: {
        directions: {
          // defaults to these values
          t: "to top",
          tr: "to top right",
          r: "to right",
          br: "to bottom right",
          b: "to bottom",
          bl: "to bottom left",
          l: "to left",
          tl: "to top left",
        },
        colors: {
          // defaults to {}
          "secondary-accent-primary": ["#808F7C", "#C54A1A", "#D5B690"],
          "secondary-accent-secondary": ["#808F7C", "#C54A1A", "#808F7C"],
        },
        background: {
          "btnBg-1": "#D5B690",
          "btnBg-2": "#474B42",
          black: "black",
          neutral: "#192029",
        },
      },
      borders: {
        // defaults to these values (optional)
        1: "1px",
        2: "2px",
        4: "4px",
      },
      screens: {
        'xs': '390px',// i12pro "xs"，寬度 390px
        "3xl": "1740px",
        "4xl": "1920px",
      },
    },
    container: {
      center: true,
      padding: "12px",
    },
  },
  variants: {},
  plugins: [require("daisyui"), require("tailwindcss-border-gradient-radius")],

  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#39C1F9",
          // accent: "#03EFFC",
          // secondary: "#B0E0E6",
          // warning: "#FFBB00",
          // neutral: "#0F2634",
          // black: "#030A10",
          // white: "#ffffff",
          // error: "#D45443",
          // text: "#ffffff",
          // "error-content": "#E63F00",
          // "base-100": "#0F2634",
          primary: "#D5B690",
          // primary: "#A7B47F",
          accent: "#C54A1A",
          secondary: "#808F7C",
          warning: "#DBB380",
          neutral: "#474B42",
          black: "#030A10",
          white: "#ffffff",
          error: "#D45443",
          "error-content": "#E63F00",
          "base-100": "#F2F0EE",

        },
      },
    ],
  },
};

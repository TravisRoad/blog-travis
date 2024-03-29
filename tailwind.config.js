/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,tsx,jsx}",
    "./data/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        nord: {
          // https://www.nordtheme.com/docs/colors-and-palettes
          dark: "#242933",
          bgDark: "#242933",
          headerDark: "#242933",
          light: "#f2f4f8",
          bgLight: "#f2f4f8",
          headerLight: "#f2f4f8",
          0: "#2e3440",
          1: "#3b4252",
          2: "#434c5e",
          3: "#4c566a",
          4: "#d8dee9",
          5: "#e5e9f0",
          6: "#eceff4",
          7: "#8fbcbb",
          8: "#88c0d0",
          9: "#81a1c1",
          10: "#5e81ac",
          11: "#bf616a",
          12: "#d08770",
          13: "#ebcb8b",
          14: "#a3be8c",
          15: "#b48ead",
        },
      },
      fontFamily: {
        serif: [
          "Noto Serif SC",
          "serif",
          '"Times New Roman"',
          "Times",
          '"Apple Color Emoji" !important',
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

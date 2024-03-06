/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#FF4C4C",
      lightRed: "#FFD9D9",
      secondary: "#1C2833",
      white: "#fff",
      gray: "rgb(75 85 99)"
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#61fad5"
      },
      backgroundColor:{
        primary: "#0a192f",
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
  },
  plugins: [
    require("daisyui"),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#1C4973",
          "secondary": "#f6d860",
          "accent": "#216869",
          "neutral": "#BDD7EF",
          "base-100": "#CEE1F3",
        }
      }
    ],
  },
}
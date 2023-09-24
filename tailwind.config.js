/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('https://i.ibb.co/mCWYTwL/bg-image.jpg')",
      },
      colors: {
        clifford: "#da373d",
        "pri-text": "#0B0B0B",
        "place-text": "#757575",
        "spe-text": "#FF444A",
        "des-text": "#0B0B0BB2"
      },
    },
  },
  plugins: [require("daisyui")],
}


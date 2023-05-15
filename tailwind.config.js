/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NanumSquareNeoHv: ["NanumSquareNeo-Hv"],
        NanumSquareNeoRg: ["NanumSquareNeo-Rg"],
      },
      colors: {
        's2xyoon-gray': '#DFDFDF'
      }
    },
  },
  plugins: [],
}


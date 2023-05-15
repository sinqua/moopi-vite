/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NanumSquareNeoRg: ["NanumSquareNeo-Rg"],
        NanumSquareNeoBd: ["NanumSquareNeo-Bd"],
        NanumSquareNeoEb: ["NanumSquareNeo-Eb"],
        NanumSquareNeoHv: ["NanumSquareNeo-Hv"],
      },
      colors: {
        's2xyoon-gray': '#DFDFDF'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }

      'md': '1372px',
      // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        NanumSquareNeoRg: ["NanumSquareNeo-Rg"],
        NanumSquareNeoBd: ["NanumSquareNeo-Bd"],
        NanumSquareNeoEb: ["NanumSquareNeo-Eb"],
        NanumSquareNeoHv: ["NanumSquareNeo-Hv"],
        SegoeUI: ["Segoe-UI"],
      },
      colors: {
        's2xyoon-gray': '#DFDFDF'
      }
    },
  },
  plugins: [],
}


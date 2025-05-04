/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-150px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(150px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        typing: 'typing 2.1s steps(40) 1s 1 normal both',
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.line-through-thin': {
          textDecorationLine: 'line-through',
          textDecorationThickness: '1px',
          textDecorationColor: 'black',
        },
      })
    }
  ],
}

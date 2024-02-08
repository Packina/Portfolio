/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dela-gothic-one": ["Dela Gothic One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

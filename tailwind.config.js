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
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(30px) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-30px) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
          },
        },
      }
    },
  },
  plugins: [require("daisyui")],
};

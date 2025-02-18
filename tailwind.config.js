/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          rancho: ["Rancho", "cursive"],
          agraham: ['Agraham', 'sans-serif'],
        },
        colors: {
          customPurple: "#2A1F56", 
        },
        animation: {
          "light-move": "moveLight 6s infinite alternate ease-in-out",
        },
        keyframes: {
          moveLight: {
            "0%": { transform: "translateX(-20%) translateY(-10%)" },
            "100%": { transform: "translateX(20%) translateY(10%)" },
          },
        },
      },
    },
  plugins: [],
};

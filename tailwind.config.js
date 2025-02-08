/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        camodirt: ["CAMODIRT-Regular", "sans-serif"],
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [],
};

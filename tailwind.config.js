/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primay: "#FFD11A",
        textcolor: "#FFFFFF",
        subcolor: "#666666",
        bgcolor: "#1A1A1A",
        bordercolor:"#262626",
        dark1:"#1A1A1A",
        dark2:"#141414",
        
      },
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
        Inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};

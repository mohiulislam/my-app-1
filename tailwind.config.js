/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base_color: "#0a192f",
        gray_like: "#8892b0",
        green_like: "#64ffda",
        white_like: "#ccd6f6",
      },
    },
  },
  plugins: [],
};

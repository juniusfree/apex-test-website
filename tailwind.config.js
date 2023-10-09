/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        desert: {
          light: "#CDC4B1",
          medium: "#F4EEE0",
          dark: "#32281F",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        sangbleu: ["Sangbleu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PoppinsBold: "Poppins-Bold",
      },
      screens: {
        miniTab: { max: "520px" },
      },
    },
  },
  plugins: [],
};

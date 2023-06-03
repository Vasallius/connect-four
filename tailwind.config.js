/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontSize: {
      xs: ["16px", "21px"],
      sm: ["20px", "26px"],
      md: ["24px", "31px"],
      lg: ["56px", "71px"],
    },
    extend: {
      colors: {
        iris: "#5C2DD5",
        purple: "#7945FF",
        "coral-pink": "#FD6687",
        dandelion: "#FFCE67",
      },
      fontFamily: {
        spacegrotesk: ["spacegrotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ED055E",
        secondary: "#5012C2",
        accent: "#50E3C2",
      },
      fontFamily: {
        "montserrat-black": ["MontserratAlternates-Black"],
        "montserrat-light": ["MontserratAlternates-Light"],
        "montserrat-regular": ["MontserratAlternates-Medium"],
        "chelsea-market": ["ChelseaMarket-Regular"],
      },
    },
    plugins: [],
  },
};

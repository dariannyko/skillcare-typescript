/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FAFCFE",
        "gray-30": "#E0E0E0",
        "gray-50": "#666571",
        "gray-100": "#4E4D56",
        "gray-500": "#26242E",
        "orange-100": "#FEF3ED",
        "orange-500": "#FE7244",
        "primary-pink": "#DC5354",
        "primary-blue": "#0142C5",
        "primary-gray": "#0A335B",
        "secondary-400": "#FFCD58",
        "secondary-500": "#6347EB",
        "purple-100": "#F5F0FF",
        "purple-200": "#E8E3FC",
        "purple-500": "#B18BFF",
        "yellow-100": "#FFF9EC",
        "blue-50": "#F5F7FF",
        "blue-100": "#EDF5FF",
        "blue-500": "#5CC9FF",
        "green-100": "#F0FCF2",
        "green-500": "#92E8B3",
        "pink-100": "#FFF0F0",
        "pink-500": "#FF8989",
      },
      
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolveText: "url('./assets/EvolveText.png')",
        BenefitIconBackground: "url('./assets/Abstract/BenefitIconBackground.svg')",
        abstractWaves: "url('./assets/Abstract/AbstractWaves.png')",
        sparkles: "url('./assets/Abstract/Sparkles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

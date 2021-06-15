const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      primary: "#ef7b4d",
      dark: "#28234a",
      light: "#edf4f7",
      gray: "#6e7b91",
      white: "#fff",
      red: "#e12e40",
      transparent: {
        DEFAULT: "rgba(255, 255, 255, 0)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["nunito", ...defaultTheme.fontFamily.sans],
      },
      transformOrigin: {
        "-full-0": "-100% 0",
        "0-0": "0% 0",
        "full-0": "100% 0",
      },
      zIndex: {
        "-1": "-1",
        999: "999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}

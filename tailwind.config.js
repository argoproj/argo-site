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
      gray: "#524f6d",
      "gray-light": "#e0ebef",
      white: "#fff",
      black: "#000",
      red: "#e12e40",
      "grad-from": "#110e50",
      transparent: {
        DEFAULT: "rgba(255, 255, 255, 0)",
      },
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: null,
            "a:not(.btn, .stargazers)": {
              color: theme("colors.primary"),
              textDecoration: "underline",
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.extrabold"),
              color: theme("colors.dark"),
            },
            ul: {
              "> li::before": {
                backgroundColor: theme("colors.primary"),
              },
            },
            img: {
              borderRadius: theme("borderRadius.lg"),
            },
          },
        },
      }),
      fontFamily: {
        sans: ["nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "8xl": ["5.5rem", "1"],
      },
      transformOrigin: {
        "-full-0": "-100% 0",
        "0-0": "0% 0",
        "full-0": "100% 0",
      },
      zIndex: {
        "-1": "-1",
        998: "998",
        999: "999",
      },
      maxWidth: {
        "9/12": "75%",
      },
      transitionProperty: {
        left: "left",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      rotate: {
        "-36": "-36deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

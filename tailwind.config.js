const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: {
        deep: [/^burger(-.*)?$/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#ef7b4d",
        dark: "#28234a",
        gray: "#524f6d",
        light: "#edf4f7",
        transparent: "rgba(255, 255, 255, 0)",
      },
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
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [".75rem", "1rem"],
        sm: [".875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["4rem", "1"],
        "7xl": ["5rem", "1"],
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
        right: "right",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      rotate: {
        36: "36deg",
        89: "89deg",
        "-36": "-36deg",
      },
      boxShadow: {
        primary: "0 20px 50px -15px rgba(239, 123, 77, 0.3)",
      },
      gradientColorStops: theme => ({
        ...theme("colors"),
        "primary/20": "rgba(239, 123, 77, 0.2)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        body: {
          color: theme("colors.dark"),
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },

        a: {
          transitionProperty: theme("transitionProperty.colors"),
          transitionTimingFunction: theme("transitionTimingFunction.linear"),
          transitionDuration: theme("transitionDuration.100"),

          "&:hover": {
            color: theme("colors.primary"),
          },
        },

        "a, button, input": {
          outline: "none",

          "&:focus": {
            outline: "none",
            boxShadow: "0 0 0 calc(3px) rgba(239, 123, 77, 0.3)",
          },
        },

        "::-moz-selection": {
          backgroundColor: theme("colors.primary"),
          color: theme("colors.white"),
        },

        "::selection": {
          backgroundColor: theme("colors.primary"),
          color: theme("colors.white"),
        },

        "h1, h2, h3, h4, h5, h6": {
          marginBottom: theme("margin.4"),
          fontWeight: theme("fontWeight.extrabold"),
        },

        h1: {
          fontSize: theme("fontSize.4xl"),
          lineHeight: theme("fontSize.4xl[1]"),
          "@screen md": {
            fontSize: theme("fontSize.5xl"),
            lineHeight: theme("fontSize.5xl[1]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.6xl"),
            lineHeight: theme("fontSize.6xl[1]"),
          },
        },

        h2: {
          fontSize: theme("fontSize.3xl"),
          lineHeight: theme("fontSize.3xl[1]"),
          "@screen md": {
            fontSize: theme("fontSize.4xl"),
            lineHeight: theme("fontSize.4xl[1]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.5xl"),
            lineHeight: theme("fontSize.5xl[1]"),
          },
        },

        h3: {
          fontSize: theme("fontSize.xl"),
          lineHeight: theme("fontSize.xl[1]"),
          "@screen md": {
            fontSize: theme("fontSize.2xl"),
            lineHeight: theme("fontSize.2xl[1]"),
          },
        },

        h4: {
          fontSize: theme("fontSize.xl"),
          lineHeight: theme("fontSize.xl[1]"),
          "@screen md": {
            fontSize: theme("fontSize.2xl"),
            lineHeight: theme("fontSize.2xl[1]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.2xl"),
            lineHeight: theme("fontSize.2xl[1]"),
          },
        },

        h5: {
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("fontSize.lg[1]"),
          "@screen md": {
            fontSize: theme("fontSize.xl"),
            lineHeight: theme("fontSize.xl[1]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.2xl"),
            lineHeight: theme("fontSize.2xl[1]"),
          },
        },

        h6: {
          fontSize: theme("fontSize.md"),
          lineHeight: theme("fontSize.md[1]"),
          "@screen md": {
            fontSize: theme("fontSize.lg"),
            lineHeight: theme("fontSize.lg[1]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.lg"),
            lineHeight: theme("fontSize.lg[1]"),
          },
        },
      })

      const newUtilities = {
        ".clip-0": {
          clip: "rect(0, 0, 0, 0)",
        },
        ".clip-auto": {
          clip: "auto",
        },
        ".bg-gradient-dark": {
          backgroundImage: "linear-gradient(195deg, #110e50 40%, #220c59 75%)",
        },
        ".burger-dark, .burger.open": {
          "&.burger .burger-lines, &.burger .burger-lines::before, &.burger .burger-lines::after":
            {
              backgroundColor: theme("colors.dark"),
            },
        },
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }),
  ],
}

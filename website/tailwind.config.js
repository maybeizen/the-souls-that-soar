/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "system-ui", "-apple-system", "sans-serif"],
        mono: ["FiraCode", "monospace"],
      },
      fontSize: {
        "page-title": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "card-title": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        background: {
          DEFAULT: "#0a0a0a",
          dark: "#0a0a0a",
          light: "#1a1a1a",
        },
        text: {
          DEFAULT: "#D4D4D8",
          muted: "#71717A",
          light: "#F4F4F5",
        },
      },
      borderRadius: {
        card: "0.75rem",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(252, 165, 165, 0.1), 0 4px 6px -2px rgba(252, 165, 165, 0.05)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme("colors.background.DEFAULT"),
          color: theme("colors.text.DEFAULT"),
        },
        h1: {
          fontSize: theme("fontSize.page-title"),
          color: theme("colors.primary.300"),
        },
        h2: {
          fontSize: theme("fontSize.section-title"),
          color: theme("colors.primary.300"),
        },
        h3: {
          fontSize: theme("fontSize.card-title"),
          color: theme("colors.primary.300"),
        },
      });
    },
  ],
};

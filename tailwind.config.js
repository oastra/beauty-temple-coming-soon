/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Beauty Temple — Blush / Nude palette
        primary: {
          100: "#A86464", // deep muted rose
          80: "#C58787",
          60: "#E6B6B6",
          40: "#F3DADA",
          20: "#FBEFEF",
          10: "#FFF7F6", // lightest veil
        },
        // Greys — soft, beauty vibe
        grey: {
          100: "#2F2F2F",
          80: "#505050",
          60: "#757575",
          40: "#AAAAAA",
          20: "#DDDDDD",
          10: "#EEEEEE",
        },
        // Accent (subtle champagne “gold” if needed)
        accent: {
          60: "#D8C4A3",
          40: "#E9DDC9",
          20: "#F6EFE4",
        },
        white: "#FFFFFF",
        black: "#000000",
        bg: "#FFF6F4",
        badge: {
          yellow: "#FFF7C4",
          blue: "#DDE8FF",
          mint: "#D9FBFA",
          pink: "#FFDDFE",
          purple: "#E5CEFF",
        },
      },
      fontFamily: {
        display: ["var(--font-raleway)", "sans-serif"],
        text: ["var(--font-lexend)", "sans-serif"],
      },
      spacing: {
        "gutter-mobile": "16px",
        "gutter-tablet": "24px",
        "gutter-desktop": "24px",
        "margin-mobile": "20px",
        "margin-tablet": "32px",
        "margin-desktop": "100px",
      },
      screens: {
        mobile: "375px",
        tablet: "640px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};

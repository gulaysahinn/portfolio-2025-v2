/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      colors: {
        // Ana arka plan sistemi
        base: {
          DEFAULT: "#09090f",
          surface: "#11111c",
          elevated: "#16162a",
          border: "#1e1e35",
          "border-subtle": "#16162a",
        },
        // Violet ana aksan
        violet: {
          50:  "#f0edff",
          100: "#e2deff",
          200: "#c7beff",
          300: "#a998ff",
          400: "#8b72ff",
          500: "#7c6af7",
          600: "#6655e0",
          700: "#5243c2",
          800: "#3d3299",
          900: "#2a2270",
          950: "#1a1550",
        },
        // Cyan sadece CTA'larda
        accent: {
          DEFAULT: "#22d3ee",
          dim:     "#0891b2",
          muted:   "#083344",
        },
        // Metin hiyerarşisi
        ink: {
          DEFAULT: "#f0f0ff",
          secondary: "#8080a8",
          dim: "#4a4a72",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

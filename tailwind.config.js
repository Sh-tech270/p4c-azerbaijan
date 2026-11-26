const path = require('path');

const baseDir = __dirname.replace(/\\/g, '/');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${baseDir}/src/pages/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/src/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/src/app/**/*.{js,ts,jsx,tsx,mdx}`,
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./p4c-web/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p4c: {
          navy: "#0B357B",
          "navy-dark": "#072353",
          "navy-light": "#14499E",
          cyan: "#00B4D8",
          "cyan-dark": "#0096C7",
          "cyan-light": "#48CAE4",
          "cyan-soft": "#E0F7FA",
          teal: "#00C2CB",
          slate: "#0F172A",
          muted: "#64748B",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

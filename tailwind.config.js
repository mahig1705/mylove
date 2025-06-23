/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing)", "cursive"],
        "great-vibes": ["var(--font-great-vibes)", "cursive"],
        shadows: ["var(--font-shadows)", "cursive"],
      },
      colors: {
        cream: {
          50: "#fefdf8",
          100: "#fdf8e8",
        },
        vintage: {
          brown: "#8b4513",
          beige: "#f5f5dc",
          sepia: "#704214",
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      boxShadow: {
        vintage: "0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

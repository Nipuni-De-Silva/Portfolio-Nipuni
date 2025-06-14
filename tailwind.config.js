/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Add custom colors to match the intro page theme
        primary: {
          light: '#f3f4f6',
          DEFAULT: '#6B7280',
          dark: '#1F2937',
        },
        accent: {
          DEFAULT: '#111827', // gray-900, the color used in the "Contact me here" button
          hover: '#030712',   // gray-950, for hover states
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

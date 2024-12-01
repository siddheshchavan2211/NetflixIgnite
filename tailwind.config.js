/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-start": "rgba(37, 23, 27, 0.8)", // Add slight transparency
        "dark-end": "rgba(37, 25, 23, 0.5)", // Add more transparency
      },
    },
  },
  plugins: [],
};

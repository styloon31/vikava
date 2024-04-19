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
        primary: "#B3B3B3",
        secondary: "#E8E8E8",
        name: "#5F5F5F",
        bgBlog: "#F0F0F0",
      },
    },
  },
  plugins: [],
};

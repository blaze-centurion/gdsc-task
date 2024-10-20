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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary_gradient:"var(--primary_gradient)"
        primary_purple: "#5244cf",
        secondary_purple: "#5244cf",
        custom_gray:"#f4f6f8",
        dark_black: "#041e32",
        custom_orange:"#fe7a58",
        custom_yellow:"#febd32",
        custom_blue: "#4379F2"
        
      },
      backgroundImage: {
        primary_gradient:"var(--primary_gradient)"
      }
    },
  },
  plugins: [],
  darkMode:'false'
};

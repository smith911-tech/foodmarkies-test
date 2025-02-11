/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B", // Example: Amber/Orange
        secondary: "#10B981", // Example: Teal/Green
        accent: "#3B82F6", // Example: Blue
        neutral: "#6B7280", // Example: Gray
        "primary-dark": "#D97706", // Darker shade of primary
        "secondary-dark": "#059669", // Darker shade of secondary
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern, readable font
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
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
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark",
      {
        cupcake: {
          primary: '#6222cc',
          secondary: '#f79048',
          accent: '#FFF',
          neutral: '#000807',
          white: '#fff',
          "base-100": "#f5f5f5",  // Custom color for bg-base-100
          "base-200": "#e0e0e0",  // Optionally define base-200 if needed
          "base-300": "#c0c0c0"   // Optionally define base-300 if needed
        }
      }],
  },
};
export default config;

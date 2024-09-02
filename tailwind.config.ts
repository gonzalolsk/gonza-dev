import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        shake: 'shake 1s infinite',
      },
      colors: {
        firstColor: '#232325', //black
        secondColor: '#0c3056',//blue
        thirdColor: '#00a388',//green
        // fourthColor: '#2c1338', //purple
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

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
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#96Ba7b",
          secondary: "#fdf3f1",
          accent: "#37cdbe",
          neutral: "#252b42",
          "base-100": "#ffffff",
          // add other color properties if needed
        },
      },
      "light", // add this to include the default light theme
    ],
    darkTheme: "dark", // specify the dark theme name if you want to use it later
  },
};

export default config;


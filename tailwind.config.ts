import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      bg: "#0A0C11",
      white: "#FAFAFA",
      bluegray: "#ABB8C3",
      blue: "#00488e",
      lightblue: "#049cfd",
      darkblue: "#03065B",
    },
  },

  plugins: [],
};
export default config;

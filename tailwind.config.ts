import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          0: "#F5F1EA",
          1: "#F7A23B",
          2: "#F4623A",
        },
        yellow: {
          0: "#fef3c7",
        },
        green: {
          0: "#A0C1B8",
          1: "#4F6D65",
          2: "#44E660",
        },
      },
    },
  },
  plugins: [],
};
export default config;

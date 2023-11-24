import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        lightMain: "#F6F6F6",
        darkMain: "#070B2F",
        firstDark: "#000D80",
        firstMain: "#0A1FDC",
        firstLight: "#5566FF",
        secondMain: "#7E3F94",
        secondLight: "#C897D9",
        thirdMain: "#E4E905",
        textContainerBG: "#F6F6F6E6",
        danger: "#F95252",
      },
      height: {
        navHeight: "70px",
        screenResponsive: "100svh",
      },
    },
  },
  safelist: [
    {
      pattern:
        /(text|bg)-(lightMain|darkMain|firstMain|firstLight|secondMain|secondLight|thirdMain|transparent|danger)/,
      variants: ["hover"],
    },
  ],
  plugins: [],
};
export default config;

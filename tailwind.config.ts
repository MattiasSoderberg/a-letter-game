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
        lightDark: "#CFCFCF",
        darkLighter: "#525364",
        darkLight: "#2E2F3B",
        darkMain: "#070B2F",
        firstDark: "#000D80",
        firstLight: "#5566FF",
        firstLighter: "#828DEB",
        firstMain: "#0A1FDC",
        secondLight: "#C897D9",
        secondLighter: "#E3BBF0",
        secondMain: "#7E3F94",
        thirdLight: "#FDFF98",
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
        /(text|bg|shadow|outline)-(lightMain|lightDark|darkMain|darkLight|darkLighter|firstMain|firstLight|firstLighter|secondMain|secondLight|secondLighter|thirdMain|thirdLight|transparent|danger)/,
      variants: ["hover", "focus"],
    },
  ],
  plugins: [],
};
export default config;

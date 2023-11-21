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
        darkMain: "#000D80",
        firstMain: "#0A1FDC",
        firstLight: "#5566FF",
        secondMain: "#7E3F94",
        secondLight: "#C897D9",
        thirdMain: "#E4E905",
      },
      height: {
        navHeight: "70px",
        screenDynamic: "100dvh",
      },
    },
  },
  plugins: [],
};
export default config;

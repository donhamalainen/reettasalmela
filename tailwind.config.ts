import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        maxHeading: "clamp(3.125rem, 8.083vw + 1.033rem, 7.5rem)",
        normalParagraph: "clamp(1.5rem, 1.617vw + 1.082rem, 2.375rem)",
        smallParagraph: "clamp(1rem, 0.231vw + 0.94rem, 1.125rem)",
      },
      fontFamily: {},
    },
  },
  plugins: [],
} satisfies Config;

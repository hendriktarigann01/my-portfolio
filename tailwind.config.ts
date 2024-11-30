import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundHover: "var(--foregroundHover)",
        navbar: "var(--navbar)",
      },
      lineHeight: {
        custom: "2.5",
      },
    },
  },
  plugins: [],
} satisfies Config;

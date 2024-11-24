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
        navbar: "var(--navbar)",
      },
      boxShadow: {
        around: "0 0 40px 10px rgba(128, 90, 213, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;

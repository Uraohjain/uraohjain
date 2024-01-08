import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "u+green": "#008089",
        "u+green-darker": "#006B73",
        "u+sunny": "#FFDFAC",
        "u+pinky": "#F7BFC9",
        "u+burg": "#701C3E",
        "u+burg-darker": "#701B3E",
        "u+grey": "#F5F5F5",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#701c3e",
          secondary: "#008089",
          accent: "#ffdfac",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./@/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {

      rotate: {
        "2": "2deg",
      },

      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },

    },
  },
  plugins: [],
} satisfies Config;

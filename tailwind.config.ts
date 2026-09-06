import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          lime: "#00FF66",
          green: "#10E775",
          pink: "#FF2E93",
          cyan: "#00F0FF",
          yellow: "#E2F952",
          purple: "#A855F7",
        },
        dark: {
          bg: "#08090C",
          surface: "#0F1218",
          card: "#141923",
          border: "#1F2633",
          hover: "#252E3E",
          muted: "#8B949E",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-righteous)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
      boxShadow: {
        "neon-green": "0 0 15px rgba(0, 255, 102, 0.4), 0 0 30px rgba(0, 255, 102, 0.15)",
        "neon-pink": "0 0 15px rgba(255, 46, 147, 0.4), 0 0 30px rgba(255, 46, 147, 0.15)",
        "neon-cyan": "0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.15)",
        "neon-yellow": "0 0 15px rgba(226, 249, 82, 0.4), 0 0 30px rgba(226, 249, 82, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;


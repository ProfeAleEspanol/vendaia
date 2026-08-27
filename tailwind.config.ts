import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inema: {
          bg: "#111111",
          surface: "#1a1a1a",
          panel: "#242424",
          panelHigh: "#2b2b2b",
          border: "#333333",
          line: "#242424",
          text: "#ffffff",
          soft: "#dddddd",
          muted: "#bbbbbb",
          dim: "#888888",
          primary: "#FACC15",
          cyan: "#FACC15",
          mint: "#34D399",
          amber: "#FB923C",
          purple: "#60A5FA",
          sky: "#38BDF8",
          rose: "#FB7185",
        },
      },
      boxShadow: {
        panel: "0 18px 60px rgba(0, 0, 0, 0.34)",
      },
      borderRadius: {
        inema: "8px",
      },
    },
  },
  plugins: [],
};

export default config;

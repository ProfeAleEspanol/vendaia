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
          bg: "#080d12",
          surface: "#0d131b",
          panel: "#111722",
          panelHigh: "#151d2a",
          border: "#263341",
          line: "#1a2430",
          text: "#f7f9fc",
          soft: "#e8eef6",
          muted: "#aab4c2",
          dim: "#778395",
          cyan: "#4bd6ff",
          mint: "#5df2b6",
          amber: "#ffb84d",
          purple: "#9d7dff",
          rose: "#ff5d7a",
        },
      },
      boxShadow: {
        panel: "0 24px 90px rgba(0, 0, 0, 0.28)",
      },
      borderRadius: {
        inema: "10px",
      },
    },
  },
  plugins: [],
};

export default config;


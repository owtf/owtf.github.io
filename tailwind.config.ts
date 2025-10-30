import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
      colors: {
        background: "#020617",
        accent: {
          DEFAULT: "#00E0FF",
          soft: "#B4F3FF"
        }
      },
      boxShadow: {
        glow: "0 0 120px rgba(0, 224, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

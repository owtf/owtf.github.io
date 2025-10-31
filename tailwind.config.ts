import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
      colors: {
        background: "#ffffff",
        accent: {
          DEFAULT: "#0B6FFF",
          soft: "#E3EEFF"
        }
      },
      boxShadow: {
        card: "0 18px 60px rgba(15, 23, 42, 0.08)",
        inset: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;

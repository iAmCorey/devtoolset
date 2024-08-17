import type { Config } from "tailwindcss"

export const lightVariables = {
  colors: {
    border: "#e2e8f0",
    input: "#e2e8f0",
    ring: "#6a66c4",
    background: "#ffffff",
    foreground: "#020817",
    primary: "#6a66c4",
    "primary-foreground": "#ffffff",
    secondary: "#f1f5f9",
    "secondary-foreground": "#0f172a",
    destructive: "#ef4444",
    "destructive-foreground": "#ffffff",
    success: "#39a561",
    "success-foreground": "#ffffff",
    muted: "#f8fafc",
    "muted-foreground": "#64748b",
    accent: "#f1f5f9",
    "accent-foreground": "#0f172a",
    popover: "#ffffff",
    "popover-foreground": "#020817",
    card: "#ffffff",
    "card-foreground": "#020817",
  },
};

export const darkVariables = {
  colors: {
    border: "#2f3e57",
    input: "#1e293b",
    ring: "#837fdf",
    background: "#121924",
    foreground: "#f8fafc",
    primary: "#837fdf",
    "primary-foreground": "#111",
    secondary: "#1e293b",
    "secondary-foreground": "#f8fafc",
    destructive: "#ef4444",
    "destructive-foreground": "#ffffff",
    success: "#39a561",
    "success-foreground": "#f8fafc",
    muted: "#020817",
    "muted-foreground": "#94a3b8",
    accent: "#1e293b",
    "accent-foreground": "#f8fafc",
    popover: "#121924",
    "popover-foreground": "#f8fafc",
    card: "#121924",
    "card-foreground": "#f8fafc",
  },
};

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    variables: {
      DEFAULT: lightVariables,
    },
    darkVariables: {
      DEFAULT: darkVariables,
    },
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/typography')],
} satisfies Config

export default config
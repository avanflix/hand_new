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
        hand: {
          primary: {
            50: "hsl(var(--hand-primary-50))",
            100: "hsl(var(--hand-primary-100))",
            200: "hsl(var(--hand-primary-200))",
            300: "hsl(var(--hand-primary-300))",
            400: "hsl(var(--hand-primary-400))",
            500: "hsl(var(--hand-primary-500))",
            600: "hsl(var(--hand-primary-600))",
            700: "hsl(var(--hand-primary-700))",
            800: "hsl(var(--hand-primary-800))",
            900: "hsl(var(--hand-primary-900))",
            DEFAULT: "hsl(var(--hand-primary-500))",
          },
          secondary: {
            50: "hsl(var(--hand-secondary-50))",
            100: "hsl(var(--hand-secondary-100))",
            200: "hsl(var(--hand-secondary-200))",
            300: "hsl(var(--hand-secondary-300))",
            400: "hsl(var(--hand-secondary-400))",
            500: "hsl(var(--hand-secondary-500))",
            600: "hsl(var(--hand-secondary-600))",
            700: "hsl(var(--hand-secondary-700))",
            800: "hsl(var(--hand-secondary-800))",
            900: "hsl(var(--hand-secondary-900))",
            DEFAULT: "hsl(var(--hand-secondary-500))",
          },
          success: {
            50: "hsl(var(--hand-success-50))",
            100: "hsl(var(--hand-success-100))",
            200: "hsl(var(--hand-success-200))",
            300: "hsl(var(--hand-success-300))",
            400: "hsl(var(--hand-success-400))",
            500: "hsl(var(--hand-success-500))",
            600: "hsl(var(--hand-success-600))",
            700: "hsl(var(--hand-success-700))",
            800: "hsl(var(--hand-success-800))",
            900: "hsl(var(--hand-success-900))",
            DEFAULT: "hsl(var(--hand-success-500))",
          },
          warning: {
            50: "hsl(var(--hand-warning-50))",
            100: "hsl(var(--hand-warning-100))",
            200: "hsl(var(--hand-warning-200))",
            300: "hsl(var(--hand-warning-300))",
            400: "hsl(var(--hand-warning-400))",
            500: "hsl(var(--hand-warning-500))",
            600: "hsl(var(--hand-warning-600))",
            700: "hsl(var(--hand-warning-700))",
            800: "hsl(var(--hand-warning-800))",
            900: "hsl(var(--hand-warning-900))",
            DEFAULT: "hsl(var(--hand-warning-500))",
          },
          neutral: {
            50: "hsl(var(--hand-neutral-50))",
            100: "hsl(var(--hand-neutral-100))",
            200: "hsl(var(--hand-neutral-200))",
            300: "hsl(var(--hand-neutral-300))",
            400: "hsl(var(--hand-neutral-400))",
            500: "hsl(var(--hand-neutral-500))",
            600: "hsl(var(--hand-neutral-600))",
            700: "hsl(var(--hand-neutral-700))",
            800: "hsl(var(--hand-neutral-800))",
            900: "hsl(var(--hand-neutral-900))", /* was wrong in original */
            DEFAULT: "hsl(var(--hand-neutral-500))",
          },
        },
        "hand-text-primary": "hsl(var(--hand-text-primary))",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll": "scroll 40s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxHeight: {
        "screen-90": "90vh",
        "screen-80": "80vh",
      },
    },
  },
  plugins: [],
};

export default config;

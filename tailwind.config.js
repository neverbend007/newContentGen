/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
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
        background: {
          light: '#F8FAFC',
          dark: '#0F172A',
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          lightest: '#87CEEB', // Light blue
          light: '#20B2AA',    // Turquoise
          DEFAULT: '#003366',  // Dark blue
          yellow: '#FFD700',   // Yellow
          orange: '#FF8C00',   // Dark orange
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: '#E63B0C', // Orange
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
          DEFAULT: '#FF0DDF', // Hot magenta
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
        neutral: {
          silver: '#CECCCC',
          black: '#000000',
          white: '#FFFFFF',
        },
        brand: {
          orange: '#E63B0C',  // Cinnabar
          magenta: '#FF0DDF', // Hot magenta
        },
        earth: {
          black: '#000000',
          darkblue: '#2F4F4F',
          beige: '#F5F5DC',
          tan: '#D2B48C',
          brown: '#696969',
        },
        'gradient-primary': {
          start: '#7DD3FC',
          middle: '#0EA5E9',
          end: '#0C4A6E',
        }
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
      gradientColorStops: {
        'primary-gradient': ['#7DD3FC', '#0EA5E9', '#0C4A6E'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, #F8FAFC, #FFFFFF)',
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              whiteSpace: 'pre-line',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}
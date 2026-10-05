/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        forest: {
          deep: 'var(--color-forest-deep)',
          mid: 'var(--color-forest-mid)',
          soft: 'var(--color-forest-soft)',
        },
        cream: 'var(--color-cream)',
        offwhite: 'var(--color-offwhite)',
        earth: 'var(--color-earth)',
        sunlight: 'var(--color-sunlight)',
        ink: {
          DEFAULT: 'var(--color-ink)',
          light: 'var(--color-ink-light)',
        },
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'card': 'var(--shadow-card)',
      },
      zIndex: {
        'header': '50',
        'drawer': '60',
        'bottom-bar': '70',
        'modal': '100',
      }
    },
  },
  plugins: [],
}

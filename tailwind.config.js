/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: '#2563eb',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: '#60a5fa',
            },
            blockquote: {
              borderLeftColor: '#60a5fa',
            },
          },
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    // Color classes for dynamic category colors
    'bg-emerald-100',
    'bg-emerald-500',
    'bg-emerald-900/30',
    'text-emerald-600',
    'text-emerald-700',
    'text-emerald-300',
    'text-emerald-400',
    'bg-blue-100',
    'bg-blue-500',
    'bg-blue-900/30',
    'text-blue-600',
    'text-blue-700',
    'text-blue-300',
    'text-blue-400',
    'bg-purple-100',
    'bg-purple-500',
    'bg-purple-900/30',
    'text-purple-600',
    'text-purple-700',
    'text-purple-300',
    'text-purple-400',
    'bg-orange-100',
    'bg-orange-500',
    'bg-orange-900/30',
    'text-orange-600',
    'text-orange-700',
    'text-orange-300',
    'text-orange-400',
    'bg-cyan-100',
    'bg-cyan-500',
    'bg-cyan-900/30',
    'text-cyan-600',
    'text-cyan-700',
    'text-cyan-300',
    'text-cyan-400',
    'bg-gray-100',
    'bg-gray-500',
    'bg-gray-900/30',
    'text-gray-600',
    'text-gray-700',
    'text-gray-300',
    'text-gray-400',
  ],
};
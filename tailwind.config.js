/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        popup: 'popup 0.152s ease-out forwards ',
      },
    },
    keyframes: {
      pan: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      popup: {
        '0%': {
          transform: 'translateY(-50%) translateX(-50%)',
          opacity: '0.0',
        },
        '100%': {
          transform: 'translateY(-175%) translateX(-50%)',
          opacity: '1',
        },
      },
    },
  },
  plugins: [],
};

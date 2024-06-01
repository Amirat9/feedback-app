/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          color: '#fff',
          border: '0',
          borderRadius: '8px',
          width: '100px',
          height: '40px',
          cursor: 'pointer',
        },
        '.btn-primary': {
          backgroundColor: '#202142',
        },
        '.btn-secondary': {
          backgroundColor: '#ff6a95',
        },
        'btn:hover': {
          transform: 'scale(0.98)',
          opacity: '0.9',
        },
        '.btn:disabled': {
          backgroundColor: '#ccc',
          color: '#333',
          cursor: 'auto',
        },
        '.btn:disabled:hover': {
          transform: 'scale(1)',
          opacity: '1',
        },
      });
    },
  ],
};

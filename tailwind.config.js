/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#6d6d6d',
          700: '#505050',
          800: '#303030',
          900: '#1a1a1a',
        },
        primary: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#6d6d6d',
          700: '#505050',
          800: '#303030',
          900: '#1a1a1a',
        },
        accent: {
          light: '#88ccff',
          DEFAULT: '#2196f3',
          dark: '#0c7cd5',
        },
        'light-blue': '#88ccff',
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
        'display': ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'sharp': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'minimal': '0 2px 5px rgba(0, 0, 0, 0.05)',
      },
      textShadow: {
        'white': '0 0 1px rgba(255, 255, 255, 0.5)',
        'glow': '0 0 8px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'minimal-texture': 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm1 1h18v18H1V1z\' fill=\'%23000000\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")',
        'blue-texture': 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme('textShadow', {})).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });
      addUtilities(newUtilities);
    }
  ],
};

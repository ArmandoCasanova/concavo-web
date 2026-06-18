/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          aguacate: '#7E9F35', // Fresh, vibrant avocado pulp green
          oscuro: '#1F2E14',   // Dark, mature Hass skin green
          claro: '#A3C655',    // Soft light green
          brand: '#3B4E24',    // Corporate dark olive green
        },
        crema: {
          suave: '#FAF8F2',    // Creamy interior flesh tone / soft off-white
          hueso: '#F3EFE3',    // Light warm neutral tone
        },
        tierra: {
          mate: '#2E251E',     // Volcanic fertile soil of Michoacán
          clara: '#5C4E43',    // Warm earth accent
        },
        oro: {
          aceite: '#C49A45',   // Golden avocado oil accent
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}



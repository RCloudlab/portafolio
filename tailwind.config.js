/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',    // Fondo total
          surface: '#0F1115', // Tarjetas / Bento
          neon: '#10B981',    // Verde esmeralda (Acento)
          electric: '#0070F3',// Azul (Detalles)
          muted: '#94A3B8',   // Texto secundario
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
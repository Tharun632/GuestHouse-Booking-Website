const { addIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        'xs': '320px',     // Small smartphones
        'sm': '576px',     // Large smartphones
        'md': '768px',     // Tablets
        'lg': '992px',     // Laptops/Desktops
        'xl': '1200px',    // Large Laptops
        '2xl': '1400px',   // Extra Large screens
        '3xl': '1600px',   // 4K and Ultra-wide screens
        
        // Device-specific breakpoints
        'mobile': {'max': '767px'},
        'tablet': {'min': '768px', 'max': '991px'},
        'desktop': {'min': '992px'},
        
        // Orientation breakpoints
        'landscape': {'raw': '(orientation: landscape)'},
        'portrait': {'raw': '(orientation: portrait)'}
        
      },
    },
  },
  plugins: [
    addIconSelectors(['mdi', 'mdi-light']),
  ],
}

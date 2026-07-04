/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Wavelength palette — a record store after closing, lights low
        vinyl: {
          black: '#0F0E0D',   // main background — matte black sleeve
          panel: '#1A1816',   // card / panel surface
          groove: '#2A2723',  // borders, dividers — the groove of a record
        },
        cream: '#F2ECE1',     // primary text — label paper
        smoke: '#A39D93',     // secondary text — dust on the shelf
        copper: {
          DEFAULT: '#C6752B', // primary accent — aged copper tonearm
          bright: '#E08A3C',
        },
        felt: '#4A7C59',      // secondary accent — turntable mat green
      },
      fontFamily: {
        // Display: Instrument Serif — a record-label headline feel
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        // Body: Manrope — clean, warm geometric sans
        body: ['Manrope', 'system-ui', 'sans-serif'],
        // Utility: Space Mono — for prices, catalog numbers, ticket data
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        sleeve: '2px', // near-square, like a record sleeve corner
      },
    },
  },
  plugins: [],
}

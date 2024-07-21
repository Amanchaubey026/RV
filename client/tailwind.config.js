// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan for class names in your source files
    'node_modules/flowbite-react/lib/esm/**/*.js' // Include Flowbite React components
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
    },
  },
  plugins: [
    flowbitePlugin, // Add Flowbite as a plugin
  ],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff0080',
        'electric-blue': '#00d4ff',
        'cyber-purple': '#8b5cf6',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
        // Light theme colors
        'light-card': '#ffffff',
        'light-text': '#1e293b',
        'light-gray': '#64748b'
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'modern': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

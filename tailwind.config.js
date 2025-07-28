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
        // Your existing colors - preserved exactly
        'neon-pink': '#ff0080',
        'electric-blue': '#00d4ff',
        'cyber-purple': '#8b5cf6',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
        'light-card': '#ffffff',
        'light-text': '#1e293b',
        'light-gray': '#64748b',
        
        // Additional variations of your existing colors
        'neon-pink-dark': '#cc0066',
        'neon-pink-light': '#ff4da6',
        'electric-blue-dark': '#00a6cc',
        'electric-blue-light': '#33ddff',
        'cyber-purple-dark': '#7c3aed',
        'cyber-purple-light': '#a78bfa',
        
        // New complementary colors that work with your theme
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a2e',
        'dark-surface': '#16213e',
        'dark-border': '#2d3748',
        'dark-text': '#e2e8f0',
        
        // Additional accent colors
        'cyber-green': '#00ff88',
        'neon-yellow': '#ffff00',
        'electric-purple': '#bf00ff',
        
        // Semantic colors
        'success': '#22c55e',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6'
      },
      
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        // Additional font option
        'heading': ['Rajdhani', 'Inter', 'sans-serif']
      },
      
      // New additions for better cyber aesthetic
      boxShadow: {
        'neon': '0 0 20px rgba(255, 0, 128, 0.5)',
        'cyber': '0 0 30px rgba(139, 92, 246, 0.3)',
        'electric': '0 0 25px rgba(0, 212, 255, 0.4)'
      },
      
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}

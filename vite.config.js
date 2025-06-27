import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/ZZZ-damage-calculator/",
  server: {
    proxy: {
      // String shorthand: '/api' -> 'http://localhost:5173/api'
      '/api': {
        target: 'https://api.hakush.in', // The API server
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' from the start of the path
      },
    },
  },
})

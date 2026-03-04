import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration for personal portfolio
// Base path set for GitHub Pages deployment
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/personal/',
})

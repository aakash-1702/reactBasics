import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind should be configured via PostCSS (postcss.config.js) or tailwind.config.js
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

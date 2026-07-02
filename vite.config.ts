import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Pages la URL incluye el nombre del repo: usuario.github.io/NOMBRE-REPO/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    hmr: true,
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Ensure all routes are redirected to index.html
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  base: '/',
})

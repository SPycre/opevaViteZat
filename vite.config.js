import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base:"OpevaVite",
  plugins: [
    react(),
    reactRefresh(),
    compression(),
  ],
  build: { 
    chunkSizeWarningLimit: 1600, 
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // This is the key to deploy on GitHub Pages
  server: {
    host: '0.0.0.0',
  }
})

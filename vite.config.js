import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper routing
  server: {
    historyApiFallback: true, // Fixes broken links on reload
  },
  build: {
    outDir: 'dist', // Ensures clean build output
    sourcemap: true, // Helps in debugging
  }
});

import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for assets so it works on GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          peerjs: ['peerjs'],
          gun: ['gun'],
          simplex: ['simplex-noise']
        }
      }
    }
  }
});
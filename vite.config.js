import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 5555,
    open: true
  },
  preview: {
    port: 5555
  }
});
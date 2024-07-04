import { defineConfig } from 'vite';
import path from 'path';

const root = `${process.cwd()}`;

// https://vitejs.dev/config/
export default defineConfig({
  root: root,
  publicDir: 'src',
  build: {
    target: 'es2015',
    outDir: `${path.resolve(__dirname)}/dist/out`,
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,

    rollupOptions: {
      input: {
        desktop: `${path.resolve(root, 'src/js/desktop.js')}/`,
        config: `${path.resolve(root, 'src/js/config.js')}/`,
      },
      output: {
        manualChunks: {},
        entryFileNames: 'js/[name].js',
        assetFileNames: 'js/[name][extname]',
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [],
});

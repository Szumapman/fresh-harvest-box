import { defineConfig } from 'vite';
import path from 'path';
import posthtml from '@vituum/vite-plugin-posthtml';
import posthtmlInclude from 'posthtml-include';

export default defineConfig({
  root: '.',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  },

  plugins: [
    posthtml({
      plugins: [
        posthtmlInclude({
          root: path.resolve(__dirname, 'src/partials')
        })
      ]
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "variables" as *;`,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src/styles')]
        }
      }
    }
  }
});

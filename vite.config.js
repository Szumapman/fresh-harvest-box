import { defineConfig } from 'vite';
import path from 'path';
import posthtml from '@vituum/vite-plugin-posthtml';

export default defineConfig({
  plugins: [posthtml()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "variables" as *;`,
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/styles')
          ]
        }
      }
    }
  }
});
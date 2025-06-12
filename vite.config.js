import { defineConfig } from 'vite';
import posthtml from '@vituum/vite-plugin-posthtml';

export default defineConfig({
  plugins: [posthtml()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
});

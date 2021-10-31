import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy';
import * as path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']  
    }),
  ],
  resolve: {
    alias: {
      "app": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/view/components")
    }
  }
})

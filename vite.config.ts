import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    svgLoader({
      defaultImport: 'component',
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'app': fileURLToPath(new URL('./src/app', import.meta.url)),
      'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      'widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      'features': fileURLToPath(new URL('./src/features', import.meta.url)),
      'entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      'shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
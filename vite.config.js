import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

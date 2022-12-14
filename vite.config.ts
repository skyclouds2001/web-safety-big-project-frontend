import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ElementPlus from 'unplugin-element-plus/vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), vueJsx(), ElementPlus(), eslint()],
  css: {
    postcss: '.postcssrc',
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

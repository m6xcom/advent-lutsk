import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@scss' : path.resolve(__dirname, './src/assets/scss'),
      '@img'  : path.resolve(__dirname, './src/assets/img'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@pages' : path.resolve(__dirname, './src/pages')
    },
  },
  plugins: [react()],
})

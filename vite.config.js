import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const path = require('path')
const fs = require('fs');

export default defineConfig({
  resolve:{
    alias:{
      '@scss' : path.resolve(__dirname, './src/assets/scss'),
      '@img'  : path.resolve(__dirname, './src/assets/img'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@pages' : path.resolve(__dirname, './src/pages')
    },
  },
  plugins: [
    // createSvgIconsPlugin({
    //   // Specify the icon folder to be cached
    //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    //   // Specify symbolId format
    //   symbolId: 'icon-[dir]-[name]',
    // }),
    react()
  ],
})

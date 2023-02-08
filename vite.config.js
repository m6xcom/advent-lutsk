import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
const path = require('path')
const fs = require('fs');

export default defineConfig({
  resolve:{
    alias:{
      '@scss' : path.resolve(__dirname, './src/assets/scss'),
      '@img'  : path.resolve(__dirname, './src/assets/img'),
      '@icons'  : path.resolve(__dirname, './src/assets/icons'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@pages' : path.resolve(__dirname, './src/pages')
    },
  },
  plugins: [
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
    react()
  ],
})

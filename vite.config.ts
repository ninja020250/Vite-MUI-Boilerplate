/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@configs': resolve(__dirname, 'src/configs'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@styles': resolve(__dirname, 'src/styles'),
      },
    },
  }
})

/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { execSync } from 'child_process'

const buildDateTime = new Date().toISOString()
const appVersion = execSync('git rev-parse --short HEAD').toString().trim()

// https://vitejs.dev/config
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_BUILD_DATETIME': JSON.stringify(buildDateTime),
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(appVersion),
    },
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
        '@services': resolve(__dirname, 'src/services'),
        '@stores': resolve(__dirname, 'src/stores'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@icons': resolve(__dirname, 'src/icons'),
        '@models': resolve(__dirname, 'src/models'),
        '@context': resolve(__dirname, 'src/context'),
        '@public': resolve(__dirname, 'public'),
      },
    },
  }
})

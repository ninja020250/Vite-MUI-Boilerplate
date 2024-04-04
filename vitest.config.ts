import { resolve } from 'path'
import { defineConfig, configDefaults, mergeConfig } from 'vitest/config'

export default defineConfig({
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
  test: {
    retry: 1,
    testTimeout: 10000,
    setupFiles: resolve(__dirname, 'test/setup-test.ts'),
    exclude: [...configDefaults.exclude, 'src/assets', 'src/namespaces', 'src/type'],
    coverage: {
      enabled: true,
      provider: 'v8',
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      reportsDirectory: resolve(__dirname, 'test/report/coverage/'),
      reporter: ['html', 'clover', 'lcov', 'json'],
    },
    reporters: 'vitest-sonar-reporter',
    outputFile: {
      'vitest-sonar-reporter': resolve(__dirname, 'test/report/sonar-report.xml'),
    },
    environment: 'jsdom',
  },
})

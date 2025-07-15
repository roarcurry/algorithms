import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [
        AutoImport({
            imports: ['vitest'],
        }),
    ],
    test: {
        environment: 'node',
        include: ['src/leetcode/**/*.ts'],
    },
})

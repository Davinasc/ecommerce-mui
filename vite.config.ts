import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

const viteConfig = () => {
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
};

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: false,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});

export default defineConfig(() => {
  return mergeConfig(viteConfig(), vitestConfig);
});

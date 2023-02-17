import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dist/4yot-manager-app',
  },
  server: {
    port: 3038,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    //setupFiles: 'src/setupTests.ts',
    css: true,
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/'],
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});

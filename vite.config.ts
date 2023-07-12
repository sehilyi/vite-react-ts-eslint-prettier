import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// config for demo
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                app: './demo/index.html'
            }
        }
    },
    server: {
        open: './demo/index.html'
    }
});

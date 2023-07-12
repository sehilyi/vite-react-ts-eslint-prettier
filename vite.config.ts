import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const lib = defineConfig({
    build: {
        emptyOutDir: false,
        outDir: 'dist',
        minify: false,
        target: 'es2018',
        sourcemap: true,
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: 'index'
        }
    }
});

const dev = defineConfig({
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

export default ({ mode }) => {
    if (mode === 'lib') return lib;
    return dev;
};

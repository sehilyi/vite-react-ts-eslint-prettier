/// <reference types="vitest" />
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
    base: '/vite-react-ts-eslint-prettier/',
    plugins: [react()],
    root: './demo',
    build: {
        outDir: '../build'
    },
    test: {
        include: ['../**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        globals: true
    }
});

export default ({ mode }) => {
    if (mode === 'lib') return lib;
    return dev;
};

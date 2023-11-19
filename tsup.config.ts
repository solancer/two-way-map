import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Your library's entry point
    format: ['cjs', 'esm', 'iife'], // Output formats: CommonJS, ES Module, and IIFE for browsers
    splitting: false, // Disable code splitting
    sourcemap: true, // Include source maps
    clean: true, // Clean the dist folder before building
    dts: true, // Generate declaration files
});

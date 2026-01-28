import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from "node:path"
import solid from 'vite-plugin-solid';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        'src/index.ts',
        'src/components/Button.tsx',
        'src/components/Tooltip.tsx',
        'src/theme.css'
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      treeshake: {
        moduleSideEffects: false,
      },
    },
    sourcemap: true,
  },
  plugins: [
    solid(),
    dts({
      entryRoot: 'src',
    }),
  ],
});

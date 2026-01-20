import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solid from 'vite-plugin-solid';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: ['src/index.ts', 'src/theme.css'],
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

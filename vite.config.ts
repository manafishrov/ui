import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solid from 'vite-plugin-solid';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        'src/index.ts',
        'src/components/Button.tsx',
        'src/components/Spinner.tsx',
        'src/components/Switch.tsx',
        'src/components/Table.tsx',
        'src/components/Textarea.tsx',
        'src/components/Tooltip.tsx',
        'src/components/Toaster.tsx',
        'src/theme.css',
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'solid-js',
        'solid-js/web',
        '@solid-primitives/i18n',
        '@ark-ui/solid/toast',
        '@ark-ui/solid/tooltip',
        '@ark-ui/solid/switch',
        'solid-icons/md',
        'tailwind-variants',
      ],
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

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
        'src/components/Dialog.tsx',
        'src/components/Input.tsx',
        'src/components/Label.tsx',
        'src/components/Link.tsx',
        'src/components/Popover.tsx',
        'src/components/Progress.tsx',
        'src/components/RadioGroup.tsx',
        'src/components/ScrollArea.tsx',
        'src/components/Select.tsx',
        'src/components/Separator.tsx',
        'src/components/Sheet.tsx',
        'src/components/sidebar/index.ts',
        'src/components/Skeleton.tsx',
        'src/components/Slider.tsx',
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
        '@tanstack/solid-router',
        '@solid-primitives/i18n',
        '@ark-ui/solid/toast',
        '@ark-ui/solid/tooltip',
        '@ark-ui/solid/switch',
        '@ark-ui/solid/popover',
        '@ark-ui/solid/progress',
        '@ark-ui/solid/slider',
        '@ark-ui/solid/radio-group',
        '@ark-ui/solid/dialog',
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

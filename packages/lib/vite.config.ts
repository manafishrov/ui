import { paraglideVitePlugin } from '@inlang/paraglide-js';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import dts from 'unplugin-dts/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
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
        'src/components/Accordion.tsx',
        'src/components/AlertDialog.tsx',
        'src/components/AspectRatio.tsx',
        'src/components/Avatar.tsx',
        'src/components/Badge.tsx',
        'src/components/Breadcrumb.tsx',
        'src/components/Button.tsx',
        'src/components/Card.tsx',
        'src/components/Carousel.tsx',
        'src/components/Checkbox.tsx',
        'src/components/Collapsible.tsx',
        'src/components/Combobox.tsx',
        'src/components/DatePicker.tsx',
        'src/components/Dialog.tsx',
        'src/components/Empty.tsx',
        'src/components/Field.tsx',
        'src/components/form/index.ts',
        'src/components/HoverCard.tsx',
        'src/components/InputGroup.tsx',
        'src/components/Item.tsx',
        'src/components/Kbd.tsx',
        'src/components/Link.tsx',
        'src/components/Marquee.tsx',
        'src/components/marquee/index.ts',
        'src/components/Menu.tsx',
        'src/components/MenuCombobox.tsx',
        'src/components/NavigationMenu.tsx',
        'src/components/NumberInput.tsx',
        'src/components/Pagination.tsx',
        'src/components/PasswordInput.tsx',
        'src/components/PinInput.tsx',
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
        'src/components/Splitter.tsx',
        'src/components/Swap.tsx',
        'src/components/Switch.tsx',
        'src/components/Table.tsx',
        'src/components/Tabs.tsx',
        'src/components/TagsInput.tsx',
        'src/components/TextInput.tsx',
        'src/components/toaster/index.ts',
        'src/components/Toggle.tsx',
        'src/components/Tooltip.tsx',
        'src/components/TreeView.tsx',
        'src/components/Typography.tsx',
        'src/theme.css',
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'solid-js',
        'solid-js/web',
        '@tanstack/solid-router',
        '@tanstack/solid-form',
        'tailwindcss',
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
    paraglideVitePlugin({
      project: './i18n',
      outdir: './src/paraglide',
      strategy: ['globalVariable', 'baseLocale'],
      emitTsDeclarations: true,
    }),
    Icons({
      compiler: 'solid',
    }),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/autoImports.d.ts',
    }),
    solid(),
    dts({
      tsconfigPath: './tsconfig.json',
    }),
  ],
});

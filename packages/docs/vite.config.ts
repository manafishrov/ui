import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    tailwindcss(),
    paraglideVitePlugin({
      project: './i18n',
      outdir: './src/paraglide',
      strategy: ['url', 'cookie', 'baseLocale'],
      emitTsDeclarations: true,
    }),
    tanstackRouter({
      target: 'solid',
      autoCodeSplitting: true,
    }),
    Icons({
      compiler: 'solid',
    }),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/auto-imports.d.ts',
    }),
    solid(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['solid-js', '@tanstack/solid-router', '@tanstack/solid-form', 'tailwindcss'],
  },
});

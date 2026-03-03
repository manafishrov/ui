import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { fileURLToPath } from 'node:url';
import autoImport from 'unplugin-auto-import/vite';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

const srcAlias = fileURLToPath(new URL('src', import.meta.url));
const libThemePath = fileURLToPath(new URL('../lib/dist/theme.css', import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    paraglideVitePlugin({
      project: './i18n.inlang',
      outdir: './src/paraglide',
      strategy: ['url', 'cookie', 'baseLocale'],
      emitTsDeclarations: true,
    }),
    tanstackRouter({
      target: 'solid',
      autoCodeSplitting: true,
    }),
    icons({
      compiler: 'solid',
    }),
    autoImport({
      imports: ['solid-js'],
      dts: './src/autoImports.d.ts',
    }),
    solid(),
  ],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': srcAlias,
      '@manafishrov/ui/theme': libThemePath,
    },
    dedupe: ['solid-js', '@tanstack/solid-router', '@tanstack/solid-form', 'tailwindcss'],
  },
});

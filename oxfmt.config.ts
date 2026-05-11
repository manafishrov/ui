import { defineConfig } from 'oxfmt';

export default defineConfig({
  ignorePatterns: [
    'dist',
    'node_modules',
    'bun.lock',
    '**/*.tsbuildinfo',
    '**/autoImports.d.ts',
    '**/paraglide/**',
    '**/i18n.inlang/.meta.json',
    '**/*.gen.ts',
  ],
  singleQuote: true,
  jsxSingleQuote: true,
  sortImports: {
    groups: [
      'type-import',
      ['value-builtin', 'value-external'],
      'type-internal',
      'value-internal',
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
      'unknown',
    ],
  },
  sortTailwindcss: {
    stylesheet: './packages/lib/src/theme.css',
    functions: ['tv', 'cn', 'cx', 'cnMerge'],
    preserveWhitespace: true,
  },
  sortPackageJson: {
    sortScripts: true,
  },
});

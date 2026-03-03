# @manafishrov/ui

A very opinionated component library for Manafish interfaces.

## Dependencies

The consumer project requires these peer dependencies:

- `solid-js`
- `tailwindcss`
- `@tanstack/solid-router`
- `@tanstack/solid-form`
- `unplugin-icons`
- `@iconify-json/ic`

## Usage

### 1. Import the theme in your CSS

```css
@import 'tailwindcss';
@import '@manafishrov/ui/theme';
```

### 2. Wrap your app with providers

```tsx
import { LocaleProvider, ThemeProvider } from '@manafishrov/ui';

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider locale='en'>{/* your app */}</LocaleProvider>
    </ThemeProvider>
  );
}
```

## License

AGPL-3.0-or-later

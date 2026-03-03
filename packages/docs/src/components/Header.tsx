import { createListCollection } from '@manafishrov/ui';
import { Link } from '@manafishrov/ui/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIndicator,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@manafishrov/ui/select';
import { createEffect, createSignal, onMount, type Component } from 'solid-js';

import { getLocale, isLocale, locales, setLocale } from '@/paraglide/runtime';

const THEMES = ['light', 'dark', 'system'] as const;
type Theme = (typeof THEMES)[number];

const getLocaleLabel = (locale: string): string => {
  const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
  const label = displayNames.of(locale);
  if (typeof label !== 'string') {
    return locale;
  }
  return label.charAt(0).toUpperCase() + label.slice(1);
};

const isTheme = (value: string): value is Theme => (THEMES as readonly string[]).includes(value);

const applyTheme = (theme: Theme): void => {
  const isDarkBySystem = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && isDarkBySystem);
  document.documentElement.classList.toggle('dark', isDark);
};

const readStoredTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme !== null && isTheme(storedTheme)) {
    return storedTheme;
  }
  return 'system';
};

const localeCollection = createListCollection({
  items: locales.map((locale) => ({
    value: locale,
    label: getLocaleLabel(locale),
  })),
});

const themeCollection = createListCollection({
  items: THEMES.map((theme) => ({
    value: theme,
    label: theme.charAt(0).toUpperCase() + theme.slice(1),
  })),
});

const LocaleSelect: Component = () => (
  <Select
    collection={localeCollection}
    value={[getLocale()]}
    onValueChange={(details) => {
      const [newLocale] = details.value;
      if (typeof newLocale === 'string' && isLocale(newLocale)) {
        Promise.resolve(setLocale(newLocale)).catch((error: unknown) => {
          globalThis.reportError(error);
        });
      }
    }}
  >
    <SelectTrigger>
      <SelectValue />
      <SelectIndicator />
    </SelectTrigger>
    <SelectPositioner>
      <SelectContent>
        <SelectGroup>
          {localeCollection.items.map((item) => (
            <SelectItem item={item}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPositioner>
  </Select>
);

const ThemeSelect: Component<{ theme: Theme; onThemeChange: (theme: Theme) => void }> = (props) => (
  <Select
    collection={themeCollection}
    value={[props.theme]}
    onValueChange={(details) => {
      const [newTheme] = details.value;
      if (typeof newTheme === 'string' && isTheme(newTheme)) {
        props.onThemeChange(newTheme);
      }
    }}
  >
    <SelectTrigger>
      <SelectValue />
      <SelectIndicator />
    </SelectTrigger>
    <SelectPositioner>
      <SelectContent>
        <SelectGroup>
          {themeCollection.items.map((item) => (
            <SelectItem item={item}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectPositioner>
  </Select>
);

export const Header: Component = () => {
  const [theme, setTheme] = createSignal<Theme>('system');

  onMount(() => {
    setTheme(readStoredTheme());
  });

  createEffect(() => {
    const current = theme();
    localStorage.setItem('theme', current);
    applyTheme(current);
  });

  return (
    <header class='top-0 backdrop-blur sticky z-50 shrink-0 border-b border-border bg-background/95 supports-backdrop-filter:bg-background/60'>
      <div class='px-4 py-4 container mx-auto'>
        <nav class='gap-6 flex items-center justify-between'>
          <Link to='/' class='text-lg font-semibold font-branding hover:text-primary'>
            Manafish UI
          </Link>
          <div class='gap-2 flex'>
            <LocaleSelect />
            <ThemeSelect theme={theme()} onThemeChange={setTheme} />
          </div>
        </nav>
      </div>
    </header>
  );
};

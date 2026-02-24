import { createListCollection } from '@manafishrov/ui';
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
import { Link } from '@tanstack/solid-router';
import { createEffect, createSignal, onMount, type Component } from 'solid-js';

import { getLocale, isLocale, locales, setLocale } from '@/paraglide/runtime';

const THEMES = ['light', 'dark', 'system'] as const;
type Theme = (typeof THEMES)[number];

function getLocaleLabel(locale: string): string {
  const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
  const label = displayNames.of(locale);
  if (!label) return locale;
  return label.charAt(0).toUpperCase() + label.slice(1);
}

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

export const Header: Component = () => {
  const [theme, setTheme] = createSignal<Theme>('system');

  onMount(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && THEMES.includes(stored)) setTheme(stored);
  });

  createEffect(() => {
    const current = theme();
    localStorage.setItem('theme', current);

    const isDark =
      current === 'dark' ||
      (current === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDark);
  });

  return (
    <header class='top-0 backdrop-blur sticky z-50 shrink-0 border-b border-border bg-background/95 supports-backdrop-filter:bg-background/60'>
      <div class='px-4 py-4 container mx-auto'>
        <nav class='gap-6 flex items-center justify-between'>
          <Link to='/' class='text-lg font-semibold font-branding hover:text-primary'>
            Manafish UI
          </Link>
          <div class='gap-2 flex'>
            <Select
              collection={localeCollection}
              value={[getLocale()]}
              onValueChange={(details) => {
                const newLocale = details.value[0];
                if (newLocale && isLocale(newLocale)) setLocale(newLocale);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder='Language' />
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
            <Select
              collection={themeCollection}
              value={[theme()]}
              onValueChange={(details) => {
                const newTheme = details.value[0] as Theme;
                if (newTheme) setTheme(newTheme);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder='Theme' />
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
          </div>
        </nav>
      </div>
    </header>
  );
};

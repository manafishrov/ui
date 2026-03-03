import type { Component, JSXElement } from 'solid-js';

export type Theme = 'light' | 'dark' | 'system';

export type ThemeProviderProps = {
  theme?: Theme;
  defaultTheme?: Theme;
  storageKey?: string;
  children: JSXElement;
};

type ThemeContextValue = {
  theme: () => Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: () => 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextValue>();
const DEFAULT_STORAGE_KEY = 'theme';
const DARK_THEME_QUERY = '(prefers-color-scheme: dark)';

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof globalThis.matchMedia !== 'function') {
    return 'light';
  }
  return globalThis.matchMedia(DARK_THEME_QUERY).matches ? 'dark' : 'light';
};

const readStoredTheme = (storageKey: string, defaultTheme: Theme): Theme => {
  if (globalThis.localStorage === undefined) {
    return defaultTheme;
  }
  const stored = globalThis.localStorage.getItem(storageKey);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return defaultTheme;
};

const applyRootThemeClass = (resolvedTheme: () => 'light' | 'dark'): void => {
  createEffect(
    on(resolvedTheme, (resolved) => {
      const root = document.documentElement;
      root.classList.toggle('dark', resolved === 'dark');
    }),
  );
};

const createSystemThemeListener = (
  setSystemTheme: (theme: 'light' | 'dark') => void,
): (() => void) => {
  if (typeof globalThis.matchMedia !== 'function') {
    return (): void => {
      setSystemTheme(getSystemTheme());
    };
  }
  const mediaQuery = globalThis.matchMedia(DARK_THEME_QUERY);
  const handleChange = (mediaQueryEvent: MediaQueryListEvent): void => {
    setSystemTheme(mediaQueryEvent.matches ? 'dark' : 'light');
  };
  mediaQuery.addEventListener('change', handleChange);
  return (): void => {
    mediaQuery.removeEventListener('change', handleChange);
  };
};

export const ThemeProvider: Component<ThemeProviderProps> = (props) => {
  const storageKey = (): string => props.storageKey ?? DEFAULT_STORAGE_KEY;
  const fallbackTheme = (): Theme => props.defaultTheme ?? 'system';
  const [theme, setThemeState] = createSignal<Theme>(
    props.theme ?? readStoredTheme(storageKey(), fallbackTheme()),
  );
  const [systemTheme, setSystemTheme] = createSignal<'light' | 'dark'>(getSystemTheme());

  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
    if (globalThis.localStorage !== undefined) {
      globalThis.localStorage.setItem(storageKey(), newTheme);
    }
  };

  const resolvedTheme = (): 'light' | 'dark' => {
    const current = theme();
    return current === 'system' ? systemTheme() : current;
  };

  onMount(() => createSystemThemeListener(setSystemTheme));

  createEffect(
    on(
      () => props.theme,
      (propTheme) => {
        if (typeof propTheme === 'string') {
          setThemeState(propTheme);
        }
      },
    ),
  );
  applyRootThemeClass(resolvedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

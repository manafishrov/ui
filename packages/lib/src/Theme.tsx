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

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: Component<ThemeProviderProps> = (props) => {
  const storageKey = () => props.storageKey ?? 'theme';

  const getStoredTheme = (): Theme => {
    if (typeof window === 'undefined') {
      return props.defaultTheme ?? 'system';
    }
    const stored = localStorage.getItem(storageKey());
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
    return props.defaultTheme ?? 'system';
  };

  const [theme, setThemeState] = createSignal<Theme>(props.theme ?? getStoredTheme());
  const [systemTheme, setSystemTheme] = createSignal<'light' | 'dark'>(getSystemTheme());

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey(), newTheme);
    }
  };

  const resolvedTheme = () => {
    const current = theme();
    return current === 'system' ? systemTheme() : current;
  };

  onMount(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });

  createEffect(
    on(
      () => props.theme,
      (propTheme) => {
        if (propTheme !== undefined) {
          setThemeState(propTheme);
        }
      },
    ),
  );

  createEffect(
    on(resolvedTheme, (resolved) => {
      const root = document.documentElement;
      root.classList.toggle('dark', resolved === 'dark');
    }),
  );

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

import { LocaleProvider as PrimitiveLocaleProvider } from '@ark-ui/solid/locale';
import { type Component, type JSXElement, splitProps, createEffect } from 'solid-js';

import { type Locale, setLocale, locales, baseLocale } from './paraglide/runtime';

export { locales, baseLocale, type Locale };

export type LocaleProviderProps = {
  locale: Locale;
  children: JSXElement;
};

export const LocaleProvider: Component<LocaleProviderProps> = (props) => {
  const [local] = splitProps(props, ['locale', 'children']);

  createEffect(() => {
    setLocale(local.locale, { reload: false });
  });

  return <PrimitiveLocaleProvider locale={local.locale}>{local.children}</PrimitiveLocaleProvider>;
};

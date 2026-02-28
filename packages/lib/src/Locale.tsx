import { LocaleProvider as PrimitiveLocaleProvider } from '@ark-ui/solid/locale';
import { type Component, type JSXElement, splitProps, createEffect } from 'solid-js';

import { type Locale, setLocale } from './paraglide/runtime';

export type LocaleProviderProps = {
  locale: Locale;
  children: JSXElement;
};

export const LocaleProvider: Component<LocaleProviderProps> = (props) => {
  const [local] = splitProps(props, ['locale', 'children']);

  createEffect(() => {
    const result = setLocale(local.locale, { reload: false });
    if (result instanceof Promise) {
      result.catch(() => 0);
    }
  });

  return <PrimitiveLocaleProvider locale={local.locale}>{local.children}</PrimitiveLocaleProvider>;
};

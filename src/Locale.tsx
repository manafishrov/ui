import { LocaleProvider } from '@ark-ui/solid/locale';
import * as i18n from '@solid-primitives/i18n';
import { createContext, useContext, createMemo, type JSX } from 'solid-js';

import { dict as enGB } from './locales/en-GB';
import { dict as nb } from './locales/nb';

const libDicts = {
  'en-GB': enGB,
  nb: nb,
};

export type RawDictionary = typeof enGB;
export type FlattenedDictionary = i18n.Flatten<RawDictionary>;

export type Translator = i18n.Translator<FlattenedDictionary & i18n.BaseRecordDict, string>;

const LocaleContext = createContext<Translator>();

export type LocaleProviderProps = {
  locale: keyof typeof libDicts;
  dict?: i18n.BaseRecordDict;
  children: JSX.Element;
};

export function I18nProvider(props: LocaleProviderProps): JSX.Element {
  const combinedDict = createMemo((): i18n.BaseRecordDict => {
    const lib = libDicts[props.locale] || enGB;
    const merged = Object.assign({}, lib, props.dict);

    return i18n.flatten(merged);
  });

  const t = i18n.translator(combinedDict, i18n.resolveTemplate);

  return (
    <LocaleProvider locale={props.locale}>
      <LocaleContext.Provider value={t as Translator}>{props.children}</LocaleContext.Provider>
    </LocaleProvider>
  );
}

export function useI18n(): Translator {
  return useContext(LocaleContext) ?? (((path: string): string => path) as Translator);
}

import * as i18n from '@solid-primitives/i18n';
import { type JSX, createContext, createMemo, useContext } from 'solid-js';
import { LocaleProvider } from '@ark-ui/solid/locale';

import { dict as enGB } from './locales/en-gb';
import { dict as nb } from './locales/nb';

const libDicts = {
  'en-GB': enGB,
  nb: nb,
};

export type RawDictionary = typeof enGB;
export type FlattenedDictionary = i18n.Flatten<RawDictionary>;

export type Translator = i18n.Translator<FlattenedDictionary & i18n.BaseRecordDict, string>;

const LocaleContext = createContext<Translator>();

export type I18nProviderProps = {
  locale: keyof typeof libDicts;
  dict?: i18n.BaseRecordDict;
  children: JSX.Element;
};

export const I18nProvider = (props: I18nProviderProps): JSX.Element => {
  const combinedDict = createMemo((): i18n.BaseRecordDict => {
    const lib = libDicts[props.locale] || enGB;
    const merged = Object.assign(Object.create(null), lib, props.dict);

    return i18n.flatten(merged);
  });

  const translator = i18n.translator(combinedDict, i18n.resolveTemplate);

  return (
    <LocaleProvider locale={props.locale}>
      <LocaleContext.Provider value={translator as Translator}>{props.children}</LocaleContext.Provider>
    </LocaleProvider>
  );
};

export const useI18n = (): Translator =>
  useContext(LocaleContext) ?? (((path: string): string => path) as Translator);

import * as i18n from '@solid-primitives/i18n';
import { createContext, useContext, createMemo, type JSX } from 'solid-js';

import { dict as en } from './locales/en';

const libDicts = { en };

export type RawDictionary = typeof en;
export type FlattenedDictionary = i18n.Flatten<RawDictionary>;

export type Translator = i18n.Translator<FlattenedDictionary & i18n.BaseRecordDict, string>;

const I18nContext = createContext<Translator>();

export type I18nProviderProps = {
  locale: keyof typeof libDicts;
  dict?: i18n.BaseRecordDict;
  children: JSX.Element;
};

export function I18nProvider(props: I18nProviderProps): JSX.Element {
  const combinedDict = createMemo((): i18n.BaseRecordDict => {
    const lib = libDicts[props.locale] || en;
    const merged = Object.assign({}, lib, props.dict);

    return i18n.flatten(merged);
  });

  const t = i18n.translator(combinedDict, i18n.resolveTemplate);

  return <I18nContext.Provider value={t as Translator}>{props.children}</I18nContext.Provider>;
}

export function useI18n(): Translator {
  return useContext(I18nContext) ?? (((path: string): string => path) as Translator);
}

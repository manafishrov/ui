import { LocaleProvider as PrimitiveLocaleProvider } from '@ark-ui/solid/locale';
import {
  type BaseRecordDict,
  type Flatten,
  type Translator as PrimitiveTranslator,
  flatten,
  translator as primitiveTranslator,
  resolveTemplate,
} from '@solid-primitives/i18n';
import { type JSX, createContext, createMemo, useContext } from 'solid-js';

import { dict as enGB } from '@/locales/enGb';
import { dict as nb } from '@/locales/nb';

const libDicts = {
  'en-GB': enGB,
  nb: nb,
};

export type RawDictionary = typeof enGB;
export type FlattenedDictionary = Flatten<RawDictionary>;

export type Translator = PrimitiveTranslator<FlattenedDictionary & BaseRecordDict>;

const LocaleContext = createContext<Translator>();

export type LocaleProviderProps = {
  locale: keyof typeof libDicts;
  dict?: BaseRecordDict;
  children: JSX.Element;
};

// oxlint-disable-next-line typescript-eslint/no-unsafe-type-assertion
const fallbackTranslator = ((path: string): string => path) as Translator;

export const LocaleProvider = (props: LocaleProviderProps): JSX.Element => {
  const combinedDict = createMemo((): BaseRecordDict => {
    const lib = libDicts[props.locale] ?? enGB;
    const merged = { ...lib, ...props.dict };

    return flatten(merged);
  });

  const translator = primitiveTranslator(combinedDict, resolveTemplate);

  return (
    <PrimitiveLocaleProvider locale={props.locale}>
      <LocaleContext.Provider value={translator as Translator}>
        {props.children}
      </LocaleContext.Provider>
    </PrimitiveLocaleProvider>
  );
};

export const useLocale = (): Translator => {
  const context = useContext(LocaleContext);
  if (context) {
    return context;
  }
  return fallbackTranslator;
};

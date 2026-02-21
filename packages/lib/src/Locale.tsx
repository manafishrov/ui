import { LocaleProvider as PrimitiveLocaleProvider } from '@ark-ui/solid/locale';
import {
  type BaseRecordDict,
  type Flatten,
  type Translator as PrimitiveTranslator,
  flatten,
  translator as primitiveTranslator,
  resolveTemplate,
} from '@solid-primitives/i18n';
import { type Component, type JSXElement, createContext, createMemo, useContext } from 'solid-js';

import { enGb } from '@/locales/enGb';
import { nb } from '@/locales/nb';

const libDicts = {
  'en-GB': enGb,
  nb: nb,
};

export type RawDictionary = typeof enGb;
export type FlattenedDictionary = Flatten<RawDictionary>;

export type Translator = PrimitiveTranslator<FlattenedDictionary & BaseRecordDict>;

const LocaleContext = createContext<Translator>();

export type LocaleProviderProps = {
  locale: keyof typeof libDicts;
  dict?: BaseRecordDict;
  children: JSXElement;
};

// oxlint-disable-next-line typescript-oxlint/no-unsafe-type-assertion
const fallbackTranslator = ((path: string): string => path) as Translator;

export const LocaleProvider: Component<LocaleProviderProps> = (props) => {
  const combinedDict = createMemo((): BaseRecordDict => {
    const lib = libDicts[props.locale] ?? enGb;
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

import type { ComboboxRootProps } from '@ark-ui/solid';
import type { Component, ComponentProps } from 'solid-js';

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxPositioner,
  ComboboxControl,
  ComboboxTrigger,
  ComboboxClearTrigger,
} from '@/components/Combobox';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';

import { useFieldContext } from './context';

const COMBOBOX_ROOT_PROPS = [
  'placeholder',
  'inputBehavior',
  'openOnChange',
  'openOnClick',
  'openOnKeyPress',
  'closeOnSelect',
  'allowCustomValue',
  'multiple',
  'selectionBehavior',
  'autoFocus',
  'loopFocus',
  'positioning',
  'alwaysSubmitOnEnter',
  'composite',
  'defaultHighlightedValue',
  'defaultInputValue',
  'defaultOpen',
  'defaultValue',
  'disableLayer',
  'highlightedValue',
  'ids',
  'immediate',
  'inputValue',
  'lazyMount',
  'navigate',
  'onExitComplete',
  'onFocusOutside',
  'onHighlightChange',
  'onInputValueChange',
  'onInteractOutside',
  'onOpenChange',
  'onPointerDownOutside',
  'onSelect',
  'open',
  'present',
  'scrollToIndexFn',
  'skipAnimationOnMount',
  'translations',
  'unmountOnExit',
] as const;

export type ComboboxFieldProps = ComponentProps<typeof ComboboxInput> &
  Pick<ComponentProps<typeof Combobox<string>>, (typeof COMBOBOX_ROOT_PROPS)[number]> & {
    collection: ComboboxRootProps<string>['collection'];
    label?: string;
    description?: string;
    showTrigger?: boolean;
    showClearTrigger?: boolean;
  } & { class?: string };

const ComboboxInputGroup: Component<
  ComponentProps<typeof ComboboxInput> & {
    showTrigger?: boolean | undefined;
    showClearTrigger?: boolean | undefined;
  }
> = (props) => {
  const [local, others] = splitProps(props, ['showTrigger', 'showClearTrigger', 'children']);

  return (
    <>
      <ComboboxControl>
        <ComboboxInput {...others} />
        <div class='gap-1 flex items-center'>
          {local.showClearTrigger === true && <ComboboxClearTrigger />}
          {local.showTrigger === true && <ComboboxTrigger />}
        </div>
      </ComboboxControl>
      <ComboboxPositioner>
        <ComboboxContent>
          <ComboboxList>{local.children}</ComboboxList>
        </ComboboxContent>
      </ComboboxPositioner>
    </>
  );
};

const COMBOBOX_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'collection',
  'showTrigger',
  'showClearTrigger',
  'children',
] as const;

export const ComboboxField: Component<ComboboxFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, COMBOBOX_FIELD_PROPS);
  const [rootProps, inputProps] = splitProps(others, COMBOBOX_ROOT_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <Combobox<string>
          collection={local.collection}
          value={field().state.value}
          onValueChange={(details) => {
            field().handleChange(details.value);
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          {...rootProps}
        >
          <ComboboxInputGroup
            showTrigger={local.showTrigger}
            showClearTrigger={local.showClearTrigger}
            {...inputProps}
          >
            {local.children}
          </ComboboxInputGroup>
        </Combobox>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

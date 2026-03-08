import type { Component, ComponentProps, JSX, JSXElement } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';
import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

const SelectInput: Component<{
  placeholder: string;
  showSelectIndicator: boolean | undefined;
  children: JSX.Element;
}> = (props) => (
  <>
    <SelectControl>
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
        <Show when={props.showSelectIndicator !== false}>
          <SelectIndicator />
        </Show>
      </SelectTrigger>
    </SelectControl>
    <SelectPositioner>
      <SelectContent>{props.children}</SelectContent>
    </SelectPositioner>
  </>
);

export type SelectFieldProps = ComponentProps<typeof Select> & {
  label?: string;
  description?: string;
  placeholder?: string;
  showSelectIndicator?: boolean;
  trailingAddon?: JSXElement;
};

const SELECT_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'placeholder',
  'showSelectIndicator',
  'children',
  'trailingAddon',
] as const;

export const SelectField: Component<SelectFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, SELECT_FIELD_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <WithTrailingAddon addon={local.trailingAddon}>
          <Select
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
            {...others}
          >
            <SelectInput
              placeholder={local.placeholder ?? ''}
              showSelectIndicator={local.showSelectIndicator}
            >
              {local.children}
            </SelectInput>
          </Select>
        </WithTrailingAddon>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

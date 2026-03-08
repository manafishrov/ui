import type { Component, ComponentProps, JSX, JSXElement } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';
import {
  Select,
  SelectContent,
  SelectControl,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';

import { useFieldContext } from './context';

const SelectInput: Component<{ placeholder: string; children: JSX.Element }> = (props) => (
  <>
    <SelectControl>
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
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
  trailingAddon?: JSXElement;
};

export const SelectField: Component<SelectFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'placeholder',
    'children',
    'trailingAddon',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <Show
          when={local.trailingAddon}
          fallback={
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
              <SelectInput placeholder={local.placeholder ?? ''}>{local.children}</SelectInput>
            </Select>
          }
        >
          <div class='gap-2 flex items-center'>
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
              <SelectInput placeholder={local.placeholder ?? ''}>{local.children}</SelectInput>
            </Select>
            {local.trailingAddon}
          </div>
        </Show>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

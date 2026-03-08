import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import { TextInputControl, TextInputInput } from '@/components/TextInput';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

export type TextInputFieldProps = ComponentProps<typeof TextInputInput> & {
  label?: string;
  description?: string;
  trailingAddon?: JSXElement;
};

export const TextInputField: Component<TextInputFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'trailingAddon',
    'required',
    'disabled',
    'readOnly',
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
        <WithTrailingAddon addon={local.trailingAddon}>
          <TextInputControl>
            <TextInputInput
              value={field().state.value}
              onInput={(event) => {
                field().handleChange(event.target.value);
              }}
              onBlur={() => {
                field().handleBlur();
              }}
              {...others}
            />
          </TextInputControl>
        </WithTrailingAddon>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import { TextInputControl, TextInputArea } from '@/components/TextInput';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

export type TextareaFieldProps = ComponentProps<typeof TextInputArea> & {
  label?: string;
  description?: string;
  trailingAddon?: JSXElement;
};

export const TextareaField: Component<TextareaFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
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
        <WithTrailingAddon addon={local.trailingAddon}>
          <TextInputControl>
            <TextInputArea
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

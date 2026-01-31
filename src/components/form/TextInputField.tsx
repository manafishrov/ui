import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, type JSXElement, splitProps } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import { TextInput, TextInputControl, TextInputInput } from '@/components/TextInput';

import { useFieldContext } from './context';

export type TextInputFieldProps = ComponentProps<typeof TextInputInput> & {
  label?: string;
  description?: string;
};

export const TextInputField: Component<TextInputFieldProps> = (props): JSXElement => {
  const field = useFieldContext<string>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
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
        <TextInput
          id={primitiveField().ids.control}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          required={local.required ?? false}
        >
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
        </TextInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

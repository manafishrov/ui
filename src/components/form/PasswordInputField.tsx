import { type Component, type ComponentProps, type JSXElement, splitProps } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
} from '@/components/PasswordInput';

import { ZERO } from './constants';
import { useFieldContext } from './context';

export type PasswordInputFieldProps = ComponentProps<typeof PasswordInputInput> & {
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export const PasswordInputField: Component<PasswordInputFieldProps> = (props): JSXElement => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length !== ZERO}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <PasswordInputControl>
          <PasswordInputInput
            value={field().state.value}
            onInput={(event) => {
              field().handleChange(event.target.value);
            }}
            onBlur={() => {
              field().handleBlur();
            }}
            {...others}
          />
          <PasswordInputVisibilityTrigger />
        </PasswordInputControl>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

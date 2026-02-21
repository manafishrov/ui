import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, splitProps } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
} from '@/components/PasswordInput';

import { useFieldContext } from './context';

export type PasswordInputFieldProps = ComponentProps<typeof PasswordInputInput> & {
  label?: string;
  description?: string;
};

export const PasswordInputField: Component<PasswordInputFieldProps> = (props) => {
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
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <PasswordInput
          id={primitiveField().ids.control}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          required={local.required ?? false}
        >
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
        </PasswordInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

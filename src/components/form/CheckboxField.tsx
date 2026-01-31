import { type Component, type ComponentProps, splitProps } from 'solid-js';

import { Checkbox } from '@/components/Checkbox';
import { Field, FieldContent, FieldError, FieldDescription } from '@/components/Field';

import { useFieldContext } from './context';

export type CheckboxFieldProps = ComponentProps<typeof Checkbox> & {
  description?: string;
};

export const CheckboxField: Component<CheckboxFieldProps> = (props) => {
  const field = useFieldContext<boolean>();
  const [local, others] = splitProps(props, ['description', 'required', 'disabled', 'readOnly']);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldContent>
        <Checkbox
          checked={field().state.value}
          onCheckedChange={(details) => {
            field().handleChange(Boolean(details.checked));
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          required={local.required ?? false}
          {...others}
        />
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

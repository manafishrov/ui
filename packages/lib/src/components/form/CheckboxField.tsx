import { type Component, type ComponentProps, type JSX, splitProps } from 'solid-js';

import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxLabel } from '@/components/Checkbox';
import { Field, FieldContent, FieldDescription, FieldError } from '@/components/Field';

import { useFieldContext } from './context';

export type CheckboxFieldProps = ComponentProps<typeof Checkbox> & {
  description?: string;
  label?: JSX.Element;
};

export const CheckboxField: Component<CheckboxFieldProps> = (props) => {
  const field = useFieldContext<boolean>();
  const [local, others] = splitProps(props, [
    'description',
    'label',
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
        >
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
          <CheckboxLabel>{local.label}</CheckboxLabel>
        </Checkbox>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

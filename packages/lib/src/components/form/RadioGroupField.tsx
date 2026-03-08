import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { Field, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import { RadioGroup, RadioGroupLabel } from '@/components/RadioGroup';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

export type RadioGroupFieldProps = ComponentProps<typeof RadioGroup> & {
  label?: string;
  description?: string;
  trailingAddon?: JSXElement;
};

export const RadioGroupField: Component<RadioGroupFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'children',
    'trailingAddon',
  ]);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldContent>
        <WithTrailingAddon addon={local.trailingAddon}>
          <RadioGroup
            value={field().state.value}
            onValueChange={(details) => {
              field().handleChange(details.value ?? '');
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
            <RadioGroupLabel>{local.label}</RadioGroupLabel>
            {local.children}
          </RadioGroup>
        </WithTrailingAddon>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

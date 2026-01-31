import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, type JSXElement, splitProps } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  NumberInput,
  NumberInputControl,
  NumberInputInput,
  NumberInputTriggers,
} from '@/components/NumberInput';

import { ZERO } from './constants';
import { useFieldContext } from './context';

export type NumberInputFieldProps = ComponentProps<typeof NumberInput> & {
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export const NumberInputField: Component<NumberInputFieldProps> = (props): JSXElement => {
  const field = useFieldContext<number>();
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
      invalid={field().state.meta.errors.length !== ZERO}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <NumberInput
          id={primitiveField().ids.control}
          value={String(field().state.value)}
          onValueChange={(details) => {
            field().handleChange(details.valueAsNumber);
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          disabled={local.disabled}
          readOnly={local.readOnly}
          {...others}
        >
          <NumberInputControl>
            <NumberInputInput />
            <NumberInputTriggers />
          </NumberInputControl>
        </NumberInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

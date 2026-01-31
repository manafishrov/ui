import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, type JSXElement, splitProps, Index } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputHiddenInput,
} from '@/components/PinInput';

import { ZERO, DEFAULT_PIN_COUNT } from './constants';
import { useFieldContext } from './context';

export type PinInputFieldProps = ComponentProps<typeof PinInput> & {
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export const PinInputField: Component<PinInputFieldProps> = (props): JSXElement => {
  const field = useFieldContext<string[]>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'count',
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
        <PinInput
          ids={{ control: primitiveField().ids.control }}
          value={field().state.value}
          onValueChange={(details) => {
            field().handleChange(details.value);
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          disabled={local.disabled}
          readOnly={local.readOnly}
          {...others}
        >
          <PinInputControl>
            <Index each={Array.from({ length: local.count ?? DEFAULT_PIN_COUNT })}>
              {(_, index) => <PinInputInput index={index} />}
            </Index>
          </PinInputControl>
          <PinInputHiddenInput />
        </PinInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

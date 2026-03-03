import { splitProps, type Component, type ComponentProps, Index } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputGroup,
  PinInputHiddenInput,
} from '@/components/PinInput';

import { useFieldContext } from './context';

export type PinInputFieldProps = ComponentProps<typeof PinInput> & {
  label?: string;
  description?: string;
  count?: number;
};

const DEFAULT_PIN_COUNT = 6;
const PIN_INPUT_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'count',
] as const;

const PinInputDigits: Component<{ count: number }> = (props) => (
  <PinInputControl>
    <PinInputGroup>
      <Index each={Array.from({ length: props.count })}>
        {(_, index) => <PinInputInput index={index} />}
      </Index>
    </PinInputGroup>
  </PinInputControl>
);

export const PinInputField: Component<PinInputFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, PIN_INPUT_FIELD_PROPS);
  const pinCount = local.count ?? DEFAULT_PIN_COUNT;

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <PinInput
          value={field().state.value}
          onValueChange={(details) => {
            field().handleChange(details.value);
          }}
          onBlur={() => {
            field().handleBlur();
          }}
          invalid={field().state.meta.errors.length > 0}
          disabled={local.disabled ?? false}
          readOnly={local.readOnly ?? false}
          required={local.required ?? false}
          count={pinCount}
          {...others}
        >
          <PinInputDigits count={pinCount} />
          <PinInputHiddenInput />
        </PinInput>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

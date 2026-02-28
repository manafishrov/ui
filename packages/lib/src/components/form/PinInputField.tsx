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

export const PinInputField: Component<PinInputFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
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
          count={local.count ?? DEFAULT_PIN_COUNT}
          {...others}
        >
          <PinInputControl>
            <PinInputGroup>
              <Index each={Array.from({ length: local.count ?? DEFAULT_PIN_COUNT })}>
                {(_, index) => <PinInputInput index={index} />}
              </Index>
            </PinInputGroup>
          </PinInputControl>
          <PinInputHiddenInput />
        </PinInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

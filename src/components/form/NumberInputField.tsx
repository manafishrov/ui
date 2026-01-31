import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, Show, splitProps } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  NumberInput,
  NumberInputControl,
  NumberInputInput,
  NumberInputTriggers,
} from '@/components/NumberInput';

import { useFieldContext } from './context';

export type NumberInputFieldProps = ComponentProps<typeof NumberInput> & {
  label?: string;
  description?: string;
  triggers?: boolean;
};

export const NumberInputField: Component<NumberInputFieldProps> = (props) => {
  const field = useFieldContext<number>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'triggers',
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
        <NumberInput
          id={primitiveField().ids.control}
          value={String(field().state.value)}
          onValueChange={(details) => {
            field().handleChange(details.valueAsNumber);
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
          <NumberInputControl>
            <NumberInputInput />
            <Show when={local.triggers !== false}>
              <NumberInputTriggers />
            </Show>
          </NumberInputControl>
        </NumberInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

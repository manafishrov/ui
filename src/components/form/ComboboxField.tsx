import type { ComboboxRootProps } from '@ark-ui/solid';

import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, splitProps } from 'solid-js';

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxPositioner,
} from '@/components/Combobox';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';

import { useFieldContext } from './context';

export type ComboboxFieldProps = ComboboxRootProps<string> & {
  label?: string;
  description?: string;
  showTrigger?: boolean;
  showClear?: boolean;
};

const ComboboxInputGroup: Component<ComponentProps<typeof ComboboxInput>> = (props) => (
  <>
    <ComboboxInput
      placeholder={props.placeholder}
      showTrigger={props.showTrigger}
      showClear={props.showClear}
    />
    <ComboboxPositioner>
      <ComboboxContent>
        <ComboboxList>{props.children}</ComboboxList>
      </ComboboxContent>
    </ComboboxPositioner>
  </>
);

export const ComboboxField: Component<ComboboxFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'placeholder',
    'showTrigger',
    'showClear',
    'children',
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
        <Combobox
          ids={{ control: primitiveField().ids.control }}
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
          {...others}
        >
          <ComboboxInputGroup
            placeholder={local.placeholder}
            showTrigger={local.showTrigger}
            showClear={local.showClear}
          >
            {local.children}
          </ComboboxInputGroup>
        </Combobox>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, type JSX, splitProps } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';
import {
  Select,
  SelectContent,
  SelectControl,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';

import { useFieldContext } from './context';

const SelectInput: Component<{ placeholder: string; children: JSX.Element }> = (props) => (
  <>
    <SelectControl>
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
    </SelectControl>
    <SelectPositioner>
      <SelectContent>{props.children}</SelectContent>
    </SelectPositioner>
  </>
);

export type SelectFieldProps = ComponentProps<typeof Select> & {
  label?: string;
  description?: string;
  placeholder?: string;
};

export const SelectField: Component<SelectFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const primitiveField = usePrimitiveFieldContext();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'placeholder',
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
        <Select
          ids={{ trigger: primitiveField().ids.control }}
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
          {...others}
        >
          <SelectInput placeholder={local.placeholder ?? ''}>{local.children}</SelectInput>
        </Select>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

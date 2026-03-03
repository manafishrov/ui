import type { DatePickerInputProps, DatePickerRootProps, DateValue } from '@ark-ui/solid';
import type { Component } from 'solid-js';

import {
  DatePicker,
  DatePickerContent,
  DatePickerControl,
  DatePickerInput,
  DatePickerPositioner,
  DatePickerTrigger,
  DatePickerViews,
} from '@/components/DatePicker';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';

import { useFieldContext } from './context';

export type DatePickerFieldProps = DatePickerRootProps & {
  label?: string;
  description?: string;
};

const DatePickerInputGroup: Component<DatePickerInputProps> = (props) => (
  <>
    <DatePickerControl>
      <DatePickerInput {...props} />
      <DatePickerTrigger />
    </DatePickerControl>
    <DatePickerPositioner>
      <DatePickerContent>
        <DatePickerViews />
      </DatePickerContent>
    </DatePickerPositioner>
  </>
);

const DATE_PICKER_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'placeholder',
] as const;

export const DatePickerField: Component<DatePickerFieldProps> = (props) => {
  const field = useFieldContext<DateValue[]>();
  const [local, others] = splitProps(props, DATE_PICKER_FIELD_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <DatePicker
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
          <DatePickerInputGroup placeholder={local.placeholder} />
        </DatePicker>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

import type { DatePickerInputProps, DateValue } from '@ark-ui/solid';
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

export type DatePickerFieldProps = DatePickerInputProps & {
  label?: string;
  description?: string;
  showTrigger?: boolean;
};

const DatePickerInputGroup: Component<DatePickerInputProps & { showTrigger?: boolean }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['showTrigger']);

  return (
    <>
      <DatePickerControl>
        <DatePickerInput {...others} />
        <Show when={local.showTrigger !== false}>
          <DatePickerTrigger />
        </Show>
      </DatePickerControl>
      <DatePickerPositioner>
        <DatePickerContent>
          <DatePickerViews />
        </DatePickerContent>
      </DatePickerPositioner>
    </>
  );
};

const DATE_PICKER_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'placeholder',
  'showTrigger',
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
        >
          <DatePickerInputGroup
            {...others}
            placeholder={local.placeholder}
            {...(typeof local.showTrigger === 'boolean' && { showTrigger: local.showTrigger })}
          />
        </DatePicker>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

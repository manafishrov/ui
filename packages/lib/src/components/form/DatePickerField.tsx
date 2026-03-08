import type { DatePickerInputProps, DateValue } from '@ark-ui/solid';
import type { Component, ComponentProps, JSXElement } from 'solid-js';

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

const DATE_PICKER_ROOT_PROPS = [
  'min',
  'max',
  'locale',
  'timeZone',
  'format',
  'parse',
  'selectionMode',
  'numOfMonths',
  'fixedWeeks',
  'startOfWeek',
  'showWeekNumbers',
  'outsideDaySelectable',
  'isDateUnavailable',
  'openOnClick',
  'positioning',
  'closeOnSelect',
  'defaultFocusedValue',
  'defaultOpen',
  'defaultValue',
  'defaultView',
  'focusedValue',
  'ids',
  'immediate',
  'inline',
  'lazyMount',
  'maxSelectedDates',
  'maxView',
  'minView',
  'name',
  'onExitComplete',
  'onFocusChange',
  'onOpenChange',
  'onValueChange',
  'onViewChange',
  'onVisibleRangeChange',
  'open',
  'present',
  'skipAnimationOnMount',
  'translations',
  'unmountOnExit',
  'view',
] as const;

export type DatePickerFieldProps = DatePickerInputProps &
  Pick<ComponentProps<typeof DatePicker>, (typeof DATE_PICKER_ROOT_PROPS)[number]> & {
    label?: string;
    description?: string;
    showTrigger?: boolean;
    trailingAddon?: JSXElement;
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
  'trailingAddon',
] as const;

export const DatePickerField: Component<DatePickerFieldProps> = (props) => {
  const field = useFieldContext<DateValue[]>();
  const [local, others] = splitProps(props, DATE_PICKER_FIELD_PROPS);
  const [rootProps, inputProps] = splitProps(others, DATE_PICKER_ROOT_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <Show
          when={local.trailingAddon}
          fallback={
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
              {...rootProps}
            >
              <DatePickerInputGroup
                {...inputProps}
                placeholder={local.placeholder}
                {...(typeof local.showTrigger === 'boolean' && { showTrigger: local.showTrigger })}
              />
            </DatePicker>
          }
        >
          <div class='gap-2 flex items-center'>
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
              {...rootProps}
            >
              <DatePickerInputGroup
                {...inputProps}
                placeholder={local.placeholder}
                {...(typeof local.showTrigger === 'boolean' && { showTrigger: local.showTrigger })}
              />
            </DatePicker>
            {local.trailingAddon}
          </div>
        </Show>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

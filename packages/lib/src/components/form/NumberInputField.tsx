import type { Component, ComponentProps, JSX } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  NumberInput,
  NumberInputControl,
  NumberInputInput,
  NumberInputTriggers,
} from '@/components/NumberInput';

import { useFieldContext } from './context';

export type NumberInputFieldProps = ComponentProps<typeof NumberInputInput> & {
  label?: string;
  description?: string;
  showTriggers?: boolean;
};

const toNumberInputValue = (value: number | undefined): string => {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return '';
  }

  return String(value);
};

type NumberInputFieldLocalProps = Pick<
  NumberInputFieldProps,
  'label' | 'description' | 'required' | 'disabled' | 'readOnly' | 'showTriggers'
>;

type RenderNumberInputFieldProps = {
  field: ReturnType<typeof useFieldContext<number>>;
  local: NumberInputFieldLocalProps;
  others: Omit<NumberInputFieldProps, keyof NumberInputFieldLocalProps>;
  inputValue: () => string;
  onValueChange: NonNullable<ComponentProps<typeof NumberInput>['onValueChange']>;
  onValueCommit: NonNullable<ComponentProps<typeof NumberInput>['onValueCommit']>;
  onBlur: () => void;
};

type NumberInputFieldState = Pick<
  RenderNumberInputFieldProps,
  'inputValue' | 'onValueChange' | 'onValueCommit' | 'onBlur'
>;

const createNumberInputFieldState = (
  field: ReturnType<typeof useFieldContext<number>>,
): NumberInputFieldState => {
  const [inputValue, setInputValue] = createSignal(toNumberInputValue(field().state.value));

  createEffect(() => {
    setInputValue(toNumberInputValue(field().state.value));
  });

  const onValueChange: NonNullable<ComponentProps<typeof NumberInput>['onValueChange']> = (
    details,
  ) => {
    setInputValue(details.value);
  };

  const onValueCommit: NonNullable<ComponentProps<typeof NumberInput>['onValueCommit']> = (
    details,
  ) => {
    setInputValue(details.value);

    if (!Number.isFinite(details.valueAsNumber)) {
      return;
    }

    field().handleChange(details.valueAsNumber);
  };

  const onBlur = (): void => {
    setInputValue(toNumberInputValue(field().state.value));
    field().handleBlur();
  };

  return {
    inputValue,
    onValueChange,
    onValueCommit,
    onBlur,
  };
};

const renderNumberInputField = (props: RenderNumberInputFieldProps): JSX.Element => (
  <Field
    invalid={props.field().state.meta.errors.length > 0}
    required={props.local.required ?? false}
    disabled={props.local.disabled ?? false}
    readOnly={props.local.readOnly ?? false}
  >
    <FieldLabel>{props.local.label}</FieldLabel>
    <FieldContent>
      <NumberInput
        value={props.inputValue()}
        onValueChange={props.onValueChange}
        onValueCommit={props.onValueCommit}
        onBlur={props.onBlur}
        invalid={props.field().state.meta.errors.length > 0}
        disabled={props.local.disabled ?? false}
        readOnly={props.local.readOnly ?? false}
        required={props.local.required ?? false}
      >
        <NumberInputControl>
          <NumberInputInput {...props.others} />
          <Show when={props.local.showTriggers !== false}>
            <NumberInputTriggers />
          </Show>
        </NumberInputControl>
      </NumberInput>
      <FieldError errors={props.field().state.meta.errors} />
      <FieldDescription>{props.local.description}</FieldDescription>
    </FieldContent>
  </Field>
);

export const NumberInputField: Component<NumberInputFieldProps> = (props) => {
  const field = useFieldContext<number>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'showTriggers',
  ]);
  const state = createNumberInputFieldState(field);

  return renderNumberInputField({
    field,
    local,
    others,
    inputValue: state.inputValue,
    onValueChange: state.onValueChange,
    onValueCommit: state.onValueCommit,
    onBlur: state.onBlur,
  });
};

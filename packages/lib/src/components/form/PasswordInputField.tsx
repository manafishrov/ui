import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@/components/Field';
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputInput,
  PasswordInputVisibilityTrigger,
  PasswordInputIndicator,
} from '@/components/PasswordInput';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

export type PasswordInputFieldProps = ComponentProps<typeof PasswordInputInput> & {
  label?: string;
  description?: string;
  showVisibilityTrigger?: boolean;
  trailingAddon?: JSXElement;
};

const PASSWORD_INPUT_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'showVisibilityTrigger',
  'trailingAddon',
] as const;

type PasswordInputFieldLocalProps = Pick<
  PasswordInputFieldProps,
  (typeof PASSWORD_INPUT_FIELD_PROPS)[number]
>;

const PasswordInputFieldControl: Component<{
  field: ReturnType<typeof useFieldContext<string>>;
  local: PasswordInputFieldLocalProps;
  others: Omit<PasswordInputFieldProps, keyof PasswordInputFieldLocalProps>;
}> = (props) => (
  <WithTrailingAddon addon={props.local.trailingAddon}>
    <PasswordInput
      invalid={props.field().state.meta.errors.length > 0}
      disabled={props.local.disabled ?? false}
      readOnly={props.local.readOnly ?? false}
      required={props.local.required ?? false}
    >
      <PasswordInputControl>
        <PasswordInputInput
          value={props.field().state.value}
          onInput={(event) => {
            props.field().handleChange(event.target.value);
          }}
          onBlur={() => {
            props.field().handleBlur();
          }}
          {...props.others}
        />
        <Show when={props.local.showVisibilityTrigger !== false}>
          <PasswordInputVisibilityTrigger>
            <PasswordInputIndicator />
          </PasswordInputVisibilityTrigger>
        </Show>
      </PasswordInputControl>
    </PasswordInput>
  </WithTrailingAddon>
);

export const PasswordInputField: Component<PasswordInputFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, PASSWORD_INPUT_FIELD_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      required={local.required ?? false}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <PasswordInputFieldControl field={field} local={local} others={others} />
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

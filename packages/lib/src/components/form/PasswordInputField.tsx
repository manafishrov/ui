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

export type PasswordInputFieldProps = ComponentProps<typeof PasswordInputInput> & {
  label?: string;
  description?: string;
  showVisibilityTrigger?: boolean;
  trailingAddon?: JSXElement;
};

export const PasswordInputField: Component<PasswordInputFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const [local, others] = splitProps(props, [
    'label',
    'description',
    'required',
    'disabled',
    'readOnly',
    'showVisibilityTrigger',
    'trailingAddon',
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
        <Show
          when={local.trailingAddon}
          fallback={
            <PasswordInput
              invalid={field().state.meta.errors.length > 0}
              disabled={local.disabled ?? false}
              readOnly={local.readOnly ?? false}
              required={local.required ?? false}
            >
              <PasswordInputControl>
                <PasswordInputInput
                  value={field().state.value}
                  onInput={(event) => {
                    field().handleChange(event.target.value);
                  }}
                  onBlur={() => {
                    field().handleBlur();
                  }}
                  {...others}
                />
                <Show when={local.showVisibilityTrigger !== false}>
                  <PasswordInputVisibilityTrigger>
                    <PasswordInputIndicator />
                  </PasswordInputVisibilityTrigger>
                </Show>
              </PasswordInputControl>
            </PasswordInput>
          }
        >
          <div class='gap-2 flex items-center'>
            <PasswordInput
              invalid={field().state.meta.errors.length > 0}
              disabled={local.disabled ?? false}
              readOnly={local.readOnly ?? false}
              required={local.required ?? false}
            >
              <PasswordInputControl>
                <PasswordInputInput
                  value={field().state.value}
                  onInput={(event) => {
                    field().handleChange(event.target.value);
                  }}
                  onBlur={() => {
                    field().handleBlur();
                  }}
                  {...others}
                />
                <Show when={local.showVisibilityTrigger !== false}>
                  <PasswordInputVisibilityTrigger>
                    <PasswordInputIndicator />
                  </PasswordInputVisibilityTrigger>
                </Show>
              </PasswordInputControl>
            </PasswordInput>
            {local.trailingAddon}
          </div>
        </Show>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';
import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputHiddenInput,
  TagsInputInput,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
} from '@/components/TagsInput';

import { useFieldContext } from './context';
import { WithTrailingAddon } from './WithTrailingAddon';

const TAGS_INPUT_ROOT_PROPS = [
  'max',
  'maxLength',
  'delimiter',
  'addOnPaste',
  'blurBehavior',
  'validate',
  'autoFocus',
  'editable',
  'allowOverflow',
  'translations',
  'ids',
  'onFocusOutside',
  'onHighlightChange',
  'onInputValueChange',
  'onInteractOutside',
  'onPointerDownOutside',
  'onValueInvalid',
] as const;

export type TagsInputFieldProps = ComponentProps<typeof TagsInputInput> &
  Pick<ComponentProps<typeof TagsInput>, (typeof TAGS_INPUT_ROOT_PROPS)[number]> & {
    label?: string;
    description?: string;
    showClearTrigger?: boolean;
    trailingAddon?: JSXElement;
  };

const TagsInputGroup: Component<
  { showClearTrigger?: boolean } & ComponentProps<typeof TagsInputInput>
> = (props) => {
  const [local, others] = splitProps(props, ['children', 'showClearTrigger']);

  return (
    <>
      <TagsInputContext>
        {(context) => (
          <TagsInputControl>
            <For each={context().value}>
              {(value, index) => (
                <TagsInputItem index={index()} value={value}>
                  <TagsInputItemPreview>
                    <TagsInputItemText>{value}</TagsInputItemText>
                    <TagsInputItemDeleteTrigger />
                  </TagsInputItemPreview>
                  <TagsInputItemInput />
                </TagsInputItem>
              )}
            </For>
            <TagsInputInput {...others} />
            <Show when={local.showClearTrigger !== false}>
              <TagsInputClearTrigger />
            </Show>
            {local.children}
          </TagsInputControl>
        )}
      </TagsInputContext>
      <TagsInputHiddenInput />
    </>
  );
};

const TAGS_INPUT_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'showClearTrigger',
  'trailingAddon',
] as const;

export const TagsInputField: Component<TagsInputFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, TAGS_INPUT_FIELD_PROPS);
  const [rootProps, inputProps] = splitProps(others, TAGS_INPUT_ROOT_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
        <WithTrailingAddon addon={local.trailingAddon}>
          <TagsInput
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
            <TagsInputGroup
              {...inputProps}
              {...(typeof local.showClearTrigger === 'boolean' && {
                showClearTrigger: local.showClearTrigger,
              })}
            />
          </TagsInput>
        </WithTrailingAddon>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

import type { TagsInputRootProps } from '@ark-ui/solid';

import { type Component, splitProps, For } from 'solid-js';

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

export type TagsInputFieldProps = TagsInputRootProps & {
  label?: string;
  description?: string;
  placeholder?: string;
};

const TagsInputGroup: Component<{ placeholder?: string | undefined }> = (props) => (
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
          <TagsInputInput placeholder={props.placeholder} />
          <TagsInputClearTrigger />
        </TagsInputControl>
      )}
    </TagsInputContext>
    <TagsInputHiddenInput />
  </>
);

const TAGS_INPUT_FIELD_PROPS = [
  'label',
  'description',
  'required',
  'disabled',
  'readOnly',
  'placeholder',
] as const;

export const TagsInputField: Component<TagsInputFieldProps> = (props) => {
  const field = useFieldContext<string[]>();
  const [local, others] = splitProps(props, TAGS_INPUT_FIELD_PROPS);

  return (
    <Field
      invalid={field().state.meta.errors.length > 0}
      disabled={local.disabled ?? false}
      readOnly={local.readOnly ?? false}
      required={local.required ?? false}
    >
      <FieldLabel>{local.label}</FieldLabel>
      <FieldContent>
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
          {...others}
        >
          <TagsInputGroup placeholder={local.placeholder} />
        </TagsInput>
        <FieldError errors={field().state.meta.errors} />
        <FieldDescription>{local.description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

import type { TagsInputRootProps } from '@ark-ui/solid';

import { useFieldContext as usePrimitiveFieldContext } from '@ark-ui/solid/field';
import { type Component, For, splitProps } from 'solid-js';

import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/Field';
import {
  TagsInput,
  TagsInputContext,
  TagsInputControl,
  TagsInputHiddenInput,
  TagsInputInput,
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
                {value}
                <TagsInputItemDeleteTrigger />
              </TagsInputItem>
            )}
          </For>
          <TagsInputInput placeholder={props.placeholder} />
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
  const primitiveField = usePrimitiveFieldContext();
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
          <TagsInputGroup placeholder={local.placeholder} />
        </TagsInput>
        <FieldDescription>{local.description}</FieldDescription>
        <FieldError errors={field().state.meta.errors} />
      </FieldContent>
    </Field>
  );
};

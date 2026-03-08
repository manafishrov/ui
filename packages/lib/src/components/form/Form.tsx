import { createFormHook } from '@tanstack/solid-form';
import { splitProps, type Component, type ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { AutoSubmit } from './AutoSubmit';
import { CheckboxField } from './CheckboxField';
import { ComboboxField } from './ComboboxField';
import { fieldContext, formContext, useFormContext } from './context';
import { DatePickerField } from './DatePickerField';
import { NumberInputField } from './NumberInputField';
import { PasswordInputField } from './PasswordInputField';
import { PinInputField } from './PinInputField';
import { RadioGroupField } from './RadioGroupField';
import { SelectField } from './SelectField';
import { SliderField } from './SliderField';
import { SubmitButton } from './SubmitButton';
import { SwitchField } from './SwitchField';
import { TagsInputField } from './TagsInputField';
import { TextareaField } from './TextareaField';
import { TextInputField } from './TextInputField';

export type FormProps = Omit<ComponentProps<'form'>, 'onSubmit'>;

export const Form: Component<FormProps> = (props) => {
  const form = useFormContext();
  const [local, formProps] = splitProps(props, ['children', 'class']);

  return (
    <form
      class={cn('space-y-6 relative', local.class)}
      onSubmit={(submitEvent) => {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
        form.handleSubmit().catch((error: unknown) => {
          throw error;
        });
      }}
      {...formProps}
    >
      {local.children}
    </form>
  );
};

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    CheckboxField,
    ComboboxField,
    DatePickerField,
    NumberInputField,
    PasswordInputField,
    PinInputField,
    RadioGroupField,
    SelectField,
    SliderField,
    SwitchField,
    TagsInputField,
    TextInputField,
    TextareaField,
  },
  formComponents: {
    AutoSubmit,
    Form,
    SubmitButton,
  },
});

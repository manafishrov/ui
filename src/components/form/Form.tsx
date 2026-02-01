import { createFormHook } from '@tanstack/solid-form';

import { CheckboxField } from './CheckboxField';
import { ComboboxField } from './ComboboxField';
import { formContext, fieldContext } from './context';
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
    SubmitButton,
  },
});

import { createFormHook } from '@tanstack/solid-form';

import { CheckboxField } from './CheckboxField';
import { formContext, fieldContext } from './context';
import { NumberInputField } from './NumberInputField';
import { PasswordInputField } from './PasswordInputField';
import { PinInputField } from './PinInputField';
import { RadioGroupField } from './RadioGroupField';
import { SelectField } from './SelectField';
import { SliderField } from './SliderField';
import { SubmitButton } from './SubmitButton';
import { SwitchField } from './SwitchField';
import { TextareaField } from './TextareaField';
import { TextInputField } from './TextInputField';

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    CheckboxField,
    TextInputField,
    TextareaField,
    PasswordInputField,
    NumberInputField,
    PinInputField,
    RadioGroupField,
    SelectField,
    SliderField,
    SwitchField,
  },
  formComponents: {
    SubmitButton,
  },
});

import { createFormHook } from '@tanstack/solid-form';

import { formContext, fieldContext } from './context';
import { NumberInputField } from './NumberInputField';
import { PasswordInputField } from './PasswordInputField';
import { PinInputField } from './PinInputField';
import { SelectField } from './SelectField';
import { TextareaField } from './TextareaField';
import { TextInputField } from './TextInputField';

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    TextInputField,
    TextareaField,
    PasswordInputField,
    NumberInputField,
    PinInputField,
    SelectField,
  },
  formComponents: {},
});

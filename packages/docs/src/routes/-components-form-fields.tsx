import { createListCollection } from '@manafishrov/ui';
import { withForm } from '@manafishrov/ui/form';
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { SelectItem } from '@manafishrov/ui/select';

export type FormValues = {
  text: string;
  email: string;
  textarea: string;
  number: number;
  checkbox: boolean;
  radio: string;
  select: string[];
  slider: number[];
};

export const DEFAULT_SLIDER_VALUE = 50;
export const JSON_INDENT = 2;
export const MAX_MESSAGE_LENGTH = 500;
export const MAX_NUMBER_VALUE = 100;
export const MIN_SLIDER_VALUE = 10;
export const MIN_TEXT_LENGTH = 3;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

export const marks = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

export const countries = createListCollection({
  items: [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
  ],
});

export const toJsonReplacer = (_key: string, jsonValue: unknown): unknown => jsonValue;

export const DEMO_DEFAULT_VALUES: FormValues = {
  text: '',
  email: '',
  textarea: '',
  number: 0,
  checkbox: false,
  radio: '',
  select: [],
  slider: [DEFAULT_SLIDER_VALUE],
};

const validateText = (value: string): string | undefined => {
  if (value.trim() === '') {
    return 'Text is required';
  }
  if (value.length < MIN_TEXT_LENGTH) {
    return 'Text must be at least 3 characters';
  }
  return;
};

const validateEmail = (value: string): string | undefined => {
  if (value.trim() === '') {
    return 'Email is required';
  }
  if (!EMAIL_REGEX.test(value)) {
    return 'Please enter a valid email address';
  }
  return;
};

const validateNumber = (value: number): string | undefined => {
  if (value < 0) {
    return 'Value must be positive';
  }
  if (value > MAX_NUMBER_VALUE) {
    return 'Value must be less than 100';
  }
  return;
};

export const TextFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField name='text' validators={{ onChange: ({ value }) => validateText(value) }}>
      {(field) => (
        <field.TextInputField
          label='Text Input'
          description='A simple text input field with validation.'
          placeholder='Enter some text (min 3 chars)'
          required
        />
      )}
    </props.form.AppField>
  ),
});

export const EmailFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='email'
      validators={{ onChange: ({ value }) => validateEmail(value) }}
    >
      {(field) => (
        <field.TextInputField
          label='Email'
          description='Enter a valid email address.'
          placeholder='example@email.com'
          type='email'
          required
        />
      )}
    </props.form.AppField>
  ),
});

export const TextareaFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='textarea'
      validators={{
        onChange: ({ value }): string | undefined => {
          if (value.length > MAX_MESSAGE_LENGTH) {
            return 'Message must be less than 500 characters';
          }
          return;
        },
      }}
    >
      {(field) => (
        <field.TextareaField
          label='Message'
          description='A multi-line text input field (optional, max 500 chars).'
          placeholder='Enter your message'
          rows={4}
        />
      )}
    </props.form.AppField>
  ),
});

export const NumberFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='number'
      validators={{ onChange: ({ value }) => validateNumber(value) }}
    >
      {(field) => (
        <field.NumberInputField
          label='Quantity'
          description='A numeric input (0-100).'
          min={0}
          max={MAX_NUMBER_VALUE}
        />
      )}
    </props.form.AppField>
  ),
});

export const CheckboxFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='checkbox'
      validators={{
        onChange: ({ value }) => {
          if (!value) {
            return 'You must agree to the terms';
          }
          return;
        },
      }}
    >
      {(field) => (
        <field.CheckboxField
          label='I agree to the terms and conditions'
          description='You must accept to continue.'
          required
        />
      )}
    </props.form.AppField>
  ),
});

export const RadioFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='radio'
      validators={{
        onChange: ({ value }) => {
          if (value === '') {
            return 'Please select an option';
          }
          return;
        },
      }}
    >
      {(field) => (
        <field.RadioGroupField
          label='Preferred Layout'
          description='Choose your preferred layout style.'
          required
        >
          <RadioGroupItem value='default'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Default</RadioGroupItemText>
          </RadioGroupItem>
          <RadioGroupItem value='compact'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Compact</RadioGroupItemText>
          </RadioGroupItem>
          <RadioGroupItem value='comfortable'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Comfortable</RadioGroupItemText>
          </RadioGroupItem>
        </field.RadioGroupField>
      )}
    </props.form.AppField>
  ),
});

export const SelectFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='select'
      validators={{
        onChange: ({ value }) => {
          if (value.length === 0) {
            return 'Please select a country';
          }
          return;
        },
      }}
    >
      {(field) => (
        <field.SelectField
          collection={countries}
          label='Country'
          description='Select your country of residence.'
          placeholder='Select a country'
          required
        >
          {countries.items.map((item) => (
            <SelectItem item={item}>{item.label}</SelectItem>
          ))}
        </field.SelectField>
      )}
    </props.form.AppField>
  ),
});

export const SliderFieldSection = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <props.form.AppField
      name='slider'
      validators={{
        onChange: ({ value }) => {
          const [sliderValue = 0] = value;
          if (sliderValue < MIN_SLIDER_VALUE) {
            return 'Volume must be at least 10';
          }
          return;
        },
      }}
    >
      {(field) => (
        <field.SliderField
          label='Volume'
          description='Adjust the volume level (min 10).'
          marks={marks}
        />
      )}
    </props.form.AppField>
  ),
});

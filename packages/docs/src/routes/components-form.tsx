import { useAppForm } from '@manafishrov/ui/form';
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { createSignal, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

type FormValues = {
  text: string;
  email: string;
  textarea: string;
  number: number;
  checkbox: boolean;
  radio: string;
  slider: number[];
};
const DEFAULT_SLIDER_VALUE = 50,
  JSON_INDENT = 2,
  MAX_MESSAGE_LENGTH = 500,
  MAX_NUMBER_VALUE = 100,
  MIN_SLIDER_VALUE = 10,
  MIN_TEXT_LENGTH = 3;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const marks = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];
const toJsonReplacer = (_key: string, jsonValue: unknown): unknown => jsonValue;

const createFormOptions = (
  onSubmitValue: (value: FormValues) => void,
): {
  defaultValues: FormValues;
  onSubmit: ({ value }: { value: FormValues }) => void;
} => ({
  defaultValues: {
    text: '',
    email: '',
    textarea: '',
    number: 0,
    checkbox: false,
    radio: '',
    slider: [DEFAULT_SLIDER_VALUE],
  },
  onSubmit: ({ value }: { value: FormValues }): void => {
    onSubmitValue(value);
  },
});
// oxlint-disable-next-line typescript-eslint/explicit-function-return-type
const useDemoForm = (onSubmitValue: (value: FormValues) => void) =>
  useAppForm(() => createFormOptions(onSubmitValue));

type DemoForm = ReturnType<typeof useDemoForm>;
const TextField: Component<{ form: DemoForm }> = (props) => (
  <props.form.AppField
    name='text'
    validators={{
      onChange: ({ value }) => {
        if (value.trim() === '') {
          return 'Text is required';
        }
        if (value.length < MIN_TEXT_LENGTH) {
          return 'Text must be at least 3 characters';
        }
        return;
      },
    }}
  >
    {(field) => (
      <field.TextInputField
        label='Text Input'
        description='A simple text input field with validation.'
        placeholder='Enter some text (min 3 chars)'
        required
      />
    )}
  </props.form.AppField>
);

const EmailField: Component<{ form: DemoForm }> = (props) => (
  <props.form.AppField
    name='email'
    validators={{
      onChange: ({ value }) => {
        if (value.trim() === '') {
          return 'Email is required';
        }
        if (!EMAIL_REGEX.test(value)) {
          return 'Please enter a valid email address';
        }
        return;
      },
    }}
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
);

const TextareaField: Component<{ form: DemoForm }> = (props) => (
  <props.form.AppField
    name='textarea'
    validators={{
      onChange: ({ value }) => {
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
);

const NumberField: Component<{ form: DemoForm }> = (props) => (
  <props.form.AppField
    name='number'
    validators={{
      onChange: ({ value }) => {
        if (value < 0) {
          return 'Value must be positive';
        }
        if (value > MAX_NUMBER_VALUE) {
          return 'Value must be less than 100';
        }
        return;
      },
    }}
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
);

const CheckboxField: Component<{ form: DemoForm }> = (props) => (
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
);

const RadioField: Component<{ form: DemoForm }> = (props) => (
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
);

const SliderField: Component<{ form: DemoForm }> = (props) => (
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
);

const FormFields: Component<{ form: DemoForm }> = (props) => (
  <>
    <TextField form={props.form} />
    <EmailField form={props.form} />
    <TextareaField form={props.form} />
    <NumberField form={props.form} />
    <CheckboxField form={props.form} />
    <RadioField form={props.form} />
    <SliderField form={props.form} />
    <props.form.SubmitButton>Submit</props.form.SubmitButton>
  </>
);

const FormExample: Component = () => {
  const [submittedJson, setSubmittedJson] = createSignal('');
  const form = useDemoForm((value) => {
    setSubmittedJson(JSON.stringify(value, toJsonReplacer, JSON_INDENT));
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(submitEvent) => {
          submitEvent.preventDefault();
          submitEvent.stopPropagation();
          form.handleSubmit().catch((error: unknown) => {
            globalThis.reportError(error);
          });
        }}
        class='space-y-6 max-w-xl'
      >
        <FormFields form={form} />
      </form>

      {submittedJson() !== '' && (
        <pre class='max-w-xl p-3 text-xs overflow-x-auto rounded-md border bg-muted/40'>
          {submittedJson()}
        </pre>
      )}
    </form.AppForm>
  );
};

const FormDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Form</H1>
      <Lead>{m.docs_component_form_description()}</Lead>
    </div>
    <FormExample />
  </div>
);

export const Route = createFileRoute('/components-form')({
  component: FormDocPage,
});

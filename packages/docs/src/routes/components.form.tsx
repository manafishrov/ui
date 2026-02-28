import type { Component } from 'solid-js';

import { createListCollection } from '@manafishrov/ui';
import { ComboboxItem } from '@manafishrov/ui/combobox';
import {
  useAppForm,
  TextInputField,
  PasswordInputField,
  NumberInputField,
  TextareaField,
  CheckboxField,
  SwitchField,
  RadioGroupField,
  SelectField,
  ComboboxField,
  SliderField,
  TagsInputField,
  PinInputField,
  DatePickerField,
  SubmitButton,
} from '@manafishrov/ui/form';
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { SelectItem } from '@manafishrov/ui/select';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const frameworks = createListCollection({
  items: [
    { label: 'Solid', value: 'solid' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
});

const stringFrameworks = createListCollection({
  items: ['Solid', 'React', 'Vue'],
});

const FormDocPage: Component = () => {
  const formOptions = () => ({
    defaultValues: {
      text: '',
      password: '',
      number: 0,
      textarea: '',
      checkbox: false,
      switch: false,
      radio: '',
      select: '',
      combobox: '',
      slider: [50],
      tags: [''],
      pin: ['', '', '', ''],
      date: [''],
    },
    onSubmit: async ({ value }: any) => {
      console.log('Form submitted:', value);
      alert(JSON.stringify(value, null, 2));
    },
  });
  const form = useAppForm(formOptions);

  return (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Form</H1>
        <Lead>{m.docs_component_form_description()}</Lead>
      </div>

      <div class='space-y-4'>
        <H2>Kitchen Sink</H2>
        <div class='max-w-xl'>
          <form.AppForm>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              class='space-y-6'
            >
              <form.AppField
                name='text'
                validators={{
                  onChange: ({ value }) => (!value ? 'Text is required' : undefined),
                }}
              >
                {() => (
                  <TextInputField
                    label='Text Input'
                    description='A simple text input field.'
                    placeholder='Enter some text'
                  />
                )}
              </form.AppField>

              <form.AppField
                name='password'
                validators={{
                  onChange: ({ value }) =>
                    value.length < 8 ? 'Password must be at least 8 characters' : undefined,
                }}
              >
                {() => (
                  <PasswordInputField
                    label='Password Input'
                    description='A password input field.'
                    placeholder='Enter your password'
                  />
                )}
              </form.AppField>

              <form.AppField
                name='number'
                validators={{
                  onChange: ({ value }) => (value < 10 ? 'Number must be at least 10' : undefined),
                }}
              >
                {() => (
                  <NumberInputField
                    label='Number Input'
                    description='A number input field.'
                    min={0}
                    max={100}
                  />
                )}
              </form.AppField>

              <form.AppField
                name='textarea'
                validators={{
                  onChange: ({ value }) =>
                    value.length > 100 ? 'Textarea must be less than 100 characters' : undefined,
                }}
              >
                {() => (
                  <TextareaField
                    label='Textarea'
                    description='A textarea field.'
                    placeholder='Enter a long text'
                  />
                )}
              </form.AppField>

              <form.AppField
                name='checkbox'
                validators={{
                  onChange: ({ value }) => (!value ? 'You must agree to the terms' : undefined),
                }}
              >
                {() => <CheckboxField label='Checkbox' description='A checkbox field.' />}
              </form.AppField>

              <form.AppField name='switch'>
                {() => <SwitchField label='Switch' description='A switch field.' />}
              </form.AppField>

              <form.AppField
                name='radio'
                validators={{
                  onChange: ({ value }) => (!value ? 'Please select an option' : undefined),
                }}
              >
                {() => (
                  <RadioGroupField label='Radio Group' description='A radio group field.'>
                    <RadioGroupItem value='1'>
                      <RadioGroupItemControl />
                      <RadioGroupItemText>Option 1</RadioGroupItemText>
                    </RadioGroupItem>
                    <RadioGroupItem value='2'>
                      <RadioGroupItemControl />
                      <RadioGroupItemText>Option 2</RadioGroupItemText>
                    </RadioGroupItem>
                    <RadioGroupItem value='3'>
                      <RadioGroupItemControl />
                      <RadioGroupItemText>Option 3</RadioGroupItemText>
                    </RadioGroupItem>
                  </RadioGroupField>
                )}
              </form.AppField>

              <form.AppField
                name='select'
                validators={{
                  onChange: ({ value }) => (!value ? 'Please select an option' : undefined),
                }}
              >
                {() => (
                  <SelectField label='Select' description='A select field.' collection={frameworks}>
                    {frameworks.items.map((item) => (
                      <SelectItem item={item}>{item.label}</SelectItem>
                    ))}
                  </SelectField>
                )}
              </form.AppField>

              <form.AppField
                name='combobox'
                validators={{
                  onChange: ({ value }) => (!value ? 'Please select an option' : undefined),
                }}
              >
                {() => (
                  <ComboboxField
                    label='Combobox'
                    description='A combobox field.'
                    collection={stringFrameworks}
                  >
                    {stringFrameworks.items.map((item) => (
                      <ComboboxItem item={item}>{item}</ComboboxItem>
                    ))}
                  </ComboboxField>
                )}
              </form.AppField>

              <form.AppField name='slider'>
                {() => (
                  <SliderField label='Slider' description='A slider field.' min={0} max={100} />
                )}
              </form.AppField>

              <form.AppField
                name='tags'
                validators={{
                  onChange: ({ value }) =>
                    value.length === 0 ? 'Please add at least one tag' : undefined,
                }}
              >
                {() => <TagsInputField label='Tags Input' description='A tags input field.' />}
              </form.AppField>

              <form.AppField
                name='pin'
                validators={{
                  onChange: ({ value }) =>
                    value.some((v: string) => !v) ? 'Please enter a complete PIN' : undefined,
                }}
              >
                {() => <PinInputField label='PIN Input' description='A PIN input field.' />}
              </form.AppField>

              <form.AppField
                name='date'
                validators={{
                  onChange: ({ value }) =>
                    value.length === 0 ? 'Please select a date' : undefined,
                }}
              >
                {() => <DatePickerField label='Date Picker' description='A date picker field.' />}
              </form.AppField>

              <SubmitButton>Submit</SubmitButton>
            </form>
          </form.AppForm>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/components/form')({
  component: FormDocPage,
});

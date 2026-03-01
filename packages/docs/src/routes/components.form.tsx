import type { Component } from 'solid-js';

import { useAppForm } from '@manafishrov/ui/form';
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const FormDocPage: Component = () => {
  const formOptions = () => ({
    defaultValues: {
      text: '',
      email: '',
      textarea: '',
      number: 0,
      checkbox: false,
      radio: '',
      slider: [50],
    },
    onSubmit: async ({ value }: any) => {
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
      <form.AppForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          class='space-y-6 max-w-xl'
        >
          <form.AppField
            name='text'
            validators={{
              onChange: ({ value }) => {
                if (!value || value.trim() === '') {
                  return 'Text is required';
                }
                if (value.length < 3) {
                  return 'Text must be at least 3 characters';
                }
                return undefined;
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
          </form.AppField>

          <form.AppField
            name='email'
            validators={{
              onChange: ({ value }) => {
                if (!value || value.trim() === '') {
                  return 'Email is required';
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                  return 'Please enter a valid email address';
                }
                return undefined;
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
          </form.AppField>

          <form.AppField
            name='textarea'
            validators={{
              onChange: ({ value }) => {
                if (value && value.length > 500) {
                  return 'Message must be less than 500 characters';
                }
                return undefined;
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
          </form.AppField>

          <form.AppField
            name='number'
            validators={{
              onChange: ({ value }) => {
                if (value < 0) {
                  return 'Value must be positive';
                }
                if (value > 100) {
                  return 'Value must be less than 100';
                }
                return undefined;
              },
            }}
          >
            {(field) => (
              <field.NumberInputField
                label='Quantity'
                description='A numeric input (0-100).'
                min={0}
                max={100}
              />
            )}
          </form.AppField>

          <form.AppField
            name='checkbox'
            validators={{
              onChange: ({ value }) => {
                if (!value) {
                  return 'You must agree to the terms';
                }
                return undefined;
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
          </form.AppField>

          {/* Radio Group with validation */}
          <form.AppField
            name='radio'
            validators={{
              onChange: ({ value }) => {
                if (!value) {
                  return 'Please select an option';
                }
                return undefined;
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
          </form.AppField>

          <form.AppField
            name='slider'
            validators={{
              onChange: ({ value }) => {
                const sliderValue = value[0];
                if (sliderValue < 10) {
                  return 'Volume must be at least 10';
                }
                return undefined;
              },
            }}
          >
            {(field) => (
              <field.SliderField
                label='Volume'
                description='Adjust the volume level (min 10).'
                marks={[
                  { value: 0, label: '0' },
                  { value: 25, label: '25' },
                  { value: 50, label: '50' },
                  { value: 75, label: '75' },
                  { value: 100, label: '100' },
                ]}
              />
            )}
          </form.AppField>
          <form.SubmitButton>Submit</form.SubmitButton>
        </form>
      </form.AppForm>
    </div>
  );
};

export const Route = createFileRoute('/components/form')({
  component: FormDocPage,
});

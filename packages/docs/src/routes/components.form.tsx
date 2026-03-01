import type { Component } from 'solid-js';

import { useAppForm } from '@manafishrov/ui/form';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const FormDocPage: Component = () => {
  const formOptions = () => ({
    defaultValues: {
      text: '',
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
              onChange: ({ value }) => (!value ? 'Text is required' : undefined),
            }}
          >
            {(field) => (
              <field.TextInputField
                label='Text Input'
                description='A simple text input field.'
                placeholder='Enter some text'
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

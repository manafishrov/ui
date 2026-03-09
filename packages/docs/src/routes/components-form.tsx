import { useAppForm, withForm } from '@manafishrov/ui/form';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { createSignal, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

import {
  TextFieldSection,
  EmailFieldSection,
  TextareaFieldSection,
  NumberFieldSection,
  CheckboxFieldSection,
  RadioFieldSection,
  SelectFieldSection,
  SliderFieldSection,
  DEMO_DEFAULT_VALUES,
  JSON_INDENT,
  toJsonReplacer,
  type FormValues,
} from './components-form-fields';

const FormFields = withForm({
  defaultValues: DEMO_DEFAULT_VALUES,
  render: (props) => (
    <>
      <TextFieldSection form={props.form} />
      <EmailFieldSection form={props.form} />
      <TextareaFieldSection form={props.form} />
      <NumberFieldSection form={props.form} />
      <CheckboxFieldSection form={props.form} />
      <RadioFieldSection form={props.form} />
      <SelectFieldSection form={props.form} />
      <SliderFieldSection form={props.form} />
      <props.form.SubmitButton>Submit</props.form.SubmitButton>
    </>
  ),
});

const FormExample: Component = () => {
  const [submittedJson, setSubmittedJson] = createSignal('');
  const form = useAppForm(() => ({
    defaultValues: DEMO_DEFAULT_VALUES,
    onSubmit: ({ value }: { value: FormValues }): void => {
      setSubmittedJson(JSON.stringify(value, toJsonReplacer, JSON_INDENT));
    },
  }));
  return (
    <form.AppForm>
      <form.Form class='max-w-xl'>
        <FormFields form={form} />
      </form.Form>
      {submittedJson() !== '' && (
        <pre class='max-w-xl p-3 text-xs overflow-x-auto rounded-md border bg-muted/40'>
          {submittedJson()}
        </pre>
      )}
    </form.AppForm>
  );
};

export const Route = createFileRoute('/components-form')({
  component: () => (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Form</H1>
        <Lead>{m.docs_component_form_description()}</Lead>
      </div>
      <FormExample />
    </div>
  ),
});

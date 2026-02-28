import type { Component } from 'solid-js';

import {
  FieldSet,
  FieldLegend,
  FieldGroup,
  Field,
  FieldContent,
  FieldLabel,
  FieldRequiredIndicator,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  FieldInput,
} from '@manafishrov/ui/field';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const FieldDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Field</H1>
      <Lead>{m.docs_component_field_description()}</Lead>
    </div>

    <FieldSet class='max-w-sm space-y-6'>
      <FieldLegend>
        <FieldTitle>Personal Information</FieldTitle>
        <FieldDescription>Please enter your personal details.</FieldDescription>
      </FieldLegend>
      <FieldSeparator />
      <FieldGroup>
        <Field required>
          <FieldLabel>
            Email <FieldRequiredIndicator />
          </FieldLabel>
          <FieldContent>
            <FieldInput type='email' placeholder='john@example.com' />
          </FieldContent>
          <FieldError>Invalid email address</FieldError>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export const Route = createFileRoute('/components/field')({
  component: FieldDocPage,
});

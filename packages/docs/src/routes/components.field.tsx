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
} from '@manafishrov/ui/field';
import { Input } from '@manafishrov/ui/input';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const FieldDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Field</H1>
      <Lead>{m.docs_component_field_description()}</Lead>
    </div>

    <div class='space-y-4'>
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
              <Input type='email' placeholder='john@example.com' />
            </FieldContent>
            <FieldError>Invalid email address</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  </div>
);

export const Route = createFileRoute('/components/field')({
  component: FieldDocPage,
});

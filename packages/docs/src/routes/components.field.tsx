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
} from '@manafish/ui/field';
import { Input } from '@manafish/ui/input';
import { createFileRoute } from '@tanstack/solid-router';

const FieldDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Field</h1>
      <p class='mt-2 text-muted-foreground'>
        A field component provides a set of components that can be used to build forms.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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

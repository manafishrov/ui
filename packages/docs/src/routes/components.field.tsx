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
            <input
              class='min-w-0 text-base md:text-sm h-8 px-2.5 py-1 flex w-full rounded-lg border border-input bg-transparent transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-readonly:cursor-default data-readonly:focus-visible:border-input data-readonly:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40'
              type='email'
              placeholder='john@example.com'
            />
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

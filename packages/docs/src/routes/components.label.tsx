import type { Component } from 'solid-js';

import { Label } from '@manafishrov/ui/label';
import { createFileRoute } from '@tanstack/solid-router';

const LabelDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Label</h1>
      <p class='mt-2 text-muted-foreground'>
        Renders an accessible label associated with controls.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Label for='email'>Your email address</Label>
    </div>
  </div>
);

export const Route = createFileRoute('/components/label')({
  component: LabelDocPage,
});

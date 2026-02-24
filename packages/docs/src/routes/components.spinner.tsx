import type { Component } from 'solid-js';

import { Spinner } from '@manafishrov/ui/spinner';
import { createFileRoute } from '@tanstack/solid-router';

const SpinnerDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Spinner</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Spinner component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <Spinner>Example</Spinner>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/spinner')({
  component: SpinnerDocPage,
});

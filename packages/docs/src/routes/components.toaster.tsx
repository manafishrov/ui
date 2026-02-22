import type { Component } from 'solid-js';

import { Toaster } from '@manafish/ui/toaster';
import { createFileRoute } from '@tanstack/solid-router';

const ToasterDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Toaster</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Toaster component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <Toaster>Example</Toaster>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/toaster')({
  component: ToasterDocPage,
});

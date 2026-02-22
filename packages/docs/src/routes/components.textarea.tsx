import type { Component } from 'solid-js';

import { Textarea } from '@manafish/ui/textarea';
import { createFileRoute } from '@tanstack/solid-router';

const TextareaDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Textarea</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Textarea component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 max-w-sm flex flex-wrap'>
        <Textarea placeholder='Type your message here.' />
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/textarea')({
  component: TextareaDocPage,
});

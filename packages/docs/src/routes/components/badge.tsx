import type { Component } from 'solid-js';

import { createFileRoute } from '@tanstack/solid-router';
import { Badge } from 'manafish-ui/badge';

const BadgePage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Badge</h1>
      <p class='mt-2 text-muted-foreground'>
        A small label component for displaying status, counts, or categories.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Variants</h2>
      <div class='gap-4 flex flex-wrap'>
        <Badge variant='default'>Default</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='destructive'>Destructive</Badge>
        <Badge variant='outline'>Outline</Badge>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Use Cases</h2>
      <div class='gap-4 flex flex-wrap items-center'>
        <div class='gap-2 flex items-center'>
          <span>Notifications</span>
          <Badge>3</Badge>
        </div>
        <div class='gap-2 flex items-center'>
          <span>Status</span>
          <Badge variant='secondary'>Active</Badge>
        </div>
        <div class='gap-2 flex items-center'>
          <span>Priority</span>
          <Badge variant='destructive'>High</Badge>
        </div>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/badge')({
  component: BadgePage,
});

import type { Component } from 'solid-js';

import { Badge } from '@manafishrov/ui/badge';
import { createFileRoute } from '@tanstack/solid-router';

const BadgeDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Badge</h1>
      <p class='mt-2 text-muted-foreground'>A small label component for status or counts.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Variants</h2>
      <div class='gap-4 flex flex-wrap'>
        <Badge variant='default'>Default</Badge>
        <Badge variant='destructive'>Destructive</Badge>
        <Badge variant='outline'>Outline</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='ghost'>Ghost</Badge>
        <Badge variant='link'>Link</Badge>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/badge')({
  component: BadgeDocPage,
});

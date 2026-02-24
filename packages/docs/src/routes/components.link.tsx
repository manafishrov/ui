import type { Component } from 'solid-js';

import { Link } from '@manafishrov/ui/link';
import { createFileRoute } from '@tanstack/solid-router';

const LinkDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Link</h1>
      <p class='mt-2 text-muted-foreground'>A text element styled as a link.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Link href='#'>Click me to go somewhere</Link>
    </div>
  </div>
);

export const Route = createFileRoute('/components/link')({
  component: LinkDocPage,
});

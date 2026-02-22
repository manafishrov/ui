import type { Component } from 'solid-js';

import { createFileRoute } from '@tanstack/solid-router';
import { Button } from 'manafish-ui/button';

const ButtonPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Button</h1>
      <p class='mt-2 text-muted-foreground'>A clickable button component with multiple variants.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Variants</h2>
      <div class='gap-4 flex flex-wrap'>
        <Button variant='default'>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Sizes</h2>
      <div class='gap-4 flex flex-wrap items-center'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>States</h2>
      <div class='gap-4 flex flex-wrap'>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/button')({
  component: ButtonPage,
});

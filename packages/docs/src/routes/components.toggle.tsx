import type { Component } from 'solid-js';

import { Toggle, ToggleGroup, ToggleGroupItem } from '@manafishrov/ui/toggle';
import { createFileRoute } from '@tanstack/solid-router';

const ToggleDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Toggle</h1>
      <p class='mt-2 text-muted-foreground'>A two-state button that can be either on or off.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Variants</h2>
      <div class='gap-4 flex flex-wrap'>
        <Toggle variant='default'>Default</Toggle>
        <Toggle variant='outline'>Outline</Toggle>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Sizes</h2>
      <div class='gap-4 flex flex-wrap items-center'>
        <Toggle size='sm'>Small</Toggle>
        <Toggle size='default'>Default</Toggle>
        <Toggle size='lg'>Large</Toggle>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>States</h2>
      <div class='gap-4 flex flex-wrap'>
        <Toggle disabled>Disabled</Toggle>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/toggle')({
  component: ToggleDocPage,
});

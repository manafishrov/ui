import type { Component } from 'solid-js';

import { Toggle } from '@manafishrov/ui/toggle';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const ToggleDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Toggle</H1>
      <Lead>{m.docs_component_toggle_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_variants()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <Toggle variant='default'>Default</Toggle>
        <Toggle variant='outline'>Outline</Toggle>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_sizes()}</H2>
      <div class='gap-4 flex flex-wrap items-center'>
        <Toggle size='sm'>Small</Toggle>
        <Toggle size='default'>Default</Toggle>
        <Toggle size='lg'>Large</Toggle>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_states()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <Toggle disabled>Disabled</Toggle>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/toggle')({
  component: ToggleDocPage,
});

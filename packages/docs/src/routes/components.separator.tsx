import type { Component } from 'solid-js';

import { Separator } from '@manafishrov/ui/separator';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SeparatorDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Separator</H1>
      <Lead>{m.docs_component_separator_description()}</Lead>
    </div>

    <div class='max-w-md'>
      <div class='space-y-1'>
        <h4 class='text-sm font-medium leading-none'>Radix Primitives</h4>
        <p class='text-sm text-muted-foreground'>An open-source UI component library.</p>
      </div>
      <Separator class='my-4' />
      <div class='h-5 space-x-4 text-sm flex items-center'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/separator')({
  component: SeparatorDocPage,
});

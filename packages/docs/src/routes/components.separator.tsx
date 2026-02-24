import type { Component } from 'solid-js';

import { Separator } from '@manafishrov/ui/separator';
import { createFileRoute } from '@tanstack/solid-router';

const SeparatorDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Separator</h1>
      <p class='mt-2 text-muted-foreground'>Visually or semantically separates content.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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
  </div>
);

export const Route = createFileRoute('/components/separator')({
  component: SeparatorDocPage,
});

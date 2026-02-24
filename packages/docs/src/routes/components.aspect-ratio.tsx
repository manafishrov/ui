import type { Component } from 'solid-js';

import { AspectRatio } from '@manafishrov/ui/aspect-ratio';
import { createFileRoute } from '@tanstack/solid-router';

const AspectRatioDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>AspectRatio</h1>
      <p class='mt-2 text-muted-foreground'>Displays content within a desired ratio.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>16:9 Ratio</h2>
      <div class='w-[400px]'>
        <AspectRatio ratio={16 / 9} class='flex items-center justify-center rounded-md bg-muted'>
          <span class='text-muted-foreground'>16:9</span>
        </AspectRatio>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/aspect-ratio')({
  component: AspectRatioDocPage,
});

import type { Component } from 'solid-js';

import { Skeleton } from '@manafish/ui/skeleton';
import { createFileRoute } from '@tanstack/solid-router';

const SkeletonDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Skeleton</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Skeleton component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='space-x-4 flex items-center'>
        <Skeleton class='h-12 w-12 rounded-full' />
        <div class='space-y-2'>
          <Skeleton class='h-4 w-[250px]' />
          <Skeleton class='h-4 w-[200px]' />
        </div>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/skeleton')({
  component: SkeletonDocPage,
});

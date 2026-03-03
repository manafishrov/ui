import type { Component } from 'solid-js';

import { Skeleton } from '@manafishrov/ui/skeleton';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SkeletonDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Skeleton</H1>
      <Lead>{m.docs_component_skeleton_description()}</Lead>
    </div>

    <div class='space-x-4 flex items-center'>
      <Skeleton class='h-12 w-12 rounded-full' />
      <div class='space-y-2'>
        <Skeleton class='h-4 w-64' />
        <Skeleton class='h-4 w-48' />
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components-skeleton')({
  component: SkeletonDocPage,
});

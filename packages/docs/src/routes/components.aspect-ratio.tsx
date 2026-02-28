import type { Component } from 'solid-js';

import { AspectRatio } from '@manafishrov/ui/aspect-ratio';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const AspectRatioDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Aspect Ratio</H1>
      <Lead>{m.docs_component_aspect_ratio_description()}</Lead>
    </div>

    <AspectRatio
      ratio={16 / 9}
      class='max-w-md flex items-center justify-center rounded-md bg-muted'
    >
      <span class='text-muted-foreground'>16:9</span>
    </AspectRatio>
  </div>
);

export const Route = createFileRoute('/components/aspect-ratio')({
  component: AspectRatioDocPage,
});

import type { Component } from 'solid-js';

import {
  Marquee,
  MarqueeViewport,
  MarqueeContent,
  MarqueeItem,
  MarqueeEdge,
} from '@manafish/ui/marquee';
import { createFileRoute } from '@tanstack/solid-router';

const MarqueeDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Marquee</h1>
      <p class='mt-2 text-muted-foreground'>A scrolling marquee component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='w-[400px] rounded-md border'>
        <Marquee>
          <MarqueeEdge />
          <MarqueeViewport>
            <MarqueeContent>
              <MarqueeItem class='px-4 py-2 mr-4 rounded-md bg-muted'>Item 1</MarqueeItem>
              <MarqueeItem class='px-4 py-2 mr-4 rounded-md bg-muted'>Item 2</MarqueeItem>
              <MarqueeItem class='px-4 py-2 mr-4 rounded-md bg-muted'>Item 3</MarqueeItem>
            </MarqueeContent>
          </MarqueeViewport>
        </Marquee>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/marquee')({
  component: MarqueeDocPage,
});

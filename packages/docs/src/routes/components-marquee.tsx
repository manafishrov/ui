import type { Component } from 'solid-js';

import {
  Marquee,
  MarqueeViewport,
  MarqueeContent,
  MarqueeItem,
  MarqueeEdge,
} from '@manafishrov/ui/marquee';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const MarqueeDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Marquee</H1>
      <Lead>{m.docs_component_marquee_description()}</Lead>
    </div>

    <Marquee class='max-w-md rounded-md border' autoFill speed={50} spacing='1rem'>
      <MarqueeEdge side='start' />
      <MarqueeEdge side='end' class='bg-linear-to-l' />
      <MarqueeViewport>
        <MarqueeContent>
          <MarqueeItem class='px-4 py-2 rounded-md bg-muted'>Item 1</MarqueeItem>
          <MarqueeItem class='px-4 py-2 rounded-md bg-muted'>Item 2</MarqueeItem>
          <MarqueeItem class='px-4 py-2 rounded-md bg-muted'>Item 3</MarqueeItem>
        </MarqueeContent>
      </MarqueeViewport>
    </Marquee>
  </div>
);

export const Route = createFileRoute('/components-marquee')({
  component: MarqueeDocPage,
});

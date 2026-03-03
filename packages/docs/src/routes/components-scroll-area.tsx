import type { Component } from 'solid-js';

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '@manafishrov/ui/scroll-area';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const ScrollAreaDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Scroll Area</H1>
      <Lead>{m.docs_component_scroll_area_description()}</Lead>
    </div>

    <ScrollArea class='p-4 h-48 max-w-sm overflow-hidden rounded-md border'>
      <ScrollAreaViewport class='h-full w-full'>
        <ScrollAreaContent>
          <div class='pr-4'>
            <h4 class='mb-4 text-sm font-medium leading-none'>Tags</h4>
            {Array.from({ length: 20 }).map((_, index, array) => (
              <>
                <div class='text-sm'>v1.2.0-beta.{array.length - index}</div>
                <hr class='my-2 border-muted' />
              </>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  </div>
);

export const Route = createFileRoute('/components-scroll-area')({
  component: ScrollAreaDocPage,
});

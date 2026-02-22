import type { Component } from 'solid-js';

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '@manafish/ui/scroll-area';
import { createFileRoute } from '@tanstack/solid-router';

const ScrollAreaDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>ScrollArea</h1>
      <p class='mt-2 text-muted-foreground'>
        Augments native scroll functionality for custom, cross-browser styling.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <ScrollArea class='p-4 h-[200px] w-[350px] rounded-md border'>
        <ScrollAreaViewport class='h-full w-full'>
          <ScrollAreaContent>
            <div class='pr-4'>
              <h4 class='mb-4 text-sm font-medium leading-none'>Tags</h4>
              {Array.from({ length: 20 }).map((_, i, a) => (
                <>
                  <div class='text-sm'>v1.2.0-beta.{a.length - i}</div>
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
  </div>
);

export const Route = createFileRoute('/components/scroll-area')({
  component: ScrollAreaDocPage,
});

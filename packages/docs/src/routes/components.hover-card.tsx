import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPositioner,
  HoverCardContent,
  HoverCardArrow,
} from '@manafish/ui/hover-card';
import { createFileRoute } from '@tanstack/solid-router';

const HoverCardDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>HoverCard</h1>
      <p class='mt-2 text-muted-foreground'>
        For sighted users to preview content available behind a link.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <HoverCard>
        <HoverCardTrigger
          asChild={(props) => (
            <Button variant='link' {...props()}>
              @manafish
            </Button>
          )}
        />
        <HoverCardPositioner>
          <HoverCardContent>
            <HoverCardArrow />
            <div class='space-x-4 flex justify-between'>
              <div class='space-y-1'>
                <h4 class='text-sm font-semibold'>@manafish</h4>
                <p class='text-sm'>The Manafish UI component library.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
    </div>
  </div>
);

export const Route = createFileRoute('/components/hover-card')({
  component: HoverCardDocPage,
});

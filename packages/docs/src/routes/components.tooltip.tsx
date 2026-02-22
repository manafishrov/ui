import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipPositioner,
} from '@manafish/ui/tooltip';
import { createFileRoute } from '@tanstack/solid-router';

const TooltipDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Tooltip</h1>
      <p class='mt-2 text-muted-foreground'>
        A popup that displays information related to an element when the element receives keyboard
        focus or the mouse hovers over it.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Tooltip>
        <TooltipTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Hover me
            </Button>
          )}
        />
        <TooltipPositioner>
          <TooltipContent>
            <TooltipArrow />
            <p>Add to library</p>
          </TooltipContent>
        </TooltipPositioner>
      </Tooltip>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tooltip')({
  component: TooltipDocPage,
});

import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipPositioner,
} from '@manafishrov/ui/tooltip';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TooltipDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tooltip</H1>
      <Lead>{m.docs_component_tooltip_description()}</Lead>
    </div>

    <div class='space-y-4'>
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

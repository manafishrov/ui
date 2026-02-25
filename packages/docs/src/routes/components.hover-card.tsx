import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPositioner,
  HoverCardContent,
  HoverCardArrow,
} from '@manafishrov/ui/hover-card';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const HoverCardDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Hover Card</H1>
      <Lead>{m.docs_component_hover_card_description()}</Lead>
    </div>

    <div class='space-y-4'>
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

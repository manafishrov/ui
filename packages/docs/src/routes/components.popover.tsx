import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverIndicator,
  PopoverCloseTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@manafishrov/ui/popover';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const PopoverDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Popover</H1>
      <Lead>{m.docs_component_popover_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <Popover>
        <PopoverTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Open Popover
            </Button>
          )}
        />
        <PopoverPositioner>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
            </PopoverHeader>
            <div class='gap-4 py-4 grid'>
              <div class='gap-4 grid grid-cols-3 items-center'>
                <span class='text-sm'>Width</span>
                <input
                  class='h-9 px-3 py-1 text-sm shadow-sm col-span-2 flex w-full rounded-md border border-input bg-transparent'
                  value='100%'
                />
              </div>
            </div>
            <PopoverCloseTrigger
              asChild={(props) => (
                <Button
                  variant='ghost'
                  size='icon'
                  class='right-4 top-4 h-6 w-6 absolute'
                  {...props()}
                >
                  ✕
                </Button>
              )}
            />
          </PopoverContent>
        </PopoverPositioner>
      </Popover>
    </div>
  </div>
);

export const Route = createFileRoute('/components/popover')({
  component: PopoverDocPage,
});

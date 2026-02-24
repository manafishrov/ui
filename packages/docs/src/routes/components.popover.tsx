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
import { createFileRoute } from '@tanstack/solid-router';

const PopoverDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Popover</h1>
      <p class='mt-2 text-muted-foreground'>
        Displays rich content in a portal, triggered by a button.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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

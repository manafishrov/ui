import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetCloseTrigger,
  SheetOverlay,
  SheetPositioner,
  SheetContent,
  SheetCloseButton,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@manafishrov/ui/sheet';
import { createFileRoute } from '@tanstack/solid-router';

const SheetDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Sheet</h1>
      <p class='mt-2 text-muted-foreground'>
        Extends the Dialog component to display content that complements the main UI.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Sheet>
        <SheetTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Open Sheet
            </Button>
          )}
        />
        <SheetOverlay />
        <SheetPositioner side='right'>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div class='gap-4 py-4 grid'>
              <div class='gap-4 grid grid-cols-4 items-center'>
                <span class='text-sm text-right'>Name</span>
                <input
                  class='h-9 px-3 py-1 text-sm shadow-sm col-span-3 flex w-full rounded-md border border-input bg-transparent transition-colors'
                  value='Pedro Duarte'
                />
              </div>
            </div>
            <SheetFooter>
              <SheetCloseTrigger
                asChild={(props) => (
                  <Button variant='outline' {...props()}>
                    Cancel
                  </Button>
                )}
              />
              <Button type='submit'>Save changes</Button>
            </SheetFooter>
            <SheetCloseButton
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
          </SheetContent>
        </SheetPositioner>
      </Sheet>
    </div>
  </div>
);

export const Route = createFileRoute('/components/sheet')({
  component: SheetDocPage,
});

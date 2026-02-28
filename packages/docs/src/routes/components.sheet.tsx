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
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SheetExampleContent: Component = () => (
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
        <Button variant='ghost' size='icon' class='right-4 top-4 h-6 w-6 absolute' {...props()}>
          ✕
        </Button>
      )}
    />
  </SheetContent>
);

const SheetExample: Component = () => (
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
      <SheetExampleContent />
    </SheetPositioner>
  </Sheet>
);
const SheetDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Sheet</H1>
      <Lead>{m.docs_component_sheet_description()}</Lead>
    </div>

    <SheetExample />
  </div>
);

export const Route = createFileRoute('/components/sheet')({
  component: SheetDocPage,
});

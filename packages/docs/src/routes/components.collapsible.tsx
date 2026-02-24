import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@manafishrov/ui/collapsible';
import { createFileRoute } from '@tanstack/solid-router';

const CollapsibleDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Collapsible</h1>
      <p class='mt-2 text-muted-foreground'>
        An interactive component which expands/collapses a panel.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Collapsible class='space-y-2 w-[350px]'>
        <div class='space-x-4 px-4 flex items-center justify-between'>
          <h4 class='text-sm font-semibold'>@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger
            asChild={(props) => (
              <Button variant='ghost' size='sm' {...props()}>
                Toggle
              </Button>
            )}
          />
        </div>
        <div class='px-4 py-2 font-mono text-sm shadow-sm rounded-md border'>@solidjs/solid</div>
        <CollapsibleContent class='space-y-2'>
          <div class='px-4 py-2 font-mono text-sm shadow-sm rounded-md border'>@manafishrov/ui</div>
          <div class='px-4 py-2 font-mono text-sm shadow-sm rounded-md border'>
            @tanstack/solid-router
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
);

export const Route = createFileRoute('/components/collapsible')({
  component: CollapsibleDocPage,
});

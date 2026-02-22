import type { Component } from 'solid-js';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionIndicator,
  AccordionContent,
} from '@manafish/ui/accordion';
import { createFileRoute } from '@tanstack/solid-router';

const AccordionDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Accordion</h1>
      <p class='mt-2 text-muted-foreground'>
        A vertically stacked set of interactive headings that each reveal a section of content.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Accordion defaultValue={['item-1']} class='max-w-md w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            Is it accessible?
            <AccordionIndicator />
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            Is it styled?
            <AccordionIndicator />
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export const Route = createFileRoute('/components/accordion')({
  component: AccordionDocPage,
});

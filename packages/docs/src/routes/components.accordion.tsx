import type { Component } from 'solid-js';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionIndicator,
} from '@manafishrov/ui/accordion';
import { createFileRoute } from '@tanstack/solid-router';

const AccordionDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Accordion</h1>
      <p class='mt-2 text-muted-foreground'>
        A vertically stacked set of interactive headings that each reveal a section of content.
      </p>
    </div>
    <Accordion collapsible defaultValue={['shipping']} class='max-w-lg w-full'>
      <AccordionItem value='shipping'>
        <AccordionTrigger>
          What are your shipping options?
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='returns'>
        <AccordionTrigger>
          What is your return policy?
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
          processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='support'>
        <AccordionTrigger>
          How can I contact customer support?
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Route = createFileRoute('/components/accordion')({
  component: AccordionDocPage,
});

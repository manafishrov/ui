import type { Component } from 'solid-js';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionIndicator,
} from '@manafishrov/ui/accordion';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const AccordionDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Accordion</H1>
      <Lead>{m.docs_component_accordion_description()}</Lead>
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

import type { Component } from 'solid-js';

import { Accordion as AccordionPrimitive, useAccordion } from '@ark-ui/solid/accordion';
import { cn } from 'tailwind-variants';

export { useAccordion };
export const AccordionContext = AccordionPrimitive.Context;
export const AccordionItemContext = AccordionPrimitive.ItemContext;

export const Accordion: Component<AccordionPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'collapsible']);
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      class={cn('flex w-full flex-col', local.class)}
      collapsible={local.collapsible ?? true}
      {...others}
    />
  );
};

export const AccordionItem: Component<AccordionPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      class={cn('border-b last:border-b-0', local.class)}
      {...others}
    />
  );
};

export const AccordionTrigger: Component<AccordionPrimitive.ItemTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AccordionPrimitive.ItemTrigger
      data-slot='accordion-trigger'
      class={cn(
        'py-2.5 text-sm font-medium rounded-lg border border-transparent text-left transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
        'relative flex w-full flex-1 items-start justify-between',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AccordionPrimitive.ItemTrigger>
  );
};
export const AccordionIndicator: Component<AccordionPrimitive.ItemIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AccordionPrimitive.ItemIndicator
      data-slot='accordion-indicator'
      class={cn(
        'size-5 ml-auto shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180',
        local.class,
      )}
      {...others}
    >
      <IconIcOutlineExpandMore aria-hidden='true' class='size-full' />
    </AccordionPrimitive.ItemIndicator>
  );
};

export const AccordionContent: Component<AccordionPrimitive.ItemContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AccordionPrimitive.ItemContent
      data-slot='accordion-content'
      class={cn(
        'text-sm overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        '[--radix-accordion-content-height:var(--height)]',
        local.class,
      )}
      {...others}
    >
      <div class='pt-0 pb-2.5 [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground'>
        {local.children}
      </div>
    </AccordionPrimitive.ItemContent>
  );
};

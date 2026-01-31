import { Accordion as AccordionPrimitive } from '@ark-ui/solid/accordion';
import { MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const AccordionContext = AccordionPrimitive.Context;
export const AccordionItemContext = AccordionPrimitive.ItemContext;

export const Accordion: Component<AccordionPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      class={cn('flex w-full flex-col', local.class)}
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
  const [local, others] = splitProps(props, ['class']);
  return (
    <AccordionPrimitive.ItemTrigger
      data-slot='accordion-trigger'
      class={cn(
        'focus-visible:ring-ring/50 focus-visible:border-ring rounded-lg py-4 text-left text-sm font-medium hover:underline focus-visible:ring-[3px] border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
        'relative flex flex-1 items-center justify-between',
        local.class,
      )}
      {...others}
    />
  );
};

export const AccordionIndicator: Component<AccordionPrimitive.ItemIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AccordionPrimitive.ItemIndicator
      data-slot='accordion-indicator'
      class={cn(
        'text-muted-foreground ml-auto size-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180',
        local.class,
      )}
      {...others}
    >
      <MdOutlineExpand_more aria-hidden='true' class='size-full' />
    </AccordionPrimitive.ItemIndicator>
  );
};

export const AccordionContent: Component<AccordionPrimitive.ItemContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AccordionPrimitive.ItemContent
      data-slot='accordion-content'
      class={cn(
        'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up text-sm overflow-hidden',
        local.class,
      )}
      {...others}
    >
      <div class='pt-0 pb-4'>
        <div class='[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4'>
          {local.children}
        </div>
      </div>
    </AccordionPrimitive.ItemContent>
  );
};

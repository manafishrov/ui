import { Tabs as TabsPrimitive } from '@ark-ui/solid/tabs';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Tabs: Component<TabsPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      class={cn('gap-2 flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const TabsList: Component<TabsPrimitive.ListProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      class={cn(
        'h-9 p-1 inline-flex w-full items-center justify-center rounded-lg bg-muted text-muted-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const TabsTrigger: Component<TabsPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      class={cn(
        'px-3 py-1 text-sm font-medium inline-flex items-center justify-center rounded-md whitespace-nowrap ring-offset-background transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'data-selected:shadow-sm data-selected:bg-background data-selected:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const TabsContent: Component<TabsPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.Content
      data-slot='tabs-content'
      class={cn(
        'mt-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const TabsIndicator: Component<TabsPrimitive.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.Indicator
      data-slot='tabs-indicator'
      class={cn(
        'bottom-0 left-0 h-0.5 absolute w-(--width) translate-x-(--left) bg-primary transition-[width,transform]',
        local.class,
      )}
      {...others}
    />
  );
};

import { Tabs as TabsPrimitive } from '@ark-ui/solid/tabs';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Tabs: Component<TabsPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      class={cn('flex flex-col gap-2 w-full', local.class)}
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
        'bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1 w-full',
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'data-selected:bg-background data-selected:text-foreground data-selected:shadow-sm',
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
        'ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 mt-2 outline-none',
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
        'bg-primary absolute bottom-0 left-0 h-0.5 w-(--width) translate-x-(--left) transition-[width,transform]',
        local.class,
      )}
      {...others}
    />
  );
};

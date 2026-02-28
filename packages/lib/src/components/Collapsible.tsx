import { Collapsible as CollapsiblePrimitive } from '@ark-ui/solid/collapsible';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Collapsible: Component<CollapsiblePrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <CollapsiblePrimitive.Root data-slot='collapsible' class={cn(local.class)} {...others} />;
};

export const CollapsibleTrigger: Component<CollapsiblePrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <CollapsiblePrimitive.Trigger
      data-slot='collapsible-trigger'
      class={cn(local.class)}
      {...others}
    />
  );
};

export const CollapsibleContent: Component<CollapsiblePrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <CollapsiblePrimitive.Content
      data-slot='collapsible-content'
      class={cn(
        'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
        local.class,
      )}
      {...others}
    />
  );
};

import { Combobox as ComboboxPrimitive, type CollectionItem } from '@ark-ui/solid/combobox';
import { type Component, type ComponentProps, type JSXElement, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import CheckIcon from '~icons/material-symbols/check';
import CloseIcon from '~icons/material-symbols/close';
import ExpandMoreIcon from '~icons/material-symbols/expand-more';

export const ComboboxContext = ComboboxPrimitive.Context;

export const Combobox = <TItem extends CollectionItem>(
  props: ComboboxPrimitive.RootProps<TItem> & { class?: string },
): JSXElement => {
  const [local, others] = splitProps(props, ['class']);
  return <ComboboxPrimitive.Root class={cn('flex w-full flex-col', local.class)} {...others} />;
};

export const ComboboxList: Component<ComboboxPrimitive.ListProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.List
      data-slot='combobox-list'
      class={cn('p-1 max-h-[min(var(--available-height),300px)] overflow-y-auto', local.class)}
      {...others}
    />
  );
};

export const ComboboxLabel: Component<ComboboxPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.Label
      class={cn(
        'mb-1 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxControl: Component<ComboboxPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <ComboboxPrimitive.Control
      data-slot='combobox-control'
      class={cn(
        'group min-h-10 py-1.5 pr-2 pl-2.5 text-sm [&_svg:not([class*="size-"])]:size-4 gap-1 shadow-sm flex w-full flex-wrap items-center rounded-lg border border-input bg-transparent transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        'has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
        'data-[readonly=true]:cursor-default data-[readonly=true]:has-focus-visible:border-input data-[readonly=true]:has-focus-visible:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxInput: Component<ComboboxPrimitive.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <ComboboxPrimitive.Input
      data-slot='combobox-input'
      class={cn(
        'min-w-16 flex-1 bg-transparent outline-none placeholder:text-muted-foreground focus-visible:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxTrigger: Component<ComboboxPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ComboboxPrimitive.Trigger
      data-slot='combobox-trigger'
      class={cn('text-muted-foreground transition-colors hover:text-foreground', local.class)}
      {...others}
    >
      {local.children ?? <ExpandMoreIcon class='size-4' />}
    </ComboboxPrimitive.Trigger>
  );
};
export const ComboboxClearTrigger: Component<ComboboxPrimitive.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'tabIndex']);
  return (
    <ComboboxPrimitive.ClearTrigger
      data-slot='combobox-clear'
      class={cn(
        'p-0.5 rounded-[4px] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none',
        local.class,
      )}
      {...others}
      tabIndex={local.tabIndex ?? 0}
    >
      {local.children ?? <CloseIcon class='size-3.5' />}
    </ComboboxPrimitive.ClearTrigger>
  );
};

export const ComboboxPositioner: Component<ComboboxPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <ComboboxPrimitive.Positioner class={cn('isolate z-50', local.class)} {...others} />;
};

export const ComboboxContent: Component<ComboboxPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.Content
      data-slot='combobox-content'
      class={cn(
        'min-w-36 shadow-md relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxItem: Component<ComboboxPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ComboboxPrimitive.Item
      data-slot='combobox-item'
      class={cn(
        "gap-1.5 py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:gap-2 relative flex w-full cursor-default items-center rounded-md outline-hidden select-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center",
        local.class,
      )}
      {...others}
    >
      <ComboboxPrimitive.ItemText class='gap-2 flex flex-1 shrink-0 whitespace-nowrap'>
        {local.children}
      </ComboboxPrimitive.ItemText>
      <ComboboxPrimitive.ItemIndicator class='right-2 size-4 pointer-events-none absolute flex items-center justify-center'>
        <CheckIcon class='pointer-events-none' />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
};

export const ComboboxItemGroup: Component<ComboboxPrimitive.ItemGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.ItemGroup
      data-slot='combobox-group'
      class={cn('scroll-my-1', local.class)}
      {...others}
    />
  );
};

export const ComboboxItemGroupLabel: Component<ComboboxPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.ItemGroupLabel
      data-slot='combobox-label'
      class={cn('px-1.5 py-1 text-xs text-muted-foreground', local.class)}
      {...others}
    />
  );
};

export const ComboboxEmpty: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='combobox-empty'
      class={cn(
        'py-2 text-sm hidden w-full justify-center text-center text-muted-foreground group-data-empty/combobox-content:flex',
        local.class,
      )}
      {...others}
    />
  );
};

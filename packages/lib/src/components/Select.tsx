import { Select as SelectPrimitive } from '@ark-ui/solid/select';
import { type Component, type ComponentProps, type JSXElement, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import OutlineCheckIcon from '~icons/ic/outline-check';
import OutlineCloseIcon from '~icons/ic/outline-close';
import OutlineExpandMoreIcon from '~icons/ic/outline-expand-more';

import { SelectTabs, type SelectTabsProps } from './SelectTabs';

export const SelectControl = SelectPrimitive.Control;
export const SelectItemContext = SelectPrimitive.ItemContext;
export const SelectHiddenSelect = SelectPrimitive.HiddenSelect;
export const SelectList: Component<SelectPrimitive.ListProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.List
      data-slot='select-list'
      class={cn('p-1 max-h-[min(var(--available-height),300px)] overflow-y-auto', local.class)}
      {...others}
    />
  );
};
export const SelectContext = SelectPrimitive.Context;

type SelectComponent = (<TItem extends { value: string; label: string }>(
  props: SelectPrimitive.RootProps<TItem> & { class?: string },
) => JSXElement) & {
  Tabs: <TItem extends { value: string; label: string }>(
    props: SelectTabsProps<TItem>,
  ) => JSXElement;
};

const SelectRoot = <TItem extends { value: string; label: string }>(
  props: SelectPrimitive.RootProps<TItem> & { class?: string },
): JSXElement => {
  const [local, others] = splitProps(props, ['class', 'positioning']);

  const positioning: NonNullable<SelectPrimitive.RootProps<TItem>['positioning']> = {
    placement: 'bottom-start',
    gutter: 4,
    sameWidth: true,
    ...local.positioning,
  };

  return (
    <SelectPrimitive.Root
      class={cn('flex w-full flex-col', local.class)}
      positioning={positioning}
      {...others}
    />
  );
};

export const Select: SelectComponent = Object.assign(SelectRoot, {
  Tabs: SelectTabs,
});

export const SelectLabel: Component<SelectPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.Label
      class={cn(
        'mb-1 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const SelectGroup: Component<SelectPrimitive.ItemGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.ItemGroup
      data-slot='select-group'
      class={cn('scroll-my-1', local.class)}
      {...others}
    />
  );
};

export const SelectValue: Component<SelectPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.ValueText
      data-slot='select-value'
      class={cn('flex flex-1 text-left', local.class)}
      {...others}
    />
  );
};

export const SelectTrigger: Component<
  SelectPrimitive.TriggerProps & { size?: 'sm' | 'default' }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = local.size ?? 'default';

  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      class={cn(
        'border-input data-placeholder-shown:text-muted-foreground px-2.5 text-sm *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*="size-"])]:text-muted-foreground [&_svg:not([class*="size-"])]:size-4 gap-1.5 flex w-full min-w-0 items-center justify-between rounded-lg border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none select-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        'data-[size=default]:h-10 data-[size=sm]:h-8 data-[size=sm]:rounded-[min(var(--radius-md),10px)]',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[focus-visible]:border-ring data-[focus-visible]:ring-[3px] data-[focus-visible]:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
        'data-[readonly=true]:cursor-default data-[readonly=true]:focus-visible:border-input data-[readonly=true]:focus-visible:ring-0 data-[readonly=true]:data-[focus-visible]:border-input data-[readonly=true]:data-[focus-visible]:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SelectIndicator: Component<SelectPrimitive.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <SelectPrimitive.Indicator
      class={cn('opacity-50 transition-transform data-[state=open]:rotate-180', local.class)}
      {...others}
    >
      {local.children ?? <OutlineExpandMoreIcon class='size-4' />}
    </SelectPrimitive.Indicator>
  );
};

export const SelectClearTrigger: Component<SelectPrimitive.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'tabIndex']);
  return (
    <SelectPrimitive.ClearTrigger
      class={cn(
        'p-0.5 rounded-[4px] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
        local.class,
      )}
      {...others}
      tabIndex={local.tabIndex ?? 0}
    >
      {local.children ?? <OutlineCloseIcon class='size-3.5' />}
    </SelectPrimitive.ClearTrigger>
  );
};

export const SelectPositioner: Component<SelectPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <SelectPrimitive.Positioner class={cn('isolate z-50', local.class)} {...others} />;
};

export const SelectContent: Component<SelectPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.Content
      data-slot='select-content'
      class={cn(
        'relative isolate z-50 max-h-(--available-height) w-(--reference-width) min-w-[8rem] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-input bg-popover text-popover-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-95',
        'outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[focus-visible]:border-ring data-[focus-visible]:ring-[3px] data-[focus-visible]:ring-ring/50',
        local.class,
      )}
      {...others}
    />
  );
};

export const SelectItemGroupLabel: Component<SelectPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.ItemGroupLabel
      data-slot='select-group-label'
      class={cn('px-1.5 py-1 text-xs text-muted-foreground', local.class)}
      {...others}
    />
  );
};

export const SelectItem: Component<SelectPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      class={cn(
        "gap-2 py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:gap-2 relative flex w-full cursor-default items-center rounded-sm outline-hidden select-none data-disabled:pointer-events-none data-[disabled=true]:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center",
        local.class,
      )}
      {...others}
    >
      <SelectPrimitive.ItemText class='gap-2 flex flex-1 shrink-0 whitespace-nowrap'>
        {local.children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator class='right-2 size-4 pointer-events-none absolute flex items-center justify-center'>
        <OutlineCheckIcon class='pointer-events-none' />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export const SelectSeparator: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='select-separator'
      class={cn('-mx-1 my-1 pointer-events-none h-px bg-border', local.class)}
      {...others}
    />
  );
};

export type { SelectTabsProps, SelectTabsTab } from './SelectTabs';

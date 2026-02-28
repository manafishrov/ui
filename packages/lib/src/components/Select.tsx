import { Select as SelectPrimitive } from '@ark-ui/solid/select';
import { MdOutlineCheck, MdOutlineClose, MdOutlineUnfold_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const SelectControl = SelectPrimitive.Control;
export const SelectItemContext = SelectPrimitive.ItemContext;
export const SelectHiddenSelect = SelectPrimitive.HiddenSelect;
export const SelectList = SelectPrimitive.List;
export const SelectContext = SelectPrimitive.Context;

export const Select = <T extends { value: string; label: string }>(
  props: SelectPrimitive.RootProps<T> & { class?: string },
) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.Root class={cn('gap-1.5 flex w-full flex-col', local.class)} {...others} />
  );
};

export const SelectLabel: Component<SelectPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
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
      class={cn('scroll-my-1 p-1', local.class)}
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
        'py-2 pr-2 pl-2.5 text-sm *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*="size-"])]:size-4 flex w-fit items-center justify-between rounded-lg border border-input bg-transparent whitespace-nowrap transition-colors outline-none select-none disabled:cursor-not-allowed disabled:opacity-50 data-placeholder-shown:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        'data-focus:border-ring data-focus:ring-[3px] data-focus:ring-ring/50',
        'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40',
        'data-disabled:bg-input/50 data-disabled:opacity-50 dark:data-disabled:bg-input/80',
        'data-readonly:cursor-default data-readonly:data-focus:border-input data-readonly:data-focus:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SelectIndicator: Component<SelectPrimitive.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <SelectPrimitive.Indicator class={cn(local.class)} {...others}>
      {local.children ?? <MdOutlineUnfold_more class='size-4 text-muted-foreground' />}
    </SelectPrimitive.Indicator>
  );
};

export const SelectClearTrigger: Component<SelectPrimitive.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <SelectPrimitive.ClearTrigger
      class={cn('p-0.5 text-muted-foreground transition-colors hover:text-foreground', local.class)}
      {...others}
    >
      {local.children ?? <MdOutlineClose class='size-3.5' />}
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
        'min-w-36 shadow-md relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
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
        "gap-1.5 py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:gap-2 relative flex w-full cursor-default items-center rounded-md outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center",
        local.class,
      )}
      {...others}
    >
      <SelectPrimitive.ItemText class='gap-2 flex flex-1 shrink-0 whitespace-nowrap'>
        {local.children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator class='right-2 size-4 pointer-events-none absolute flex items-center justify-center'>
        <MdOutlineCheck class='pointer-events-none' />
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

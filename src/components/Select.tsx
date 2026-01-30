import { Select as SelectPrimitive, createListCollection } from '@ark-ui/solid/select';
import { MdOutlineCheck, MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';

export const Select = SelectPrimitive.Root;
export const SelectClearTrigger = SelectPrimitive.ClearTrigger;
export const SelectControl = SelectPrimitive.Control;
export const SelectItemContext = SelectPrimitive.ItemContext;
export const SelectHiddenSelect = SelectPrimitive.HiddenSelect;
export const SelectList = SelectPrimitive.List;
export { createListCollection };

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

export type SelectTriggerProps = SelectPrimitive.TriggerProps & {
  size?: 'sm' | 'default';
};

export const SelectTrigger: Component<SelectTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'children']);
  const size = local.size ?? 'default';

  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      class={cn(
        "border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-[3px] aria-invalid:ring-[3px] data-size-default:h-8 data-size-sm:h-7 data-size-sm:rounded-[min(var(--radius-md),10px)] *:data-slot-select-value:flex *:data-slot-select-value:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-slot-select-value:line-clamp-1 *:data-slot-select-value:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <SelectPrimitive.Indicator>
        <MdOutlineExpand_more class='text-muted-foreground pointer-events-none size-4' />
      </SelectPrimitive.Indicator>
    </SelectPrimitive.Trigger>
  );
};

export const SelectContent: Component<SelectPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Portal>
      <SelectPrimitive.Positioner class='isolate z-50'>
        <SelectPrimitive.Content
          data-slot='select-content'
          class={cn(
            'bg-popover text-popover-foreground data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:fade-in-0 data-state-closed:zoom-out-95 data-state-open:zoom-in-95 data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg shadow-md ring-1 duration-100 relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto',
            local.class,
          )}
          {...others}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  );
};

export const SelectLabel: Component<SelectPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SelectPrimitive.ItemGroupLabel
      data-slot='select-label'
      class={cn('text-muted-foreground px-1.5 py-1 text-xs', local.class)}
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
        "focus:bg-accent focus:text-accent-foreground not-data-variant-destructive:focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    >
      <SelectPrimitive.ItemText class='flex flex-1 shrink-0 gap-2 whitespace-nowrap'>
        {local.children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator class='pointer-events-none absolute right-2 flex size-4 items-center justify-center'>
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
      class={cn('bg-border -mx-1 my-1 h-px pointer-events-none', local.class)}
      {...others}
    />
  );
};

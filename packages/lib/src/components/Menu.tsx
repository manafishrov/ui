import { Menu as MenuPrimitive } from '@ark-ui/solid/menu';
import { MdOutlineCheck, MdOutlineChevron_right } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Menu = MenuPrimitive.Root;
export const MenuTrigger = MenuPrimitive.Trigger;
export const MenuContext = MenuPrimitive.Context;
export const MenuItemGroup = MenuPrimitive.ItemGroup;

export const MenuPositioner: Component<MenuPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Positioner
      data-slot='menu-positioner'
      class={cn('isolate z-50', local.class)}
      {...others}
    />
  );
};

export const MenuContent: Component<MenuPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Content
      data-slot='menu-content'
      class={cn(
        'bg-popover text-popover-foreground min-w-32 overflow-hidden rounded-md border p-1 shadow-md outline-none isolate',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const MenuItem: Component<MenuPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Item
      data-slot='menu-item'
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const MenuTriggerItem: Component<MenuPrimitive.TriggerItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.TriggerItem
      data-slot='menu-trigger-item'
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children}
      <MdOutlineChevron_right class='ml-auto size-4' />
    </MenuPrimitive.TriggerItem>
  );
};

export const MenuItemGroupLabel: Component<MenuPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.ItemGroupLabel
      data-slot='menu-item-group-label'
      class={cn('px-2 py-1.5 text-sm font-semibold', local.class)}
      {...others}
    />
  );
};

export const MenuSeparator: Component<MenuPrimitive.SeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Separator
      data-slot='menu-separator'
      class={cn('bg-muted -mx-1 my-1 h-px', local.class)}
      {...others}
    />
  );
};

export const MenuItemIndicator: Component<MenuPrimitive.ItemIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.ItemIndicator
      data-slot='menu-item-indicator'
      class={cn('absolute right-2 flex size-3.5 items-center justify-center', local.class)}
      {...others}
    >
      {local.children ?? <MdOutlineCheck class='size-4' />}
    </MenuPrimitive.ItemIndicator>
  );
};

export const MenuCheckboxItem: Component<MenuPrimitive.CheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.CheckboxItem
      data-slot='menu-checkbox-item'
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      <MenuPrimitive.ItemIndicator class='absolute left-2 flex size-3.5 items-center justify-center'>
        <MdOutlineCheck class='size-4' />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText>{local.children}</MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  );
};

export const MenuRadioItem: Component<MenuPrimitive.RadioItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.RadioItem
      data-slot='menu-radio-item'
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      <MenuPrimitive.ItemIndicator class='absolute left-2 flex size-3.5 items-center justify-center'>
        <div class='size-2 rounded-full bg-current' />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText>{local.children}</MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
};

export const MenuShortcut: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <span class={cn('ml-auto text-xs tracking-widest opacity-60', local.class)} {...others} />;
};

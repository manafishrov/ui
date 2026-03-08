import { Menu as MenuPrimitive } from '@ark-ui/solid/menu';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import CheckIcon from '~icons/material-symbols/check';
import ChevronRightIcon from '~icons/material-symbols/chevron-right';
import SearchIcon from '~icons/material-symbols/search';

export const MenuCombobox = MenuPrimitive.Root;
export const MenuComboboxTrigger = MenuPrimitive.Trigger;
export const MenuComboboxContext = MenuPrimitive.Context;
export const MenuComboboxItemGroup = MenuPrimitive.ItemGroup;
export const MenuComboboxItemText = MenuPrimitive.ItemText;
export const MenuComboboxRadioItemGroup = MenuPrimitive.RadioItemGroup;

export const MenuComboboxPositioner: Component<MenuPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Positioner
      data-slot='menu-combobox-positioner'
      class={cn('isolate z-50', local.class)}
      {...others}
    />
  );
};
export const MenuComboboxContent: Component<MenuPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Content
      data-slot='menu-combobox-content'
      class={cn(
        'min-w-48 p-0 shadow-md isolate overflow-hidden rounded-md border bg-popover text-popover-foreground outline-none',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        local.class,
      )}
      {...others}
    />
  );
};
export type MenuComboboxSearchInputProps = ComponentProps<'input'> & {
  onValueChange?: (value: string) => void;
};
export const MenuComboboxSearchInput: Component<MenuComboboxSearchInputProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'onValueChange', 'value']);
  const handleInput = (inputEvent: InputEvent & { currentTarget: HTMLInputElement }): void => {
    if (typeof local.onValueChange === 'function') {
      local.onValueChange(inputEvent.currentTarget.value);
    }
  };
  return (
    <div data-slot='menu-combobox-search' class='gap-2 px-3 py-2 flex items-center border-b'>
      <SearchIcon class='size-4 shrink-0 text-muted-foreground' />
      <input
        type='text'
        class={cn(
          'text-sm flex-1 bg-transparent outline-none placeholder:text-muted-foreground',
          local.class,
        )}
        onInput={handleInput}
        value={local.value}
        {...others}
      />
    </div>
  );
};
export const MenuComboboxItem: Component<MenuPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Item
      data-slot='menu-combobox-item'
      class={cn(
        'px-3 py-2 text-sm mx-1 my-0.5 relative flex cursor-default items-center rounded-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled=true]:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};
export const MenuComboboxTriggerItem: Component<MenuPrimitive.TriggerItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.TriggerItem
      data-slot='menu-combobox-trigger-item'
      class={cn(
        'px-3 py-2 text-sm mx-1 my-0.5 flex cursor-default items-center rounded-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children}
      <ChevronRightIcon class='size-4 ml-auto' />
    </MenuPrimitive.TriggerItem>
  );
};
export const MenuComboboxItemGroupLabel: Component<MenuPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.ItemGroupLabel
      data-slot='menu-combobox-item-group-label'
      class={cn('px-3 py-1.5 text-xs font-semibold text-muted-foreground', local.class)}
      {...others}
    />
  );
};
export const MenuComboboxSeparator: Component<MenuPrimitive.SeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MenuPrimitive.Separator
      data-slot='menu-combobox-separator'
      class={cn('-mx-1 my-1 h-px bg-muted', local.class)}
      {...others}
    />
  );
};
export const MenuComboboxItemIndicator: Component<MenuPrimitive.ItemIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.ItemIndicator
      data-slot='menu-combobox-item-indicator'
      class={cn('right-3 size-3.5 absolute flex items-center justify-center', local.class)}
      {...others}
    >
      {local.children ?? <CheckIcon class='size-4' />}
    </MenuPrimitive.ItemIndicator>
  );
};
export const MenuComboboxCheckboxItem: Component<MenuPrimitive.CheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.CheckboxItem
      data-slot='menu-combobox-checkbox-item'
      class={cn(
        'py-2 pr-3 pl-9 text-sm mx-1 my-0.5 relative flex cursor-default items-center rounded-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled=true]:opacity-50',
        local.class,
      )}
      {...others}
    >
      <MenuPrimitive.ItemIndicator class='left-3 size-3.5 absolute flex items-center justify-center'>
        <CheckIcon class='size-4' />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText>{local.children}</MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  );
};
export const MenuComboboxRadioItem: Component<MenuPrimitive.RadioItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.RadioItem
      data-slot='menu-combobox-radio-item'
      class={cn(
        'py-2 pr-3 pl-9 text-sm mx-1 my-0.5 relative flex cursor-default items-center rounded-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled=true]:opacity-50',
        local.class,
      )}
      {...others}
    >
      <MenuPrimitive.ItemIndicator class='left-3 size-3.5 absolute flex items-center justify-center'>
        <div class='size-2 rounded-full bg-current' />
      </MenuPrimitive.ItemIndicator>
      <MenuPrimitive.ItemText>{local.children}</MenuPrimitive.ItemText>
    </MenuPrimitive.RadioItem>
  );
};
export const MenuComboboxShortcut: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <span class={cn('text-xs tracking-widest ml-auto opacity-60', local.class)} {...others} />;
};

export type MenuComboboxEmptyProps = ComponentProps<'div'> & { searchValue?: string };
export const MenuComboboxEmpty: Component<MenuComboboxEmptyProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'searchValue']);
  return (
    <div
      data-slot='menu-combobox-empty'
      class={cn('py-6 text-sm text-center text-muted-foreground', local.class)}
      {...others}
    >
      No results found.
    </div>
  );
};
export type {
  MenuComboboxCheckboxItemData,
  MenuComboboxItemData,
  MenuComboboxItemGroupData,
  MenuComboboxRadioItemGroupData,
  MenuComboboxRadioItemData,
  MenuComboboxSeparatorData,
  MenuComboboxGroupedListProps,
  MenuComboboxListProps,
} from './MenuComboboxList';
export { MenuComboboxGroupedList, MenuComboboxList } from './MenuComboboxList';

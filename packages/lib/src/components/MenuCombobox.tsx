import { Menu as MenuPrimitive } from '@ark-ui/solid/menu';
import { type Component, type ComponentProps, splitProps, createMemo, For } from 'solid-js';
import { cn } from 'tailwind-variants';
import OutlineCheckIcon from '~icons/ic/outline-check';
import OutlineChevronRightIcon from '~icons/ic/outline-chevron-right';
import OutlineSearchIcon from '~icons/ic/outline-search';

export const MenuCombobox = MenuPrimitive.Root;
export const MenuComboboxTrigger = MenuPrimitive.Trigger;
export const MenuComboboxContext = MenuPrimitive.Context;
export const MenuComboboxItemGroup = MenuPrimitive.ItemGroup;

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

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    local.onValueChange?.(target.value);
  };

  return (
    <div data-slot='menu-combobox-search' class='flex items-center gap-2 px-3 py-2 border-b'>
      <OutlineSearchIcon class='size-4 text-muted-foreground shrink-0' />
      <input
        type='text'
        class={cn(
          'flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground',
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
        'px-3 py-2 text-sm relative flex cursor-default items-center rounded-sm mx-1 my-0.5 transition-colors outline-none select-none data-disabled:pointer-events-none data-[disabled=true]:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
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
        'px-3 py-2 text-sm flex cursor-default items-center rounded-sm mx-1 my-0.5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children}
      <OutlineChevronRightIcon class='size-4 ml-auto' />
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
      {local.children ?? <OutlineCheckIcon class='size-4' />}
    </MenuPrimitive.ItemIndicator>
  );
};

export const MenuComboboxCheckboxItem: Component<MenuPrimitive.CheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <MenuPrimitive.CheckboxItem
      data-slot='menu-combobox-checkbox-item'
      class={cn(
        'py-2 pr-3 pl-9 text-sm relative flex cursor-default items-center rounded-sm mx-1 my-0.5 transition-colors outline-none select-none data-disabled:pointer-events-none data-[disabled=true]:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        local.class,
      )}
      {...others}
    >
      <MenuPrimitive.ItemIndicator class='left-3 size-3.5 absolute flex items-center justify-center'>
        <OutlineCheckIcon class='size-4' />
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
        'py-2 pr-3 pl-9 text-sm relative flex cursor-default items-center rounded-sm mx-1 my-0.5 transition-colors outline-none select-none data-disabled:pointer-events-none data-[disabled=true]:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground',
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

export type MenuComboboxEmptyProps = ComponentProps<'div'> & {
  searchValue?: string;
};

export const MenuComboboxEmpty: Component<MenuComboboxEmptyProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'searchValue']);

  return (
    <div
      data-slot='menu-combobox-empty'
      class={cn('py-6 text-center text-sm text-muted-foreground', local.class)}
      {...others}
    >
      No results found.
    </div>
  );
};

export type MenuItemData = {
  value: string;
  label: string;
  disabled?: boolean;
  shortcut?: string;
};

export type MenuCheckboxItemData = {
  type: 'checkbox';
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

export type MenuRadioItemData = {
  type: 'radio';
  value: string;
  label: string;
  disabled?: boolean;
};

export type MenuRadioGroupData = {
  type: 'radio-group';
  value: string;
  items: MenuRadioItemData[];
};

export type MenuSeparatorData = {
  type: 'separator';
};

export type MenuItemGroupData = {
  label: string;
  items: (MenuItemData | MenuCheckboxItemData | MenuRadioGroupData | MenuSeparatorData)[];
};

export type MenuComboboxListProps = {
  items: MenuItemData[];
  searchValue?: string;
  class?: string;
};

export const MenuComboboxList: Component<MenuComboboxListProps> = (props) => {
  const [local] = splitProps(props, ['items', 'searchValue', 'class']);

  const filteredItems = createMemo(() => {
    const search = (local.searchValue ?? '').toLowerCase().trim();
    if (!search) return local.items;

    return local.items.filter(
      (item) =>
        item.label.toLowerCase().includes(search) || item.value.toLowerCase().includes(search),
    );
  });

  return (
    <div class={cn('p-1 overflow-y-auto max-h-64', local.class)}>
      <For each={filteredItems()}>
        {(item) => (
          <MenuComboboxItem value={item.value} disabled={item.disabled}>
            {item.label}
            {item.shortcut && <MenuComboboxShortcut>{item.shortcut}</MenuComboboxShortcut>}
          </MenuComboboxItem>
        )}
      </For>
      {filteredItems().length === 0 && (
        <MenuComboboxEmpty
          {...(local.searchValue !== undefined && { searchValue: local.searchValue })}
        />
      )}
    </div>
  );
};

export type MenuComboboxGroupedListProps = {
  groups: MenuItemGroupData[];
  searchValue?: string;
  class?: string;
};

const matchesSearch = (
  item: MenuItemData | MenuCheckboxItemData | MenuRadioItemData,
  search: string,
): boolean => {
  return item.label.toLowerCase().includes(search) || item.value.toLowerCase().includes(search);
};

export const MenuComboboxGroupedList: Component<MenuComboboxGroupedListProps> = (props) => {
  const [local] = splitProps(props, ['groups', 'searchValue', 'class']);

  const filteredGroups = createMemo(() => {
    const search = (local.searchValue ?? '').toLowerCase().trim();
    if (!search) return local.groups;

    return local.groups
      .map((group) => {
        const filteredItems = group.items
          .map((item) => {
            if ('type' in item) {
              if (item.type === 'separator') return item;
              if (item.type === 'checkbox') {
                return matchesSearch(item, search) ? item : null;
              }
              if (item.type === 'radio-group') {
                const filteredRadioItems = item.items.filter((ri) => matchesSearch(ri, search));
                if (filteredRadioItems.length === 0) return null;
                return { ...item, items: filteredRadioItems } as MenuRadioGroupData;
              }
              return null;
            }
            return matchesSearch(item, search) ? item : null;
          })
          .filter((item): item is NonNullable<typeof item> => item !== null);

        if (filteredItems.length === 0) return null;

        return { ...group, items: filteredItems };
      })
      .filter((group): group is NonNullable<typeof group> => group !== null);
  });

  const hasResults = () => filteredGroups().length > 0;

  return (
    <div class={cn('p-1 overflow-y-auto max-h-64', local.class)}>
      <For each={filteredGroups()}>
        {(group, groupIndex) => (
          <>
            {groupIndex() > 0 && <MenuComboboxSeparator />}
            <MenuComboboxItemGroup>
              <MenuComboboxItemGroupLabel>{group.label}</MenuComboboxItemGroupLabel>
              <For each={group.items}>
                {(item) => {
                  if ('type' in item) {
                    if (item.type === 'separator') {
                      return <MenuComboboxSeparator />;
                    }
                    if (item.type === 'checkbox') {
                      return (
                        <MenuComboboxCheckboxItem
                          value={item.value}
                          disabled={item.disabled}
                          checked={item.checked ?? false}
                        >
                          {item.label}
                        </MenuComboboxCheckboxItem>
                      );
                    }
                    if (item.type === 'radio-group') {
                      return (
                        <MenuComboboxRadioItemGroup value={item.value}>
                          <For each={item.items}>
                            {(radioItem) => (
                              <MenuComboboxRadioItem
                                value={radioItem.value}
                                disabled={radioItem.disabled}
                              >
                                {radioItem.label}
                              </MenuComboboxRadioItem>
                            )}
                          </For>
                        </MenuComboboxRadioItemGroup>
                      );
                    }
                    return null;
                  }
                  return (
                    <MenuComboboxItem value={item.value} disabled={item.disabled}>
                      {item.label}
                      {item.shortcut && (
                        <MenuComboboxShortcut>{item.shortcut}</MenuComboboxShortcut>
                      )}
                    </MenuComboboxItem>
                  );
                }}
              </For>
            </MenuComboboxItemGroup>
          </>
        )}
      </For>
      {!hasResults() && (
        <MenuComboboxEmpty
          {...(local.searchValue !== undefined && { searchValue: local.searchValue })}
        />
      )}
    </div>
  );
};

export const MenuComboboxItemText = MenuPrimitive.ItemText;
export const MenuComboboxRadioItemGroup = MenuPrimitive.RadioItemGroup;

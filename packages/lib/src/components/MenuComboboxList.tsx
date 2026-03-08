import { type Component, type JSXElement, For, createMemo, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import {
  MenuComboboxCheckboxItem,
  MenuComboboxEmpty,
  MenuComboboxItem,
  MenuComboboxItemGroup,
  MenuComboboxItemGroupLabel,
  MenuComboboxRadioItem,
  MenuComboboxRadioItemGroup,
  MenuComboboxSeparator,
  MenuComboboxShortcut,
} from '@/components/MenuCombobox';

export type MenuComboboxItemData = {
  value: string;
  label: string;
  disabled?: boolean;
  shortcut?: string;
};
export type MenuComboboxCheckboxItemData = {
  type: 'checkbox';
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
};
export type MenuComboboxRadioItemData = {
  type: 'radio';
  value: string;
  label: string;
  disabled?: boolean;
};
export type MenuComboboxRadioItemGroupData = {
  type: 'radio-group';
  value: string;
  items: MenuComboboxRadioItemData[];
};
export type MenuComboboxSeparatorData = { type: 'separator' };
export type MenuComboboxItemGroupData = {
  label: string;
  items: (
    | MenuComboboxItemData
    | MenuComboboxCheckboxItemData
    | MenuComboboxRadioItemGroupData
    | MenuComboboxSeparatorData
  )[];
};

export type MenuComboboxListProps = {
  items: MenuComboboxItemData[];
  searchValue?: string;
  class?: string;
};
export type MenuComboboxGroupedListProps = {
  groups: MenuComboboxItemGroupData[];
  searchValue?: string;
  class?: string;
};

const hasShortcut = (shortcut?: string): boolean => typeof shortcut === 'string' && shortcut !== '';
const matchesSearch = (
  item: MenuComboboxItemData | MenuComboboxCheckboxItemData | MenuComboboxRadioItemData,
  search: string,
): boolean =>
  item.label.toLowerCase().includes(search) || item.value.toLowerCase().includes(search);

const renderRadioItems = (items: MenuComboboxRadioItemData[]): JSXElement => (
  <For each={items}>
    {(radioItem) => (
      <MenuComboboxRadioItem value={radioItem.value} disabled={radioItem.disabled}>
        {radioItem.label}
      </MenuComboboxRadioItem>
    )}
  </For>
);

const renderGroupedItem = (
  item:
    | MenuComboboxItemData
    | MenuComboboxCheckboxItemData
    | MenuComboboxRadioItemGroupData
    | MenuComboboxSeparatorData,
): JSXElement => {
  if (!('type' in item)) {
    return (
      <MenuComboboxItem value={item.value} disabled={item.disabled}>
        {item.label}
        {hasShortcut(item.shortcut) && <MenuComboboxShortcut>{item.shortcut}</MenuComboboxShortcut>}
      </MenuComboboxItem>
    );
  }
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
        {renderRadioItems(item.items)}
      </MenuComboboxRadioItemGroup>
    );
  }
  return <></>;
};

type GroupFilterResult =
  | MenuComboboxItemData
  | MenuComboboxCheckboxItemData
  | MenuComboboxRadioItemGroupData
  | MenuComboboxSeparatorData;

const filterGroupItem = (
  item:
    | MenuComboboxItemData
    | MenuComboboxCheckboxItemData
    | MenuComboboxRadioItemGroupData
    | MenuComboboxSeparatorData,
  search: string,
): GroupFilterResult[] => {
  if (!('type' in item)) {
    return matchesSearch(item, search) ? [item] : [];
  }
  if (item.type === 'separator') {
    return [item];
  }
  if (item.type === 'checkbox') {
    return matchesSearch(item, search) ? [item] : [];
  }
  const filteredRadioItems = item.items.filter((radioItem) => matchesSearch(radioItem, search));
  return filteredRadioItems.length > 0 ? [{ ...item, items: filteredRadioItems }] : [];
};

const GroupItems: Component<{ items: MenuComboboxItemGroupData['items'] }> = (props) => (
  <For each={props.items}>{(item) => renderGroupedItem(item)}</For>
);

const GroupSection: Component<{ group: MenuComboboxItemGroupData; showSeparator: boolean }> = (
  props,
) => (
  <>
    {props.showSeparator && <MenuComboboxSeparator />}
    <MenuComboboxItemGroup>
      <MenuComboboxItemGroupLabel>{props.group.label}</MenuComboboxItemGroupLabel>
      <GroupItems items={props.group.items} />
    </MenuComboboxItemGroup>
  </>
);

export const MenuComboboxList: Component<MenuComboboxListProps> = (props) => {
  const [local] = splitProps(props, ['items', 'searchValue', 'class']);
  const filteredItems = createMemo(() => {
    const search = (local.searchValue ?? '').toLowerCase().trim();
    return search === ''
      ? local.items
      : local.items.filter(
          (item) =>
            item.label.toLowerCase().includes(search) || item.value.toLowerCase().includes(search),
        );
  });
  const emptyProps = (): { searchValue: string } | Record<string, never> =>
    typeof local.searchValue === 'string' ? { searchValue: local.searchValue } : {};
  return (
    <div class={cn('p-1 max-h-64 overflow-y-auto', local.class)}>
      <For each={filteredItems()}>
        {(item) => (
          <MenuComboboxItem value={item.value} disabled={item.disabled}>
            {item.label}
            {hasShortcut(item.shortcut) && (
              <MenuComboboxShortcut>{item.shortcut}</MenuComboboxShortcut>
            )}
          </MenuComboboxItem>
        )}
      </For>
      {filteredItems().length === 0 && <MenuComboboxEmpty {...emptyProps()} />}
    </div>
  );
};

export const MenuComboboxGroupedList: Component<MenuComboboxGroupedListProps> = (props) => {
  const [local] = splitProps(props, ['groups', 'searchValue', 'class']);
  const filteredGroups = createMemo(() => {
    const search = (local.searchValue ?? '').toLowerCase().trim();
    if (search === '') {
      return local.groups;
    }
    return local.groups
      .map((group) => {
        const filteredItems = group.items.flatMap((item) => filterGroupItem(item, search));
        if (filteredItems.length > 0) {
          return { ...group, items: filteredItems };
        }
        return false;
      })
      .filter((group): group is MenuComboboxItemGroupData => group !== false);
  });

  const emptyProps = (): { searchValue: string } | Record<string, never> =>
    typeof local.searchValue === 'string' ? { searchValue: local.searchValue } : {};
  return (
    <div class={cn('p-1 max-h-64 overflow-y-auto', local.class)}>
      <For each={filteredGroups()}>
        {(group, groupIndex) => <GroupSection group={group} showSeparator={groupIndex() > 0} />}
      </For>
      {filteredGroups().length === 0 && <MenuComboboxEmpty {...emptyProps()} />}
    </div>
  );
};

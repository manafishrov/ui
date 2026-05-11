import { Button } from '@manafishrov/ui/button';
import {
  MenuCombobox,
  MenuComboboxTrigger,
  MenuComboboxPositioner,
  MenuComboboxContent,
  MenuComboboxSearchInput,
  MenuComboboxList,
  MenuComboboxGroupedList,
  type MenuComboboxItemData,
  type MenuComboboxItemGroupData,
} from '@manafishrov/ui/menu-combobox';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { type Component, createSignal } from 'solid-js';

import * as m from '@/paraglide/messages';

const menuItems: MenuComboboxItemData[] = [
  { value: 'profile', label: 'Profile' },
  { value: 'billing', label: 'Billing', shortcut: '⌘B' },
  { value: 'settings', label: 'Settings', shortcut: '⌘S' },
  { value: 'keyboard-shortcuts', label: 'Keyboard Shortcuts', shortcut: '⌘K' },
  { value: 'team', label: 'Team' },
  { value: 'invite-members', label: 'Invite Members' },
  { value: 'notifications', label: 'Notifications' },
  { value: 'api-keys', label: 'API Keys' },
  { value: 'support', label: 'Support' },
  { value: 'docs', label: 'Documentation' },
  { value: 'changelog', label: 'Changelog' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'logout', label: 'Log Out', shortcut: '⌘Q' },
];

const menuGroups: MenuComboboxItemGroupData[] = [
  {
    label: 'Account',
    items: [
      { value: 'profile', label: 'Profile' },
      { value: 'billing', label: 'Billing', shortcut: '⌘B' },
      { value: 'settings', label: 'Settings', shortcut: '⌘S' },
    ],
  },
  {
    label: 'Preferences',
    items: [
      { type: 'checkbox', value: 'show-toolbar', label: 'Show Toolbar', checked: true },
      { type: 'checkbox', value: 'show-sidebar', label: 'Show Sidebar', checked: true },
      {
        type: 'radio-group',
        value: 'light',
        items: [
          { type: 'radio', value: 'light', label: 'Light Mode' },
          { type: 'radio', value: 'dark', label: 'Dark Mode' },
          { type: 'radio', value: 'system', label: 'System' },
        ],
      },
    ],
  },
];

const BasicMenuComboboxExample: Component<{
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}> = (props) => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_basic()}</H2>
    <MenuCombobox>
      <MenuComboboxTrigger
        asChild={(triggerProps) => (
          <Button variant='outline' {...triggerProps()}>
            Search Commands
          </Button>
        )}
      />
      <MenuComboboxPositioner>
        <MenuComboboxContent>
          <MenuComboboxSearchInput
            placeholder='Search...'
            value={props.searchValue}
            onValueChange={props.onSearchValueChange}
          />
          <MenuComboboxList items={menuItems} searchValue={props.searchValue} />
        </MenuComboboxContent>
      </MenuComboboxPositioner>
    </MenuCombobox>
  </div>
);

const GroupedMenuComboboxExample: Component<{
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}> = (props) => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_group()}</H2>
    <MenuCombobox>
      <MenuComboboxTrigger
        asChild={(triggerProps) => (
          <Button variant='outline' {...triggerProps()}>
            Open Menu
          </Button>
        )}
      />
      <MenuComboboxPositioner>
        <MenuComboboxContent>
          <MenuComboboxSearchInput
            placeholder='Filter options...'
            value={props.searchValue}
            onValueChange={props.onSearchValueChange}
          />
          <MenuComboboxGroupedList groups={menuGroups} searchValue={props.searchValue} />
        </MenuComboboxContent>
      </MenuComboboxPositioner>
    </MenuCombobox>
  </div>
);

const MenuComboboxDocPage: Component = () => {
  const [searchValue, setSearchValue] = createSignal('');
  const [groupSearchValue, setGroupSearchValue] = createSignal('');

  return (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Menu Combobox</H1>
        <Lead>{m.docs_component_menu_combobox_description()}</Lead>
      </div>

      <BasicMenuComboboxExample
        searchValue={searchValue()}
        onSearchValueChange={(value) => {
          setSearchValue(value);
        }}
      />

      <GroupedMenuComboboxExample
        searchValue={groupSearchValue()}
        onSearchValueChange={(value) => {
          setGroupSearchValue(value);
        }}
      />
    </div>
  );
};

export const Route = createFileRoute('/components-menu-combobox')({
  component: MenuComboboxDocPage,
});

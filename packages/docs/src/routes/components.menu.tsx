import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuItemGroup,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuTriggerItem,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuItemIndicator,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuShortcut,
} from '@manafishrov/ui/menu';
import { createFileRoute } from '@tanstack/solid-router';

const MenuDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Menu</h1>
      <p class='mt-2 text-muted-foreground'>
        Displays a menu to the user—such as a set of actions or functions—triggered by a button.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Menu>
        <MenuTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Open Menu
            </Button>
          )}
        />
        <MenuPositioner>
          <MenuContent>
            <MenuItemGroup>
              <MenuItemGroupLabel>My Account</MenuItemGroupLabel>
              <MenuSeparator />
              <MenuItem value='profile'>Profile</MenuItem>
              <MenuItem value='billing'>Billing</MenuItem>
              <MenuItem value='settings'>
                Settings
                <MenuShortcut>⌘S</MenuShortcut>
              </MenuItem>
            </MenuItemGroup>
            <MenuSeparator />
            <MenuItemGroup>
              <MenuItemGroupLabel>Preferences</MenuItemGroupLabel>
              <MenuSeparator />
              <MenuCheckboxItem checked>Show Toolbar</MenuCheckboxItem>
              <MenuCheckboxItem>Show Full Path</MenuCheckboxItem>
              <MenuSeparator />
              <MenuRadioItem value='light'>Light Mode</MenuRadioItem>
              <MenuRadioItem value='dark'>Dark Mode</MenuRadioItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuPositioner>
      </Menu>
    </div>
  </div>
);

export const Route = createFileRoute('/components/menu')({
  component: MenuDocPage,
});

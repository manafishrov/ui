import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuItemGroup,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuShortcut,
} from '@manafishrov/ui/menu';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const MenuDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Menu</H1>
      <Lead>{m.docs_component_menu_description()}</Lead>
    </div>

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
            <MenuCheckboxItem value='show-toolbar' checked>
              Show Toolbar
            </MenuCheckboxItem>
            <MenuCheckboxItem value='show-full-path' checked={false}>
              Show Full Path
            </MenuCheckboxItem>

            <MenuSeparator />
            <MenuRadioItem value='light'>Light Mode</MenuRadioItem>
            <MenuRadioItem value='dark'>Dark Mode</MenuRadioItem>
          </MenuItemGroup>
        </MenuContent>
      </MenuPositioner>
    </Menu>
  </div>
);

export const Route = createFileRoute('/components-menu')({
  component: MenuDocPage,
});

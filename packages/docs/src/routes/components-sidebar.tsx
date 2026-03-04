import type { Component } from 'solid-js';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
} from '@manafishrov/ui/sidebar';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import CalendarTodayIcon from '~icons/material-symbols/calendar-today';
import FolderIcon from '~icons/material-symbols/folder';
import HomeIcon from '~icons/material-symbols/home';
import MailIcon from '~icons/material-symbols/mail';
import PersonIcon from '~icons/material-symbols/person';
import SettingsIcon from '~icons/material-symbols/settings';

import * as m from '@/paraglide/messages';

const ApplicationGroup: Component = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Home' isActive>
            <HomeIcon />
            <span>Home</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Inbox'>
            <MailIcon />
            <span>Inbox</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Calendar'>
            <CalendarTodayIcon />
            <span>Calendar</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const DocumentationGroup: Component = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Documentation</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Getting Started'>
            <FolderIcon />
            <span>Getting Started</span>
          </SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton isActive>Installation</SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Project Structure</SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Components'>
            <FolderIcon />
            <span>Components</span>
          </SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Button</SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Sidebar</SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const SettingsGroup: Component = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Settings</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Profile'>
            <PersonIcon />
            <span>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Preferences'>
            <SettingsIcon />
            <span>Preferences</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const AppSidebar: Component = () => (
  <Sidebar collapsible='icon'>
    <SidebarHeader class='mt-20'>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size='lg'
            tooltip='Acme Inc'
            class='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
          >
            <div class='size-8 flex aspect-square items-center justify-center rounded-lg bg-primary text-primary-foreground'>
              <FolderIcon class='size-4' />
            </div>
            <div class='text-sm leading-tight grid flex-1 text-left'>
              <span class='font-semibold truncate'>Acme Inc</span>
              <span class='text-xs truncate'>Enterprise</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <ApplicationGroup />
      <DocumentationGroup />
      <SettingsGroup />
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='User Account'>
            <PersonIcon />
            <span>User Account</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);

const SidebarDocPage: Component = () => (
  <SidebarProvider>
    <AppSidebar />
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Sidebar</H1>
        <Lead>{m.docs_component_sidebar_description()}</Lead>
      </div>
      <SidebarTrigger />
    </div>
  </SidebarProvider>
);

export const Route = createFileRoute('/components-sidebar')({
  component: SidebarDocPage,
});

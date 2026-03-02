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
import OutlineCalendarTodayIcon from '~icons/ic/outline-calendar-today';
import OutlineFolderIcon from '~icons/ic/outline-folder';
import OutlineHomeIcon from '~icons/ic/outline-home';
import OutlineMailIcon from '~icons/ic/outline-mail';
import OutlinePersonIcon from '~icons/ic/outline-person';
import OutlineSettingsIcon from '~icons/ic/outline-settings';

import * as m from '@/paraglide/messages';

const ApplicationGroup: Component = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Home' isActive>
            <OutlineHomeIcon />
            <span>Home</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Inbox'>
            <OutlineMailIcon />
            <span>Inbox</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Calendar'>
            <OutlineCalendarTodayIcon />
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
            <OutlineFolderIcon />
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
            <OutlineFolderIcon />
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
            <OutlinePersonIcon />
            <span>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip='Preferences'>
            <OutlineSettingsIcon />
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
              <OutlineFolderIcon class='size-4' />
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
            <OutlinePersonIcon />
            <span>User Account</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);

const SidebarDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Sidebar</H1>
      <Lead>{m.docs_component_sidebar_description()}</Lead>
    </div>

    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
    </SidebarProvider>
  </div>
);

export const Route = createFileRoute('/components/sidebar')({
  component: SidebarDocPage,
});

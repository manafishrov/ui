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
  SidebarInset,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@manafishrov/ui/sidebar';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import {
  MdOutlineHome,
  MdOutlineSettings,
  MdOutlinePerson,
  MdOutlineMail,
  MdOutlineCalendar_today,
  MdOutlineFolder,
} from 'solid-icons/md';

import * as m from '@/paraglide/messages';

const SidebarDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Sidebar</H1>
      <Lead>{m.docs_component_sidebar_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>Default</H2>
      <div class='relative h-[500px] overflow-hidden rounded-lg border'>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div class='gap-2 px-2 py-1.5 flex items-center'>
                <div class='size-6 flex items-center justify-center rounded-md bg-primary text-primary-foreground'>
                  <MdOutlineFolder class='size-4' />
                </div>
                <span class='font-semibold'>Acme Inc</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <MdOutlineHome />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MdOutlineMail />
                        <span>Inbox</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MdOutlineCalendar_today />
                        <span>Calendar</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MdOutlinePerson />
                        <span>Profile</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MdOutlineSettings />
                        <span>Preferences</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <MdOutlinePerson />
                    <span>User Account</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header class='h-12 gap-2 px-4 flex items-center border-b'>
              <SidebarTrigger />
              <span class='text-sm font-medium'>Dashboard</span>
            </header>
            <div class='p-4'>
              <div class='h-[400px] rounded-xl border bg-muted/50' />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>Collapsible Icon</H2>
      <div class='relative h-[500px] overflow-hidden rounded-lg border'>
        <SidebarProvider>
          <Sidebar collapsible='icon'>
            <SidebarHeader>
              <div class='gap-2 px-2 py-1.5 flex items-center'>
                <div class='size-6 flex items-center justify-center rounded-md bg-primary text-primary-foreground'>
                  <MdOutlineFolder class='size-4' />
                </div>
                <span class='font-semibold group-data-[collapsible=icon]:hidden'>Acme Inc</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip='Home' isActive>
                        <MdOutlineHome />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip='Inbox'>
                        <MdOutlineMail />
                        <span>Inbox</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip='User Account'>
                    <MdOutlinePerson />
                    <span>User Account</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header class='h-12 gap-2 px-4 flex items-center border-b'>
              <SidebarTrigger />
              <span class='text-sm font-medium'>Dashboard</span>
            </header>
            <div class='p-4'>
              <div class='h-[400px] rounded-xl border bg-muted/50' />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>Nested Groups</H2>
      <div class='relative h-[500px] overflow-hidden rounded-lg border'>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div class='gap-2 px-2 py-1.5 flex items-center'>
                <div class='size-6 flex items-center justify-center rounded-md bg-primary text-primary-foreground'>
                  <MdOutlineFolder class='size-4' />
                </div>
                <span class='font-semibold'>Acme Inc</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Documentation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MdOutlineFolder />
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
                      <SidebarMenuButton>
                        <MdOutlineFolder />
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
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <header class='h-12 gap-2 px-4 flex items-center border-b'>
              <SidebarTrigger />
              <span class='text-sm font-medium'>Documentation</span>
            </header>
            <div class='p-4'>
              <div class='h-[400px] rounded-xl border bg-muted/50' />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/sidebar')({
  component: SidebarDocPage,
});

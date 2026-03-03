import type { Component } from 'solid-js';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@manafishrov/ui/navigation-menu';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const GettingStartedMenuItem: Component = () => (
  <NavigationMenuItem value='getting-started'>
    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class='gap-3 p-4 md:max-w-sm lg:max-w-md lg:grid-cols-[.75fr_1fr] grid'>
        <li class='row-span-3'>
          <NavigationMenuLink
            class='p-6 focus:shadow-md flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none select-none'
            href='/'
          >
            <div class='mb-2 mt-4 text-lg font-medium'>@manafishrov/ui</div>
            <p class='text-sm leading-tight text-muted-foreground'>
              Beautifully designed components.
            </p>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const ComponentsMenuItem: Component = () => (
  <NavigationMenuItem value='components'>
    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class='gap-3 p-4 md:max-w-md md:grid-cols-2 lg:max-w-lg max-w-sm grid'>
        <li>
          <NavigationMenuLink
            href='/components-button'
            class='space-y-1 p-3 block rounded-md leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          >
            Button
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink
            href='/components-card'
            class='space-y-1 p-3 block rounded-md leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          >
            Card
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const DocumentationMenuItem: Component = () => (
  <NavigationMenuItem value='documentation'>
    <NavigationMenuLink
      href='/docs'
      class='group h-10 px-4 py-2 text-sm font-medium inline-flex w-max items-center justify-center rounded-md bg-background transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
    >
      Documentation
    </NavigationMenuLink>
  </NavigationMenuItem>
);

const NavigationMenuDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Navigation Menu</H1>
      <Lead>{m.docs_component_navigation_menu_description()}</Lead>
    </div>

    <NavigationMenu>
      <NavigationMenuList>
        <GettingStartedMenuItem />
        <ComponentsMenuItem />
        <DocumentationMenuItem />
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export const Route = createFileRoute('/components-navigation-menu')({
  component: NavigationMenuDocPage,
});

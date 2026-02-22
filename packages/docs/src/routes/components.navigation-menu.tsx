import type { Component } from 'solid-js';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@manafish/ui/navigation-menu';
import { createFileRoute } from '@tanstack/solid-router';

const NavigationMenuDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>NavigationMenu</h1>
      <p class='mt-2 text-muted-foreground'>A collection of links for navigating websites.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class='gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] grid'>
                <li class='row-span-3'>
                  <NavigationMenuLink
                    class='p-6 focus:shadow-md flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none select-none'
                    href='/'
                  >
                    <div class='mb-2 mt-4 text-lg font-medium'>@manafish/ui</div>
                    <p class='text-sm leading-tight text-muted-foreground'>
                      Beautifully designed components.
                    </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class='gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] grid w-[400px]'>
                <li>
                  <NavigationMenuLink
                    href='/components/button'
                    class='space-y-1 p-3 block rounded-md leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                  >
                    Button
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href='/components/card'
                    class='space-y-1 p-3 block rounded-md leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                  >
                    Card
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href='/docs'
              class='group h-10 px-4 py-2 text-sm font-medium inline-flex w-max items-center justify-center rounded-md bg-background transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export const Route = createFileRoute('/components/navigation-menu')({
  component: NavigationMenuDocPage,
});

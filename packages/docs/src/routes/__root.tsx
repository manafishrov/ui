import type { Component } from 'solid-js';

import { HeadContent, Link, Outlet, createRootRoute } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from 'manafish-ui/scroll-area';

const RootComponent: Component = () => (
  <div class='flex h-full flex-col'>
    <HeadContent />
    <header class='top-0 backdrop-blur sticky z-50 shrink-0 border-b border-border bg-background/95 supports-backdrop-filter:bg-background/60'>
      <div class='px-4 py-4 container mx-auto'>
        <nav class='gap-6 flex items-center'>
          <Link to='/' class='text-lg font-semibold hover:text-primary'>
            Manafish UI
          </Link>
        </nav>
      </div>
    </header>
    <ScrollArea class='flex-1'>
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <main class='px-4 py-8 container mx-auto'>
            <Outlet />
          </main>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical' />
    </ScrollArea>
    <TanStackRouterDevtools position='bottom-right' />
  </div>
);

export const Route = createRootRoute({
  component: RootComponent,
});

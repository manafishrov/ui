import type { Component } from 'solid-js';

import { LocaleProvider } from '@manafishrov/ui';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@manafishrov/ui/scroll-area';
import { HeadContent, Outlet, createRootRoute, redirect } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';

import { Header } from '@/components/Header';
import * as m from '@/paraglide/messages';
import { getLocale, shouldRedirect } from '@/paraglide/runtime';

const RootComponent: Component = () => (
  <>
    <HeadContent />
    <TanStackRouterDevtools position='bottom-right' />
    <LocaleProvider locale={getLocale()}>
      <div class='flex h-full min-h-0 flex-col'>
        <Header />
        <ScrollArea class='min-h-0 flex-1'>
          <ScrollAreaViewport class='h-full'>
            <ScrollAreaContent>
              <main class='px-4 py-8 container mx-auto'>
                <Outlet />
              </main>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar orientation='vertical'>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>
    </LocaleProvider>
  </>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: m.docs_page_title(),
      },
      {
        name: 'description',
        content: m.docs_description(),
      },
    ],
  }),
  beforeLoad: async () => {
    document.documentElement.setAttribute('lang', getLocale());
    const decision = await shouldRedirect({ url: window.location.href });
    if (decision.redirectUrl) {
      throw redirect({ href: decision.redirectUrl.href });
    }
  },
  component: RootComponent,
});

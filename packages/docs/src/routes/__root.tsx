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
import { onMount } from 'solid-js';

import { Header } from '@/components/Header';
import * as m from '@/paraglide/messages';
import { getLocale, shouldRedirect } from '@/paraglide/runtime';

const RootComponent: Component = () => {
  let viewportRef: HTMLDivElement | undefined;

  onMount(() => {
    viewportRef?.focus();
  });

  return (
    <>
      <HeadContent />
      <TanStackRouterDevtools position='bottom-right' />
      <LocaleProvider locale={getLocale()}>
        <ScrollArea class='h-full'>
          <ScrollAreaViewport ref={viewportRef} class='h-full' tabIndex={-1}>
            <ScrollAreaContent>
              <div class='flex flex-col min-h-full'>
                <Header />
                <main class='px-4 py-8 container mx-auto flex-1'>
                  <Outlet />
                </main>
              </div>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar orientation='vertical'>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </LocaleProvider>
    </>
  );
};

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

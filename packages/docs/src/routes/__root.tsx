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
      <ScrollArea class='h-full'>
        <ScrollAreaViewport class='h-full' tabIndex={-1}>
          <ScrollAreaContent>
            <div class='flex min-h-full flex-col'>
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

const handleBeforeLoad = async () => {
  document.documentElement.setAttribute('lang', getLocale());
  const decision = await shouldRedirect({ url: globalThis.location.href });
  if (decision.redirectUrl) {
    return redirect({ href: decision.redirectUrl.href });
  }
  return decision;
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
  beforeLoad: handleBeforeLoad,
  component: RootComponent,
});

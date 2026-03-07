import type { Component } from 'solid-js';

import { LocaleProvider, ThemeProvider } from '@manafishrov/ui';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@manafishrov/ui/scroll-area';
import { TanStackDevtools } from '@tanstack/solid-devtools';
import { HeadContent, Outlet, createRootRoute, redirect } from '@tanstack/solid-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/solid-router-devtools';

import { Header } from '@/components/Header';
import * as m from '@/paraglide/messages';
import { getLocale, shouldRedirect } from '@/paraglide/runtime';

const RootComponent: Component = () => (
  <>
    <HeadContent />
    <ThemeProvider defaultTheme='system'>
      <LocaleProvider locale={getLocale()}>
        <ScrollArea class='relative size-full'>
          <ScrollAreaViewport tabIndex={-1}>
            <ScrollAreaContent>
              <div class='flex size-full flex-col'>
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
    </ThemeProvider>
    <TanStackDevtools
      plugins={[
        {
          name: 'TanStack Router',
          render: <TanStackRouterDevtoolsPanel />,
        },
      ]}
    />
  </>
);

// oxlint-disable-next-line typescript-eslint/explicit-function-return-type
const handleBeforeLoad = () => {
  document.documentElement.setAttribute('lang', getLocale());
  return shouldRedirect({ url: globalThis.location.href }).then((decision) => {
    if (decision.redirectUrl) {
      return redirect({ href: decision.redirectUrl.href });
    }
    return decision;
  });
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

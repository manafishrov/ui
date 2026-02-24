import { LocaleProvider } from '@manafish/ui';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from '@manafish/ui/scroll-area';
import { HeadContent, Link, Outlet, createRootRoute, redirect } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import { For, type Component } from 'solid-js';

import { getLocale, locales, setLocale, shouldRedirect } from '@/paraglide/runtime';
const RootComponent: Component = () => {
  return (
    <LocaleProvider locale={getLocale()}>
      <div class='flex h-full flex-col'>
        <HeadContent />
        <header class='top-0 backdrop-blur sticky z-50 shrink-0 border-b border-border bg-background/95 supports-backdrop-filter:bg-background/60'>
          <div class='px-4 py-4 container mx-auto'>
            <nav class='gap-6 flex items-center justify-between'>
              <Link to='/' class='text-lg font-semibold font-branding hover:text-primary'>
                Manafish UI
              </Link>
              <div class='gap-2 flex'>
                <For each={locales}>
                  {(locale) => (
                    <button
                      type='button'
                      onClick={() => setLocale(locale)}
                      class='text-sm font-medium hover:text-primary'
                      classList={{ 'text-primary': locale === getLocale() }}
                    >
                      {locale === 'en-gb' ? 'EN' : 'NB'}
                    </button>
                  )}
                </For>
              </div>
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
    </LocaleProvider>
  );
};
export const Route = createRootRoute({
  beforeLoad: async () => {
    // Set the HTML lang attribute for accessibility and SEO
    document.documentElement.setAttribute('lang', getLocale());

    // Check if URL needs to be redirected to match the current locale
    const decision = await shouldRedirect({ url: window.location.href });

    if (decision.redirectUrl) {
      throw redirect({ href: decision.redirectUrl.href });
    }
  },
  component: RootComponent,
});

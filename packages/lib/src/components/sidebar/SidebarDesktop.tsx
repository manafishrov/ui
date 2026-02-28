import type { Component, ComponentProps, JSXElement } from 'solid-js';

import { cn } from 'tailwind-variants';

import type { SidebarProps } from './Sidebar';

import { useSidebar } from './context';

type SidebarDesktopContainerProps = ComponentProps<'div'> & {
  variant: string;
  side: string;
  children: JSXElement;
};

const SidebarDesktopContainer: Component<SidebarDesktopContainerProps> = (props) => {
  const [local, others] = splitProps(props, ['variant', 'side', 'class', 'children']);
  return (
    <div
      data-slot='sidebar-container'
      class={cn(
        'inset-y-0 md:flex fixed z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear',
        local.side === 'left'
          ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
          : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        local.variant === 'floating' || local.variant === 'inset'
          ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing(4))+2px)]'
          : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
        local.class,
      )}
      {...others}
    >
      <div
        data-sidebar='sidebar'
        data-slot='sidebar-inner'
        class='group-data-[variant=floating]:shadow-sm flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border'
      >
        {local.children}
      </div>
    </div>
  );
};

export const SidebarDesktop: Component<SidebarProps> = (props) => {
  const { state } = useSidebar();
  const [local, others] = splitProps(props, [
    'side',
    'variant',
    'collapsible',
    'class',
    'children',
  ]);

  return (
    <div
      class='group peer md:block hidden text-sidebar-foreground'
      data-state={state()}
      data-collapsible={state() === 'collapsed' ? (local.collapsible ?? 'offcanvas') : ''}
      data-variant={local.variant ?? 'sidebar'}
      data-side={local.side ?? 'left'}
      data-slot='sidebar'
    >
      <div
        data-slot='sidebar-gap'
        class={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          local.variant === 'floating' || local.variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <SidebarDesktopContainer
        variant={local.variant ?? 'sidebar'}
        side={local.side ?? 'left'}
        class={local.class}
        {...others}
      >
        {local.children}
      </SidebarDesktopContainer>
    </div>
  );
};

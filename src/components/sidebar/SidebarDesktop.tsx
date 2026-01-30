import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';

import type { SidebarProps } from './Sidebar';

import { useSidebar } from './context';

const getGapClass = (variant: string): string => {
  const res = cn(
    'transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent',
    'group-data-collapsible-offcanvas:w-0',
    'group-data-side-right:rotate-180',
    variant === 'floating' || variant === 'inset'
      ? 'group-data-collapsible-icon:w-[calc(var(--sidebar-width-icon)+var(--spacing(4)))]'
      : 'group-data-collapsible-icon:w-(--sidebar-width-icon)',
  );
  return typeof res === 'string' ? res : '';
};

const getContainerClass = (variant: string, side: string, userClass?: string): string => {
  const res = cn(
    'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
    side === 'left'
      ? 'left-0 group-data-collapsible-offcanvas:left-[calc(var(--sidebar-width)*-1)]'
      : 'right-0 group-data-collapsible-offcanvas:right-[calc(var(--sidebar-width)*-1)]',
    variant === 'floating' || variant === 'inset'
      ? 'p-2 group-data-collapsible-icon:w-[calc(var(--sidebar-width-icon)+var(--spacing(4))+2px)]'
      : 'group-data-collapsible-icon:w-(--sidebar-width-icon) group-data-side-left:border-r group-data-side-right:border-l',
    userClass,
  );
  return typeof res === 'string' ? res : '';
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

  const side = (): 'left' | 'right' => local.side ?? 'left';
  const variant = (): 'sidebar' | 'floating' | 'inset' => local.variant ?? 'sidebar';
  const collapsible = (): 'offcanvas' | 'icon' | 'none' => local.collapsible ?? 'offcanvas';

  return (
    <div
      class='group peer text-sidebar-foreground hidden md:block'
      data-state={state()}
      data-collapsible={state() === 'collapsed' ? collapsible() : ''}
      data-variant={variant()}
      data-side={side()}
      data-slot='sidebar'
    >
      <div data-slot='sidebar-gap' class={getGapClass(variant())} />
      <div
        data-slot='sidebar-container'
        class={getContainerClass(variant(), side(), local.class)}
        {...others}
      >
        <div
          data-sidebar='sidebar'
          data-slot='sidebar-inner'
          class='bg-sidebar group-data-variant-floating:ring-sidebar-border flex size-full flex-col group-data-variant-floating:rounded-lg group-data-variant-floating:shadow-sm group-data-variant-floating:ring-1'
        >
          {local.children}
        </div>
      </div>
    </div>
  );
};

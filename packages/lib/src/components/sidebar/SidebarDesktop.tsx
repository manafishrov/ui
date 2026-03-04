import {
  createMemo,
  type Component,
  type ComponentProps,
  type JSX,
  type JSXElement,
} from 'solid-js';
import { cn } from 'tailwind-variants';

import type { SidebarProps } from './Sidebar';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';
import { useSidebar } from './context';

type SidebarDesktopContainerProps = ComponentProps<'aside'> & {
  innerClass?: string;
  variant: string;
  side: string;
  children: JSXElement;
};

const getSidebarDesktopRootClass = (
  disableMobileSidebar: boolean | undefined,
): ComponentProps<'div'>['class'] =>
  cn(
    disableMobileSidebar === true
      ? 'group peer min-h-0 relative block self-stretch text-sidebar-foreground'
      : 'group peer md:block min-h-0 relative hidden self-stretch text-sidebar-foreground',
  );

const getSidebarGapClass = (variant: SidebarProps['variant']): ComponentProps<'div'>['class'] =>
  cn(
    'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
    'group-data-[collapsible=offcanvas]:w-0',
    'group-data-[side=right]:rotate-180',
    variant === 'floating' || variant === 'inset'
      ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]'
      : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
  );

const getSidebarStyle = (style: SidebarProps['style']): JSX.CSSProperties => {
  const base: JSX.CSSProperties = {
    '--sidebar-width': SIDEBAR_WIDTH,
    '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
  };
  return typeof style === 'object' && style !== null ? { ...base, ...style } : base;
};

const SidebarDesktopContainer: Component<SidebarDesktopContainerProps> = (props) => {
  const [local, others] = splitProps(props, ['variant', 'side', 'class', 'children', 'innerClass']);
  return (
    <aside
      data-slot='sidebar-container'
      class={cn(
        'top-0 bottom-0 md:flex absolute z-10 hidden w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear',
        local.side === 'left'
          ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
          : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        local.variant === 'floating' || local.variant === 'inset'
          ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem+2px)]'
          : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
        local.class,
      )}
      {...others}
    >
      <div
        data-sidebar='sidebar'
        data-slot='sidebar-inner'
        class={cn(
          'group-data-[variant=floating]:shadow-sm flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border',
          local.innerClass,
        )}
      >
        {local.children}
      </div>
    </aside>
  );
};

export const SidebarDesktop: Component<SidebarProps> = (props) => {
  const { state } = useSidebar();
  const [local, others] = splitProps(props, [
    'side',
    'variant',
    'collapsible',
    'disableMobileSidebar',
    'style',
    'class',
    'children',
  ]);

  const style = createMemo(() => getSidebarStyle(local.style));

  return (
    <div
      style={style()}
      class={getSidebarDesktopRootClass(local.disableMobileSidebar)}
      data-state={state()}
      data-collapsible={state() === 'collapsed' ? (local.collapsible ?? 'offcanvas') : ''}
      data-variant={local.variant ?? 'sidebar'}
      data-side={local.side ?? 'left'}
      data-slot='sidebar'
    >
      <div data-slot='sidebar-gap' class={getSidebarGapClass(local.variant)} />
      <SidebarDesktopContainer
        variant={local.variant ?? 'sidebar'}
        side={local.side ?? 'left'}
        class={cn(local.disableMobileSidebar === true ? 'flex' : 'md:flex hidden', local.class)}
        {...others}
      >
        {local.children}
      </SidebarDesktopContainer>
    </div>
  );
};

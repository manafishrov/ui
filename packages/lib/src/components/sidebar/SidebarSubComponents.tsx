import { MdOutlineView_sidebar } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button } from '@/components/Button';

import { Separator } from '@/components/Separator';
import * as messages from '@/paraglide/messages';

import { useSidebar } from './context';

export const SidebarTrigger: Component<ComponentProps<typeof Button>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'onClick']);
  const { toggleSidebar } = useSidebar();

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element },
  ): void => {
    if (typeof local.onClick === 'function') {
      local.onClick(event);
    }
    toggleSidebar();
  };

  return (
    <Button
      data-sidebar='trigger'
      data-slot='sidebar-trigger'
      aria-label={messages.ui_sidebar_toggle()}
      variant='ghost'
      size='icon-sm'
      class={cn(local.class)}
      onClick={handleClick}
      {...others}
    >
      <MdOutlineView_sidebar aria-hidden='true' />
    </Button>
  );
};

export const SidebarRail: Component<ComponentProps<'button'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar='rail'
      data-slot='sidebar-rail'
      aria-label={messages.ui_sidebar_toggle()}
      tabIndex={-1}
      onClick={() => {
        toggleSidebar();
      }}
      class={cn(
        'inset-y-0 w-4 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:inset-y-0 after:w-0.5 sm:flex absolute z-20 hidden -translate-x-1/2 transition-all ease-linear after:absolute after:left-1/2 hover:after:bg-sidebar-border',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[data-side=left][data-state=collapsed]_&]:cursor-e-resize [data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar',
        '[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarInset: Component<ComponentProps<'main'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <main
      data-slot='sidebar-inset'
      class={cn(
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col bg-background',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarInput: Component<ComponentProps<typeof Input>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
      <input
        data-slot='sidebar-input'
        data-sidebar='input'
        class={cn(
          'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
          'h-8 px-2.5 py-1 rounded-lg border border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:bg-input/50 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-readonly:focus-visible:border-input data-readonly:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40',
          'h-8 w-full bg-background shadow-none',
          local.class
        )}
        {...others}
      />
};

export const SidebarHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-header'
      data-sidebar='header'
      class={cn('gap-2 p-2 flex flex-col', local.class)}
      {...others}
    />
  );
};

export const SidebarFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-footer'
      data-sidebar='footer'
      class={cn('gap-2 p-2 flex flex-col', local.class)}
      {...others}
    />
  );
};

export const SidebarSeparator: Component<ComponentProps<typeof Separator>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Separator
      data-slot='sidebar-separator'
      data-sidebar='separator'
      class={cn('mx-2 w-auto bg-sidebar-border', local.class)}
      {...others}
    />
  );
};

export const SidebarContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'id']);
  return (
    <ScrollArea
      data-slot='sidebar-content'
      data-sidebar='content'
      id={typeof local.id === 'string' ? local.id : 'sidebar-content'}
      class={cn(
        'gap-0 min-h-0 flex flex-1 flex-col group-data-[collapsible=icon]:overflow-hidden',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </ScrollArea>
  );
};

export const SidebarGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-group'
      data-sidebar='group'
      class={cn('p-2 min-w-0 relative flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const SidebarGroupLabel: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-group-label'
      data-sidebar='group-label'
      class={cn(
        'h-8 px-2 text-xs font-medium group-data-[collapsible=icon]:-mt-8 [&>svg]:size-4 flex shrink-0 items-center rounded-md text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:shrink-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarGroupAction: Component<ComponentProps<'button'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <button
      data-slot='sidebar-group-action'
      data-sidebar='group-action'
      class={cn(
        'top-3.5 right-3 w-5 p-0 [&>svg]:size-4 after:-inset-2 md:after:hidden absolute flex aspect-square items-center justify-center rounded-md text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:shrink-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarGroupContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-group-content'
      data-sidebar='group-content'
      class={cn('text-sm w-full', local.class)}
      {...others}
    />
  );
};

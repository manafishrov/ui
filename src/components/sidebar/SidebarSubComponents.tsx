import { MdOutlineView_sidebar } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ScrollArea } from '@/components/ScrollArea';
import { Separator } from '@/components/Separator';
import { useLocale } from '@/Locale';

import { useSidebar } from './context';

export const SidebarTrigger: Component<ComponentProps<typeof Button>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'onClick']);
  const { toggleSidebar } = useSidebar();
  const t = useLocale();

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
      aria-label={t('ui.sidebar.toggle')}
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
  const t = useLocale();

  return (
    <button
      data-sidebar='rail'
      data-slot='sidebar-rail'
      aria-label={t('ui.sidebar.toggle')}
      tabIndex={-1}
      onClick={() => {
        toggleSidebar();
      }}
      class={cn(
        'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-side-left:-right-4 group-data-side-right:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 sm:flex',
        'in-data-side-left:cursor-w-resize in-data-side-right:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-collapsible-offcanvas:bg-sidebar group-data-collapsible-offcanvas:translate-x-0 group-data-collapsible-offcanvas:after:left-full',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
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
        'bg-background md:peer-data-variant-inset:m-2 md:peer-data-variant-inset:ml-0 md:peer-data-variant-inset:rounded-xl md:peer-data-variant-inset:shadow-sm md:peer-data-variant-inset:peer-data-state-collapsed:ml-2 relative flex w-full flex-1 flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarInput: Component<ComponentProps<typeof Input>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Input
      data-slot='sidebar-input'
      data-sidebar='input'
      class={cn('bg-background h-8 w-full shadow-none', local.class)}
      {...others}
    />
  );
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
      class={cn('bg-sidebar-border mx-2 w-auto', local.class)}
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
        'gap-0 flex min-h-0 flex-1 flex-col group-data-collapsible-icon:overflow-hidden',
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
      class={cn('p-2 relative flex w-full min-w-0 flex-col', local.class)}
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
        'text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-collapsible-icon:-mt-8 group-data-collapsible-icon:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0',
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
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 w-5 rounded-md p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform [&>svg]:shrink-0 after:absolute after:-inset-2 md:after:hidden group-data-collapsible-icon:hidden',
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

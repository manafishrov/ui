import { Dialog as SheetPrimitive } from '@ark-ui/solid/dialog';
import { MdOutlineClose } from 'solid-icons/md';
import { type Component, type JSX, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';

import { useI18n } from '@/I18n';

import { Button } from './Button';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.CloseTrigger;

export const SheetOverlay: Component<SheetPrimitive.BackdropProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Backdrop
      data-slot='sheet-overlay'
      class={cn(
        'bg-black/10 fixed inset-0 z-50 duration-100 backdrop-blur-xs',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        local.class,
      )}
      {...others}
    />
  );
};

export interface SheetContentProps extends SheetPrimitive.ContentProps {
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}

export const SheetContent: Component<SheetContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'side', 'showCloseButton']);
  const side = local.side ?? 'right';
  const showCloseButton = local.showCloseButton ?? true;
  const t = useI18n();

  return (
    <Portal>
      <SheetOverlay />
      <SheetPrimitive.Positioner
        class={cn(
          'fixed z-50 flex flex-col transition ease-in-out duration-200',
          side === 'top' && 'inset-x-0 top-0 border-b',
          side === 'bottom' && 'inset-x-0 bottom-0 border-t',
          side === 'left' && 'inset-y-0 left-0 w-3/4 sm:max-w-sm border-r',
          side === 'right' && 'inset-y-0 right-0 w-3/4 sm:max-w-sm border-l',
        )}
      >
        <SheetPrimitive.Content
          data-slot='sheet-content'
          data-side={side}
          class={cn(
            'bg-background relative flex h-full w-full flex-col gap-4 bg-clip-padding p-6 text-sm shadow-lg outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            side === 'right' &&
              'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full',
            side === 'left' &&
              'data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full',
            side === 'top' &&
              'data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full',
            side === 'bottom' &&
              'data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full',
            local.class,
          )}
          {...others}
        >
          {local.children}
          {showCloseButton && (
            <SheetPrimitive.CloseTrigger
              class='absolute top-3 right-3'
              asChild={(props) => (
                <Button variant='ghost' size='icon-sm' {...props}>
                  <MdOutlineClose />
                  <span class='sr-only'>{`${t('ui.close')}`}</span>
                </Button>
              )}
            />
          )}
        </SheetPrimitive.Content>
      </SheetPrimitive.Positioner>
    </Portal>
  );
};

export const SheetHeader: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sheet-header'
      class={cn('flex flex-col gap-1.5 p-4', local.class)}
      {...others}
    />
  );
};

export const SheetFooter: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sheet-footer'
      class={cn('mt-auto flex flex-col gap-2 p-4', local.class)}
      {...others}
    />
  );
};

export const SheetTitle: Component<SheetPrimitive.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Title
      data-slot='sheet-title'
      class={cn('text-foreground text-lg font-semibold', local.class)}
      {...others}
    />
  );
};

export const SheetDescription: Component<SheetPrimitive.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Description
      data-slot='sheet-description'
      class={cn('text-muted-foreground text-sm', local.class)}
      {...others}
    />
  );
};

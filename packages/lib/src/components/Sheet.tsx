import { Dialog as SheetPrimitive } from '@ark-ui/solid/dialog';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import OutlineCloseIcon from '~icons/ic/outline-close';

import { Button } from '@/components/Button';
import * as messages from '@/paraglide/messages';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetCloseTrigger = SheetPrimitive.CloseTrigger;
export const SheetContext = SheetPrimitive.Context;

export const SheetOverlay: Component<SheetPrimitive.BackdropProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Backdrop
      data-slot='sheet-overlay'
      class={cn(
        'bg-black/40 inset-0 backdrop-blur-sm fixed z-50',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SheetPositioner: Component<
  SheetPrimitive.PositionerProps & { side?: 'top' | 'right' | 'bottom' | 'left' }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'side']);
  const side = local.side ?? 'right';
  return (
    <SheetPrimitive.Positioner
      data-side={side}
      class={cn(
        'fixed z-50 flex flex-col',
        'data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:max-h-[90vh]',
        'data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:max-h-[90vh]',
        'data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:w-auto data-[side=left]:max-w-[90vw]',
        'data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:w-auto data-[side=right]:max-w-[90vw]',
        local.class,
      )}
      {...others}
    />
  );
};

export const SheetContent: Component<
  SheetPrimitive.ContentProps & { side?: 'top' | 'right' | 'bottom' | 'left' }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'side']);
  const side = local.side ?? 'right';

  return (
    <SheetPrimitive.Content
      data-slot='sheet-content'
      data-side={side}
      class={cn(
        'gap-4 p-6 shadow-lg relative flex h-full w-full flex-col bg-background outline-none',
        'border-l border-border',
        'data-[side=left]:border-l-0 data-[side=left]:border-r',
        'data-[side=top]:border-l-0 data-[side=top]:border-b',
        'data-[side=bottom]:border-l-0 data-[side=bottom]:border-t',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:duration-300 data-[state=open]:duration-300',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[side=right]:data-[state=closed]:slide-out-to-right-1/2 data-[side=right]:data-[state=open]:slide-in-from-right-1/2',
        'data-[side=left]:data-[state=closed]:slide-out-to-left-1/2 data-[side=left]:data-[state=open]:slide-in-from-left-1/2',
        'data-[side=top]:data-[state=closed]:slide-out-to-top-1/2 data-[side=top]:data-[state=open]:slide-in-from-top-1/2',
        'data-[side=bottom]:data-[state=closed]:slide-out-to-bottom-1/2 data-[side=bottom]:data-[state=open]:slide-in-from-bottom-1/2',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </SheetPrimitive.Content>
  );
};

export const SheetCloseButton: Component<SheetPrimitive.CloseTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <SheetPrimitive.CloseTrigger
      class={cn('top-3 right-3 absolute', local.class)}
      asChild={(triggerProps) => (
        <Button
          variant='ghost'
          size='icon-sm'
          aria-label={messages.ui_common_close()}
          {...triggerProps()}
          {...others}
        >
          <OutlineCloseIcon aria-hidden='true' />
          <span class='sr-only'>{messages.ui_common_close()}</span>
        </Button>
      )}
    />
  );
};

export const SheetHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sheet-header'
      class={cn('gap-1.5 p-4 flex flex-col', local.class)}
      {...others}
    />
  );
};

export const SheetFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sheet-footer'
      class={cn('gap-2 p-4 mt-auto flex flex-col', local.class)}
      {...others}
    />
  );
};

export const SheetTitle: Component<SheetPrimitive.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Title
      data-slot='sheet-title'
      class={cn('text-lg font-semibold text-foreground', local.class)}
      {...others}
    />
  );
};

export const SheetDescription: Component<SheetPrimitive.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SheetPrimitive.Description
      data-slot='sheet-description'
      class={cn('text-sm text-muted-foreground', local.class)}
      {...others}
    />
  );
};

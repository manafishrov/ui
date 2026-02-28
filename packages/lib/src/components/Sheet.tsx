import { Dialog as SheetPrimitive } from '@ark-ui/solid/dialog';
import OutlineCloseIcon from '~icons/ic/outline-close';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

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
        'bg-black/10 inset-0 backdrop-blur-xs fixed z-50 duration-100',
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
        'ease-in-out fixed z-50 flex flex-col transition duration-200',
        'data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:border-b',
        'data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:border-t',
        'data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:sm:max-w-sm data-[side=left]:w-3/4 data-[side=left]:border-r',
        'data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:sm:max-w-sm data-[side=right]:w-3/4 data-[side=right]:border-l',
        local.class,
      )}
      {...others}
    />
  );
};

export const SheetContent: Component<SheetPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <SheetPrimitive.Content
      data-slot='sheet-content'
      class={cn(
        'gap-4 p-6 text-sm shadow-lg relative flex h-full w-full flex-col bg-background bg-clip-padding outline-none',
        'data-[state=closed]:animate-out data-[state=open]:animate-in',
        'data-[side=right]:data-[state=closed]:slide-out-to-right-full data-[side=right]:data-[state=open]:slide-in-from-right-full',
        'data-[side=left]:data-[state=closed]:slide-out-to-left-full data-[side=left]:data-[state=open]:slide-in-from-left-full',
        'data-[side=top]:data-[state=closed]:slide-out-to-top-full data-[side=top]:data-[state=open]:slide-in-from-top-full',
        'data-[side=bottom]:data-[state=closed]:slide-out-to-bottom-full data-[side=bottom]:data-[state=open]:slide-in-from-bottom-full',
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

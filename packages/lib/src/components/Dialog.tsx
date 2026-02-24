import { Dialog as DialogPrimitive } from '@ark-ui/solid/dialog';
import { MdOutlineClose } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button } from '@/components/Button';
import * as messages from '@/paraglide/messages';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContext = DialogPrimitive.Context;
export const DialogCloseTrigger = DialogPrimitive.CloseTrigger;

export const DialogOverlay: Component<DialogPrimitive.BackdropProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DialogPrimitive.Backdrop
      data-slot='dialog-overlay'
      class={cn(
        'bg-black/10 inset-0 backdrop-blur-xs fixed isolate z-50 duration-100',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const DialogPositioner: Component<DialogPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DialogPrimitive.Positioner
      data-slot='dialog-positioner'
      class={cn('inset-0 fixed z-50 flex items-center justify-center', local.class)}
      {...others}
    />
  );
};

export const DialogContent: Component<DialogPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <DialogPrimitive.Content
      data-slot='dialog-content'
      class={cn(
        'gap-4 p-4 text-sm shadow-lg sm:max-w-sm relative isolate grid w-full max-w-[calc(100%-2rem)] rounded-xl bg-background ring-1 ring-foreground/10 duration-100 outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        local.class,
      )}
      {...others}
    />
  );
};

export const DialogCloseButton: Component<DialogPrimitive.CloseTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  

  return (
    <DialogPrimitive.CloseTrigger
      class={cn('top-2 right-2 absolute', local.class)}
      asChild={(triggerProps) => (
        <Button
          variant='ghost'
          size='icon-sm'
          aria-label={messages.ui_common_close()}
          {...triggerProps()}
          {...others}
        >
          <MdOutlineClose aria-hidden='true' />
        </Button>
      )}
    />
  );
};

export const DialogHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div data-slot='dialog-header' class={cn('gap-2 flex flex-col', local.class)} {...others} />
  );
};

export const DialogFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <div
      data-slot='dialog-footer'
      class={cn(
        '-mx-4 -mb-4 gap-2 p-4 sm:flex-row sm:justify-end flex flex-col-reverse rounded-b-xl border-t bg-muted/50',
        local.class,
      )}
      {...others}
    />
  );
};

export const DialogTitle: Component<DialogPrimitive.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      class={cn('text-base font-medium leading-none', local.class)}
      {...others}
    />
  );
};

export const DialogDescription: Component<DialogPrimitive.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      class={cn(
        'text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

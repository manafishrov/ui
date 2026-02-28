import { Dialog as AlertDialogPrimitive } from '@ark-ui/solid/dialog';
import type { Component, ComponentProps } from 'solid-js';
import { cn, type VariantProps } from 'tailwind-variants';

import { Button, type buttonVariants } from '@/components/Button';

export const AlertDialog: Component<AlertDialogPrimitive.RootProps> = (props) => (
  <AlertDialogPrimitive.Root data-slot='alert-dialog' role='alertdialog' {...props} />
);

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContext = AlertDialogPrimitive.Context;

export const AlertDialogOverlay: Component<AlertDialogPrimitive.BackdropProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot='alert-dialog-overlay'
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

export const AlertDialogPositioner: Component<AlertDialogPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AlertDialogPrimitive.Positioner
      data-slot='alert-dialog-positioner'
      class={cn('inset-0 fixed z-50 flex items-center justify-center', local.class)}
      {...others}
    />
  );
};

export type AlertDialogContentProps = AlertDialogPrimitive.ContentProps & {
  size?: 'default' | 'sm';
};

export const AlertDialogContent: Component<AlertDialogContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = local.size ?? 'default';

  return (
    <AlertDialogPrimitive.Content
      data-slot='alert-dialog-content'
      data-size={size}
      class={cn(
        'gap-4 p-4 shadow-lg relative isolate grid w-full rounded-xl bg-background ring-1 ring-foreground/10 duration-100 outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm',
        'group/alert-dialog-content',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='alert-dialog-header'
      class={cn(
        'gap-1.5 grid grid-rows-[auto_1fr] place-items-center text-center',
        'has-data-[slot=alert-dialog-media]:gap-x-4 has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr]',
        'sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left',
        'sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='alert-dialog-footer'
      class={cn(
        '-mx-4 -mb-4 gap-2 p-4 flex flex-col-reverse rounded-b-xl border-t bg-muted/50',
        'sm:flex-row sm:justify-end',
        'group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogMedia: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='alert-dialog-media'
      class={cn(
        'mb-2 size-10 inline-flex items-center justify-center rounded-md bg-muted',
        'sm:group-data-[size=default]/alert-dialog-content:row-span-2',
        '*:[svg:not([class*="size-"])]:size-6',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogTitle: Component<AlertDialogPrimitive.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AlertDialogPrimitive.Title
      data-slot='alert-dialog-title'
      class={cn(
        'text-base font-medium',
        'sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogDescription: Component<AlertDialogPrimitive.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AlertDialogPrimitive.Description
      data-slot='alert-dialog-description'
      class={cn(
        'text-sm md:text-pretty text-balance text-muted-foreground',
        '*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const AlertDialogAction: Component<ComponentProps<typeof Button>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <Button data-slot='alert-dialog-action' class={cn(local.class)} {...others} />;
};

export type AlertDialogCancelProps = AlertDialogPrimitive.CloseTriggerProps &
  VariantProps<typeof buttonVariants>;

export const AlertDialogCancel: Component<AlertDialogCancelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'size']);
  return (
    <AlertDialogPrimitive.CloseTrigger
      data-slot='alert-dialog-cancel'
      asChild={(triggerProps) => (
        <Button
          variant={local.variant ?? 'outline'}
          size={local.size ?? 'default'}
          class={cn(local.class)}
          {...triggerProps()}
          {...others}
        />
      )}
    />
  );
};

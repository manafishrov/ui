import {
  Toast,
  Toaster as ToasterPrimitive,
  createToaster,
  type ToastOptions,
} from '@ark-ui/solid/toast';
import type { Component, Accessor } from 'solid-js';
import { cn } from 'tailwind-variants';

export const toast = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

const ToastItem: Component<{ toast: Accessor<ToastOptions> }> = (props) => (
  <Toast.Root
    class={cn(
      'group gap-3 p-4 pr-10 shadow-lg pointer-events-auto relative flex w-full items-center overflow-hidden rounded-lg border bg-popover transition-all',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:animate-in',
      'data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full',
      'border-border text-popover-foreground',
    )}
  >
    <Show when={props.toast().type === 'success'}>
      <IconIcOutlineCheckCircle class={cn('size-5 text-green-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'info'}>
      <IconIcOutlineInfo class={cn('size-5 text-blue-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'warning'}>
      <IconIcOutlineWarning class={cn('size-5 text-amber-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'error'}>
      <IconIcOutlineError class={cn('size-5 text-red-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'loading'}>
      <IconIcOutlineRefresh
        class={cn('size-5 animate-spin shrink-0 text-muted-foreground')}
        aria-hidden='true'
      />
    </Show>
    <div class='gap-1 grid'>
      <Show when={props.toast().title}>
        <Toast.Title class='text-sm font-semibold tracking-tight leading-none'>
          {props.toast().title}
        </Toast.Title>
      </Show>
      <Show when={props.toast().description}>
        <Toast.Description class='text-sm opacity-90'>
          {props.toast().description}
        </Toast.Description>
      </Show>
    </div>
    <Toast.CloseTrigger class='top-2 right-2 p-1 absolute cursor-pointer rounded-md text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground focus:opacity-100 focus:ring-2 focus:outline-none'>
      <IconIcOutlineClose class='size-4' />
    </Toast.CloseTrigger>
  </Toast.Root>
);

export const Toaster: Component = () => (
  <Portal>
    <ToasterPrimitive toaster={toast}>{(t) => <ToastItem toast={t} />}</ToasterPrimitive>
  </Portal>
);

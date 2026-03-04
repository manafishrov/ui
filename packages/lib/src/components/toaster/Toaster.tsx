import {
  Toast,
  Toaster as ToasterPrimitive,
  createToaster,
  type ToastOptions,
} from '@ark-ui/solid/toast';
import { type Component, type Accessor, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';
import CheckCircleIcon from '~icons/material-symbols/check-circle';
import CloseIcon from '~icons/material-symbols/close';
import ErrorIcon from '~icons/material-symbols/error';
import InfoIcon from '~icons/material-symbols/info';
import WarningIcon from '~icons/material-symbols/warning';

import { Spinner } from '@/components/Spinner';

export const toast = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

const ToastItem: Component<{ toast: Accessor<ToastOptions> }> = (props) => (
  <Toast.Root
    class={cn(
      'group gap-3 p-4 pr-10 shadow-lg min-w-72 pointer-events-auto relative flex w-full items-center rounded-lg border bg-popover transition-all',
      'data-[state=open]:sm:slide-in-from-bottom-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full',
      'border-border text-popover-foreground',
    )}
  >
    <Show when={props.toast().type === 'success'}>
      <CheckCircleIcon class={cn('size-5 text-green-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'info'}>
      <InfoIcon class={cn('size-5 text-blue-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'warning'}>
      <WarningIcon class={cn('size-5 text-amber-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'error'}>
      <ErrorIcon class={cn('size-5 text-red-500 shrink-0')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'loading'}>
      <Spinner class={cn('size-5 text-muted-foreground')} />
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
    <Toast.CloseTrigger class='top-2 right-2 p-1 absolute cursor-pointer rounded-md text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground focus:opacity-100 focus:outline-none'>
      <CloseIcon class='size-4' />
    </Toast.CloseTrigger>
  </Toast.Root>
);

export const Toaster: Component = () => (
  <Portal>
    <ToasterPrimitive toaster={toast}>{(item) => <ToastItem toast={item} />}</ToasterPrimitive>
  </Portal>
);

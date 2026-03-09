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
import ErrorIcon from '~icons/material-symbols/error';
import InfoIcon from '~icons/material-symbols/info';
import WarningIcon from '~icons/material-symbols/warning';

import { buttonVariants } from '@/components/Button';
import { Spinner } from '@/components/Spinner';

export const toast = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

const ToastIcon: Component<{ type: ToastOptions['type'] }> = (props) => (
  <>
    {props.type === 'success' && (
      <CheckCircleIcon class={cn('size-4 shrink-0')} aria-hidden='true' />
    )}
    {props.type === 'info' && <InfoIcon class={cn('size-4 shrink-0')} aria-hidden='true' />}
    {props.type === 'warning' && <WarningIcon class={cn('size-4 shrink-0')} aria-hidden='true' />}
    {props.type === 'error' && <ErrorIcon class={cn('size-4 shrink-0')} aria-hidden='true' />}
    {props.type === 'loading' && <Spinner class={cn('size-4 text-muted-foreground')} />}
  </>
);

const ToastItem: Component<{ toast: Accessor<ToastOptions> }> = (props) => (
  <Toast.Root
    class={cn(
      'group gap-2 px-4 py-3.5 shadow-lg min-w-80 pointer-events-auto relative flex w-full items-center rounded-xl border bg-popover',
      'data-[state=open]:sm:slide-in-from-bottom-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
      'border-border text-popover-foreground',
    )}
  >
    <ToastIcon type={props.toast().type} />
    <div class='min-w-0 gap-1 grid flex-1'>
      <Show when={props.toast().title}>
        <Toast.Title class='text-sm font-semibold tracking-tight leading-none'>
          {props.toast().title}
        </Toast.Title>
      </Show>
      <Show when={props.toast().description}>
        <Toast.Description class='text-sm text-muted-foreground'>
          {props.toast().description}
        </Toast.Description>
      </Show>
    </div>
    <Show when={props.toast().action}>
      {(action) => (
        <Toast.ActionTrigger
          class={buttonVariants({
            class: 'shrink-0',
            size: 'sm',
            variant: 'secondary',
          })}
        >
          {action().label}
        </Toast.ActionTrigger>
      )}
    </Show>
  </Toast.Root>
);

export const Toaster: Component = () => (
  <Portal>
    <ToasterPrimitive toaster={toast}>{(item) => <ToastItem toast={item} />}</ToasterPrimitive>
  </Portal>
);

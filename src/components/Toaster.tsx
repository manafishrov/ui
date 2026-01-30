import {
  Toast,
  Toaster as ToasterPrimitive,
  createToaster,
  type ToastOptions,
} from '@ark-ui/solid/toast';
import {
  MdOutlineCheck_circle,
  MdOutlineClose,
  MdOutlineError,
  MdOutlineInfo,
  MdOutlineRefresh,
  MdOutlineWarning,
} from 'solid-icons/md';
import { type Component, Show, type Accessor } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';

export const toast = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

const ToastItem: Component<{ toast: Accessor<ToastOptions> }> = (props) => (
  <Toast.Root
    class={cn(
      'group pointer-events-auto relative flex w-full items-center gap-3 overflow-hidden rounded-lg border bg-popover p-4 pr-10 shadow-lg transition-all',
      'data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-80',
      'data-state-closed:slide-out-to-right-full data-state-open:slide-in-from-top-full data-state-open:sm:slide-in-from-bottom-full',
      'text-popover-foreground border-border',
    )}
  >
    <Show when={props.toast().type === 'success'}>
      <MdOutlineCheck_circle class={cn('shrink-0 size-5 text-green-500')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'info'}>
      <MdOutlineInfo class={cn('shrink-0 size-5 text-blue-500')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'warning'}>
      <MdOutlineWarning class={cn('shrink-0 size-5 text-amber-500')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'error'}>
      <MdOutlineError class={cn('shrink-0 size-5 text-red-500')} aria-hidden='true' />
    </Show>
    <Show when={props.toast().type === 'loading'}>
      <MdOutlineRefresh
        class={cn('shrink-0 size-5 animate-spin text-muted-foreground')}
        aria-hidden='true'
      />
    </Show>
    <div class='grid gap-1'>
      <Show when={props.toast().title}>
        <Toast.Title class='text-sm leading-none font-semibold tracking-tight'>
          {props.toast().title}
        </Toast.Title>
      </Show>
      <Show when={props.toast().description}>
        <Toast.Description class='text-sm opacity-90'>
          {props.toast().description}
        </Toast.Description>
      </Show>
    </div>
    <Toast.CloseTrigger class='text-foreground/50 hover:text-foreground absolute top-2 right-2 cursor-pointer rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:ring-2 focus:outline-none'>
      <MdOutlineClose class='size-4' />
    </Toast.CloseTrigger>
  </Toast.Root>
);

export const Toaster: Component = () => (
  <Portal>
    <ToasterPrimitive toaster={toast}>{(toast) => <ToastItem toast={toast} />}</ToasterPrimitive>
  </Portal>
);

import { Toast, Toaster as ToasterPrimitive, createToaster } from '@ark-ui/solid/toast';
import {
  MdOutlineCheck_circle,
  MdOutlineClose,
  MdOutlineError,
  MdOutlineInfo,
  MdOutlineRefresh,
  MdOutlineWarning,
} from 'solid-icons/md';
import { type JSX, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { tv } from 'tailwind-variants';

export const toastVariants = tv({
  slots: {
    root: [
      'group pointer-events-auto relative flex w-full items-center gap-3 overflow-hidden rounded-lg border bg-popover p-4 pr-10 shadow-lg transition-all',
      'data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-80',
      'data-state-closed:slide-out-to-right-full data-state-open:slide-in-from-top-full data-state-open:sm:slide-in-from-bottom-full',
      'text-popover-foreground border-border',
    ],
    title: 'text-sm font-semibold leading-none tracking-tight',
    description: 'text-sm opacity-90',
    closeTrigger:
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 cursor-pointer',
    icon: 'shrink-0 size-5',
  },
});

const { root, title, description, closeTrigger, icon: iconClass } = toastVariants();

export const toast = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

export const Toaster = (): JSX.Element => (
  <Portal>
    <ToasterPrimitive toaster={toast}>
      {(toast) => (
        <Toast.Root class={root()}>
          <Show when={toast().type === 'success'}>
            <MdOutlineCheck_circle class={iconClass({ class: 'text-green-500' })} />
          </Show>
          <Show when={toast().type === 'info'}>
            <MdOutlineInfo class={iconClass({ class: 'text-blue-500' })} />
          </Show>
          <Show when={toast().type === 'warning'}>
            <MdOutlineWarning class={iconClass({ class: 'text-amber-500' })} />
          </Show>
          <Show when={toast().type === 'error'}>
            <MdOutlineError class={iconClass({ class: 'text-red-500' })} />
          </Show>
          <Show when={toast().type === 'loading'}>
            <MdOutlineRefresh class={iconClass({ class: 'animate-spin text-muted-foreground' })} />
          </Show>
          <div class='grid gap-1'>
            <Show when={toast().title}>
              <Toast.Title class={title()}>{toast().title}</Toast.Title>
            </Show>
            <Show when={toast().description}>
              <Toast.Description class={description()}>{toast().description}</Toast.Description>
            </Show>
          </div>
          <Toast.CloseTrigger class={closeTrigger()}>
            <MdOutlineClose class='size-4' />
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </ToasterPrimitive>
  </Portal>
);

import { PinInput as PrimitivePinInput } from '@ark-ui/solid/pin-input';
import type { Component, ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const PinInputHiddenInput = PrimitivePinInput.HiddenInput;
export const PinInputContext = PrimitivePinInput.Context;

export const PinInput: Component<PrimitivePinInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Root
      class={cn('group/pin-input gap-1.5 flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const PinInputLabel: Component<PrimitivePinInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const PinInputControl: Component<PrimitivePinInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Control
      data-slot='pin-input-control'
      class={cn('gap-2 flex items-center', local.class)}
      {...others}
    />
  );
};

export const PinInputGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='pin-input-group'
      class={cn(
        'flex items-center group-data-invalid/pin-input:border-destructive group-data-invalid/pin-input:ring-[3px] group-data-invalid/pin-input:ring-destructive/20 dark:group-data-invalid/pin-input:ring-destructive/40',
        'group-data-disabled/pin-input:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const PinInputInput: Component<PrimitivePinInput.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'index']);
  return (
    <PrimitivePinInput.Input
      index={local.index}
      class={cn(
        'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
        'px-0 py-0 h-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
        'size-9 text-sm relative flex items-center justify-center border-y border-r border-input bg-transparent text-center transition-all outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground first:rounded-l-lg first:border-l last:rounded-r-lg focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50 dark:bg-input/30',
        'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40',
        'data-readonly:cursor-default data-readonly:focus-visible:border-input data-readonly:focus-visible:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const PinInputSeparator: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      aria-hidden='true'
      data-slot='pin-input-separator'
      class={cn('flex items-center justify-center text-muted-foreground', local.class)}
      {...others}
    >
      <IconIcOutlineRemove class='size-4' />
    </div>
  );
};

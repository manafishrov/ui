import { PinInput as PrimitivePinInput } from '@ark-ui/solid/pin-input';
import { splitProps, type Component, type ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import RemoveIcon from '~icons/material-symbols/close';

export const PinInputHiddenInput = PrimitivePinInput.HiddenInput;
export const PinInputContext = PrimitivePinInput.Context;

export const PinInput: Component<PrimitivePinInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Root
      class={cn('group/pin-input flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const PinInputLabel: Component<PrimitivePinInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Label
      class={cn(
        'mb-1.5 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
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
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Input
      class={cn(
        'h-10 w-10 text-sm relative flex items-center justify-center border-y border-r border-input bg-transparent text-center transition-colors outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground first:rounded-l-md first:border-l last:rounded-r-md dark:bg-input/30',
        'focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-2 data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[readonly=true]:cursor-default',
        'data-[readonly=true]:focus-visible:border-input data-[readonly=true]:focus-visible:ring-0',
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
      <RemoveIcon class='size-4' />
    </div>
  );
};

import { PinInput as PrimitivePinInput } from '@ark-ui/solid/pin-input';
import { MdOutlineRemove } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

export const PinInput = PrimitivePinInput.Root;
export const PinInputHiddenInput = PrimitivePinInput.HiddenInput;

export const PinInputLabel: Component<PrimitivePinInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePinInput.Label
      asChild={(labelProps) => (
        <Label class={cn(local.class)} {...labelProps()} {...others}>
          {local.children}
        </Label>
      )}
    />
  );
};

export const PinInputControl: Component<PrimitivePinInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePinInput.Control
      data-slot='pin-input-control'
      class={cn('flex items-center gap-2', local.class)}
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
        'has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] flex items-center',
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
      asChild={(inputProps) => (
        <Input
          variant='ghost'
          class={cn(
            'dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 size-9 border-y border-r text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg focus-visible:ring-[3px] aria-invalid:ring-[3px] relative flex items-center justify-center focus-visible:z-10 bg-transparent text-center placeholder:text-muted-foreground disabled:opacity-50 selection:bg-primary selection:text-primary-foreground',
            local.class,
          )}
          {...inputProps()}
          {...others}
        />
      )}
    />
  );
};

export const PinInputSeparator: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      aria-hidden='true'
      data-slot='pin-input-separator'
      class={cn('text-muted-foreground flex items-center justify-center', local.class)}
      {...others}
    >
      <MdOutlineRemove class='size-4' />
    </div>
  );
};

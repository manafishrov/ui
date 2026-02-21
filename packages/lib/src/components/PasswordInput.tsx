import { PasswordInput as PrimitivePasswordInput } from '@ark-ui/solid/password-input';
import { MdOutlineVisibility, MdOutlineVisibility_off } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

export const PasswordInput = PrimitivePasswordInput.Root;
export const PasswordInputContext = PrimitivePasswordInput.Context;

export const PasswordInputLabel: Component<PrimitivePasswordInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.Label
      asChild={(labelProps) => (
        <Label class={cn(local.class)} {...labelProps()} {...others}>
          {local.children}
        </Label>
      )}
    />
  );
};

export const PasswordInputControl: Component<PrimitivePasswordInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PrimitivePasswordInput.Control
      data-slot='password-input-control'
      class={cn(
        'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'data-focus:border-ring data-focus:ring-ring/50 data-focus:ring-[3px]',
        'data-invalid:border-destructive data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:ring-[3px]',
        'data-disabled:bg-input/50 dark:data-disabled:bg-input/80 data-disabled:opacity-50',
        'data-readonly:data-focus:ring-0 data-readonly:data-focus:border-input',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputInput: Component<PrimitivePasswordInput.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Input
      asChild={(inputProps) => (
        <Input
          variant='ghost'
          class={cn('pl-2.5 pr-10', local.class)}
          {...inputProps()}
          {...others}
        />
      )}
    />
  );
};

export const PasswordInputVisibilityTrigger: Component<
  PrimitivePasswordInput.VisibilityTriggerProps
> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.VisibilityTrigger
      data-slot='password-input-visibility-trigger'
      class={cn(
        'text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 absolute top-0 right-0 flex h-full w-9 cursor-pointer items-center justify-center transition-colors outline-none focus-visible:bg-muted focus-visible:text-foreground',
        'data-focus:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputIndicator: Component<PrimitivePasswordInput.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.Indicator
      class={cn(local.class)}
      fallback={local.children ?? <MdOutlineVisibility_off class='size-4' />}
      {...others}
    >
      <MdOutlineVisibility class='size-4' />
    </PrimitivePasswordInput.Indicator>
  );
};

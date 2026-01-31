import { PasswordInput as PrimitivePasswordInput } from '@ark-ui/solid/password-input';
import { MdOutlineVisibility, MdOutlineVisibility_off } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

export const PasswordInput: Component<PrimitivePasswordInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Root
      class={cn('group/password-input flex w-full flex-col gap-1.5', local.class)}
      {...others}
    />
  );
};

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
    <div
      data-slot='password-input-control'
      class={cn(
        'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]',
        'has-data-invalid:border-destructive has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40 has-data-invalid:ring-[3px]',
        'has-data-disabled:bg-input/50 dark:has-data-disabled:bg-input/80 has-data-disabled:opacity-50',
        'has-data-readonly:has-focus-visible:ring-0 has-data-readonly:has-focus-visible:border-input',
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
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.VisibilityTrigger
      data-slot='password-input-visibility-trigger'
      class={cn(
        'text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 absolute top-0 right-0 flex h-full w-9 cursor-pointer items-center justify-center transition-colors outline-none focus-visible:bg-muted focus-visible:text-foreground',
        'group-has-focus-visible/password-input:text-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children ?? (
        <PrimitivePasswordInput.Indicator fallback={<MdOutlineVisibility_off class='size-4' />}>
          <MdOutlineVisibility class='size-4' />
        </PrimitivePasswordInput.Indicator>
      )}
    </PrimitivePasswordInput.VisibilityTrigger>
  );
};

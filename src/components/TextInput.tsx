import { Field as PrimitiveField } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Textarea } from '@/components/Textarea';

export const TextInput: Component<PrimitiveField.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Root class={cn('flex w-full flex-col gap-1.5', local.class)} {...others} />
  );
};

export const TextInputLabel: Component<PrimitiveField.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveField.Label
      asChild={(labelProps) => (
        <Label class={cn(local.class)} {...labelProps()} {...others}>
          {local.children}
        </Label>
      )}
    />
  );
};

export const TextInputControl: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <div
      data-slot='text-input-control'
      class={cn(
        'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]',
        'has-data-invalid:border-destructive has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40 has-data-invalid:ring-[3px]',
        'has-data-disabled:bg-input/50 dark:has-data-disabled:bg-input/80 has-data-disabled:opacity-50',
        'has-data-readonly:focus-visible:ring-0 has-data-readonly:focus-visible:border-input',
        'has-[textarea]:h-auto',
        local.class,
      )}
      {...others}
    />
  );
};

export const TextInputInput: Component<PrimitiveField.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Input
      asChild={(inputProps) => (
        <Input variant='ghost' class={cn('px-2.5', local.class)} {...inputProps()} {...others} />
      )}
    />
  );
};

export const TextInputArea: Component<PrimitiveField.TextareaProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Textarea
      asChild={(textareaProps) => (
        <Textarea
          variant='ghost'
          class={cn('px-2.5 py-1.5', local.class)}
          {...textareaProps()}
          {...others}
        />
      )}
    />
  );
};

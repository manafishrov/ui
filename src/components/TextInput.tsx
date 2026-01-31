import { Field as PrimitiveField } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Textarea } from '@/components/Textarea';

export const TextInput = PrimitiveField.Root;

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
    <PrimitiveField.Context>
      {(field) => (
        <div
          data-slot='text-input-control'
          data-disabled={field().disabled ? '' : false}
          data-invalid={field().invalid ? '' : false}
          data-readonly={field().readOnly ? '' : false}
          class={cn(
            'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
            'has-[:focus-visible]:border-ring has-[:focus-visible]:ring-ring/50 has-[:focus-visible]:ring-[3px]',
            'data-invalid:border-destructive data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:ring-[3px]',
            'data-disabled:bg-input/50 dark:data-disabled:bg-input/80 data-disabled:opacity-50',
            'data-readonly:has-[:focus-visible]:ring-0 data-readonly:has-[:focus-visible]:border-input',
            'has-[textarea]:h-auto',
            local.class,
          )}
          {...others}
        />
      )}
    </PrimitiveField.Context>
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

export const TextInputHelperText = PrimitiveField.HelperText;
export const TextInputErrorText = PrimitiveField.ErrorText;

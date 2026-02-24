import { Field as PrimitiveField } from '@ark-ui/solid/field';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Textarea } from '@/components/Textarea';

import { FieldDescription, FieldError } from './Field';

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
            'min-w-0 h-8 relative flex w-full items-center overflow-hidden rounded-lg border border-input transition-colors outline-none dark:bg-input/30',
            'has-focus-visible:ing-ring/50 has-focus-visible:border-ring has-focus-visible:ring-[3px]',
            'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40',
            'data-disabled:bg-input/50 data-disabled:opacity-50 dark:data-disabled:bg-input/80',
            'data-readonly:has-focus-visible:border-input data-readonly:has-focus-visible:ring-0',
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

export const TextInputHelperText = FieldDescription;
export const TextInputErrorText = FieldError;

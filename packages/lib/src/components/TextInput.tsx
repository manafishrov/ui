import { Field as PrimitiveField } from '@ark-ui/solid/field';
import { splitProps, type Component, type ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export {
  FieldDescription as TextInputDescription,
  FieldError as TextInputError,
} from '@/components/Field';

export const TextInput: Component<PrimitiveField.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Root
      class={cn('group/text-input relative flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const TextInputLabel: Component<PrimitiveField.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Label
      class={cn(
        'mb-1.5 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
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
          {...(field().disabled && { 'data-disabled': 'true' })}
          {...(field().invalid && { 'data-invalid': 'true' })}
          {...(field().readOnly && { 'data-readonly': 'true' })}
          class={cn(
            'min-w-0 h-8 relative flex w-full items-center overflow-hidden rounded-lg border border-input transition-colors outline-none dark:bg-input/30',
            'has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50',
            'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
            'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
            'data-[readonly=true]:has-focus-visible:border-input data-[readonly=true]:has-focus-visible:ring-0',
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
      class={cn(
        'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[readonly=true]:cursor-default',
        'px-0 py-0 h-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
        'px-2.5',
        local.class,
      )}
      {...others}
    />
  );
};

export const TextInputArea: Component<PrimitiveField.TextareaProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Textarea
      class={cn(
        'min-h-16 text-base md:text-sm flex field-sizing-content w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 data-[readonly=true]:cursor-default',
        'px-0 py-0 border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
        'px-2.5 py-1.5',
        local.class,
      )}
      {...others}
    />
  );
};

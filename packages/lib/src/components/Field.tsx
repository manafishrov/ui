import { Field as PrimitiveField } from '@ark-ui/solid/field';
import { Fieldset as PrimitiveFieldset } from '@ark-ui/solid/fieldset';
import {
  type Component,
  type ComponentProps,
  createMemo,
  For,
  type JSXElement,
  Show,
  splitProps,
} from 'solid-js';
import { type VariantProps, tv, cn } from 'tailwind-variants';

import { Separator } from '@/components/Separator';

export { useFieldset } from '@ark-ui/solid/fieldset';
export const FieldContext = PrimitiveField.Context;

export const Fieldset: Component<PrimitiveFieldset.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveFieldset.Root
      data-slot='field-set'
      class={cn(
        'gap-4 has-data-[slot=checkbox-group]:gap-3 has-data-[slot=radio-group]:gap-3 flex flex-col',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </PrimitiveFieldset.Root>
  );
};

export type FieldLegendProps = PrimitiveFieldset.LegendProps & {
  variant?: 'legend' | 'label';
};

export const FieldLegend: Component<FieldLegendProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'children']);
  return (
    <PrimitiveFieldset.Legend
      data-slot='field-legend'
      data-variant={local.variant ?? 'legend'}
      class={cn(
        'mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </PrimitiveFieldset.Legend>
  );
};

export const FieldGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='field-group'
      class={cn(
        'gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const fieldVariants = tv({
  base: 'group/field flex w-full transition-colors data-[invalid=true]:text-destructive',
  variants: {
    orientation: {
      vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
      horizontal:
        'gap-4 flex-row items-center has-data-[slot=field-content]:items-start [&>[data-slot=field-label]]:flex-auto has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        '@md/field-group:gap-4 @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-data-[slot=field-content]:items-start @md/field-group:has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px flex-col [&>*]:w-full [&>.sr-only]:w-auto',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type FieldProps = PrimitiveField.RootProps & VariantProps<typeof fieldVariants>;

export const Field: Component<FieldProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation', 'children']);
  return (
    <PrimitiveField.Root
      role='group'
      data-slot='field'
      data-orientation={local.orientation ?? 'vertical'}
      class={fieldVariants({ orientation: local.orientation, class: local.class })}
      {...others}
    >
      {local.children}
    </PrimitiveField.Root>
  );
};

export const FieldContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='field-content'
      class={cn('group/field-content leading-snug relative flex flex-1 flex-col', local.class)}
      {...others}
    />
  );
};
export const FieldInput: Component<PrimitiveField.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Input
      data-slot='field-input'
      class={cn(
        'min-w-0 text-base md:text-sm h-8 px-2.5 py-1 flex w-full rounded-lg border border-input bg-transparent transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 data-[readonly=true]:cursor-default data-[readonly=true]:focus-visible:border-input data-[readonly=true]:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-[invalid=true]:border-destructive/50 dark:data-[invalid=true]:ring-destructive/40',
        local.class,
      )}
      {...others}
    />
  );
};

export const FieldTextarea: Component<PrimitiveField.TextareaProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Textarea
      data-slot='field-textarea'
      class={cn(
        'min-w-0 text-base md:text-sm px-2.5 py-2 flex min-h-[80px] w-full rounded-lg border border-input bg-transparent transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 data-[readonly=true]:cursor-default data-[readonly=true]:focus-visible:border-input data-[readonly=true]:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-[invalid=true]:border-destructive/50 dark:data-[invalid=true]:ring-destructive/40',
        local.class,
      )}
      {...others}
    />
  );
};

export const FieldSelect: Component<PrimitiveField.SelectProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.Select
      data-slot='field-select'
      class={cn(
        'min-w-0 text-base md:text-sm h-8 px-2.5 py-1 flex w-full rounded-lg border border-input bg-transparent transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 data-[readonly=true]:cursor-default data-[readonly=true]:focus-visible:border-input data-[readonly=true]:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-[invalid=true]:border-destructive/50 dark:data-[invalid=true]:ring-destructive/40',
        local.class,
      )}
      {...others}
    />
  );
};

export const FieldRequiredIndicator: Component<PrimitiveField.RequiredIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'fallback', 'children']);
  return (
    <PrimitiveField.RequiredIndicator
      fallback={local.fallback ?? '*'}
      class={cn('text-sm font-medium leading-none text-destructive', local.class)}
      {...others}
    >
      {local.children}
    </PrimitiveField.RequiredIndicator>
  );
};

export const FieldLabel: Component<PrimitiveField.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveField.Label
      data-slot='field-label'
      class={cn(
        'group-data-[orientation=vertical]/field:mb-1.5',
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        '*:data-[slot=field]:p-2.5 group/field-label peer/field-label leading-snug flex w-fit group-data-disabled/field:opacity-50 has-data-[slot=field]:rounded-lg has-data-[slot=field]:border has-[[data-state=checked]]:border-primary/30 has-[[data-state=checked]]:bg-primary/5 dark:has-[[data-state=checked]]:border-primary/20 dark:has-[[data-state=checked]]:bg-primary/10',
        'has-data-[slot=field]:w-full has-data-[slot=field]:flex-col',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </PrimitiveField.Label>
  );
};

export const FieldTitle: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <div
      data-slot='field-label'
      class={cn(
        'group-data-[orientation=vertical]/field:mb-1.5',
        'gap-2 text-sm font-medium leading-snug flex w-fit items-center group-data-disabled/field:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </div>
  );
};

export const FieldDescription: Component<PrimitiveField.HelperTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveField.HelperText
      data-slot='field-description'
      class={cn(
        'text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal text-left text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance',
        '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </PrimitiveField.HelperText>
  );
};

export type FieldSeparatorProps = ComponentProps<'div'> & {
  children?: JSXElement;
};

export const FieldSeparator: Component<FieldSeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ['children', 'class']);
  return (
    <div
      data-slot='field-separator'
      data-content={Boolean(local.children)}
      class={cn(
        '-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative',
        local.class,
      )}
      {...others}
    >
      <Separator class='inset-0 absolute top-1/2' />
      <Show when={local.children}>
        <span
          class='px-2 relative mx-auto block w-fit bg-background text-muted-foreground'
          data-slot='field-separator-content'
        >
          {local.children}
        </span>
      </Show>
    </div>
  );
};

export type FieldErrorProps = PrimitiveField.ErrorTextProps & {
  errors?: ({ message?: string } | string | undefined)[];
};

export const FieldError: Component<FieldErrorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'errors']);

  const uniqueErrors = createMemo(() => {
    const { errors } = local;
    if (!errors || errors.length === 0) {
      return [];
    }

    const messages: string[] = [];
    for (const error of errors) {
      if (typeof error === 'string') {
        messages.push(error);
      } else if (error && typeof error === 'object' && typeof error.message === 'string') {
        messages.push(error.message);
      }
    }

    return [...new Set(messages)];
  });

  return (
    <div class='mt-[3px] flex min-h-[0.875rem] flex-col justify-start'>
      <PrimitiveField.ErrorText
        data-slot='field-error'
        class={cn('font-medium text-[0.8rem] leading-[0.875rem] text-destructive', local.class)}
        {...others}
      >
        <Show
          when={local.children}
          fallback={
            <Show when={uniqueErrors().length > 0}>
              <Show when={uniqueErrors().length > 1} fallback={uniqueErrors().at(0)}>
                <ul class='ml-4 gap-1 flex list-disc flex-col'>
                  <For each={uniqueErrors()}>{(error) => <li>{error}</li>}</For>
                </ul>
              </Show>
            </Show>
          }
        >
          {local.children}
        </Show>
      </PrimitiveField.ErrorText>
    </div>
  );
};

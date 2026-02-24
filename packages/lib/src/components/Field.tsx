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

import { Label } from '@/components/Label';
import { Separator } from '@/components/Separator';

export { useFieldset } from '@ark-ui/solid/fieldset';
export const FieldContext = PrimitiveField.Context;

export const FieldSet: Component<PrimitiveFieldset.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveFieldset.Root
      data-slot='field-set'
      class={cn(
        'gap-4 has-data-[slot=checkbox-group]:gap-3 has-data-[slot=radio-group]:gap-3 flex flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export type FieldLegendProps = PrimitiveFieldset.LegendProps & {
  variant?: 'legend' | 'label';
};

export const FieldLegend: Component<FieldLegendProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant']);
  return (
    <PrimitiveFieldset.Legend
      data-slot='field-legend'
      data-variant={local.variant ?? 'legend'}
      class={cn(
        'mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base',
        local.class,
      )}
      {...others}
    />
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
  base: 'gap-2 group/field flex w-full transition-colors data-invalid:text-destructive',
  variants: {
    orientation: {
      vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center has-data-[slot=field-content]:items-start [&>[data-slot=field-label]]:flex-auto has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        '@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-data-[slot=field-content]:items-start @md/field-group:has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px flex-col [&>*]:w-full [&>.sr-only]:w-auto',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type FieldProps = PrimitiveField.RootProps & VariantProps<typeof fieldVariants>;

export const Field: Component<FieldProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation']);
  return (
    <PrimitiveField.Root
      role='group'
      data-slot='field'
      data-orientation={local.orientation ?? 'vertical'}
      class={fieldVariants({ orientation: local.orientation, class: local.class })}
      {...others}
    />
  );
};

export const FieldContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='field-content'
      class={cn('gap-0.5 group/field-content leading-snug flex flex-1 flex-col', local.class)}
      {...others}
    />
  );
};

export const FieldLabel: Component<PrimitiveField.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveField.Label
      data-slot='field-label'
      asChild={(labelProps) => (
        <Label
          class={cn(
            'gap-2 *:data-[slot=field]:p-2.5 group/field-label peer/field-label leading-snug flex w-fit group-data-disabled/field:opacity-50 has-data-[slot=field]:rounded-lg has-data-[slot=field]:border has-[[data-state=checked]]:border-primary/30 has-[[data-state=checked]]:bg-primary/5 dark:has-[[data-state=checked]]:border-primary/20 dark:has-[[data-state=checked]]:bg-primary/10',
            'has-data-[slot=field]:w-full has-data-[slot=field]:flex-col',
            local.class,
          )}
          {...labelProps()}
          {...others}
        >
          {local.children}
          <FieldRequiredIndicator />
        </Label>
      )}
    />
  );
};

export const FieldRequiredIndicator: Component<PrimitiveField.RequiredIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'fallback']);
  return (
    <PrimitiveField.RequiredIndicator
      fallback={local.fallback ?? '*'}
      class={cn('text-sm font-medium leading-none text-destructive', local.class)}
      {...others}
    />
  );
};

export const FieldTitle: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='field-label'
      class={cn(
        'gap-2 text-sm font-medium leading-snug flex w-fit items-center group-data-disabled/field:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const FieldDescription: Component<PrimitiveField.HelperTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveField.HelperText
      data-slot='field-description'
      class={cn(
        'text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal text-left text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1',
        '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        local.class,
      )}
      {...others}
    />
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
    <div data-slot='field-error-container' class='min-h-5'>
      <PrimitiveField.ErrorText
        data-slot='field-error'
        class={cn('text-sm font-normal text-destructive', local.class)}
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

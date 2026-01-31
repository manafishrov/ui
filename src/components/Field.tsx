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
  base: 'data-invalid:text-destructive gap-2 group/field flex w-full transition-colors',
  variants: {
    orientation: {
      vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center [&>[data-slot=field-label]]:flex-auto has-data-[slot=field-content]:items-start has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-data-[slot=field-content]:items-start @md/field-group:has-data-[slot=field-content]:[&>[role=checkbox],[role=radio]]:mt-px',
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
      class={cn('gap-0.5 group/field-content flex flex-1 flex-col leading-snug', local.class)}
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
            'has-[[data-state=checked]]:bg-primary/5 has-[[data-state=checked]]:border-primary/30 dark:has-[[data-state=checked]]:border-primary/20 dark:has-[[data-state=checked]]:bg-primary/10 gap-2 group-data-disabled/field:opacity-50 has-data-[slot=field]:rounded-lg has-data-[slot=field]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug',
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
      class={cn('text-destructive text-sm leading-none font-medium', local.class)}
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
        'gap-2 text-sm font-medium group-data-disabled/field:opacity-50 flex w-fit items-center leading-snug',
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
        'text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-[orientation=horizontal]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
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
      <Separator class='absolute inset-0 top-1/2' />
      <Show when={local.children}>
        <span
          class='text-muted-foreground bg-background relative mx-auto block w-fit px-2'
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
        class={cn('text-destructive text-sm font-normal', local.class)}
        {...others}
      >
        <Show
          when={local.children}
          fallback={
            <Show when={uniqueErrors().length > 0}>
              <Show when={uniqueErrors().length > 1} fallback={uniqueErrors().at(0)}>
                <ul class='ml-4 flex list-disc flex-col gap-1'>
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

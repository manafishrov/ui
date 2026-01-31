import {
  type Component,
  type ComponentProps,
  splitProps,
  type JSX,
  type JSXElement,
} from 'solid-js';
import { cn, tv, type VariantProps } from 'tailwind-variants';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

export const InputGroup: Component<ComponentProps<'div'>> = (props): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <div
      data-slot='input-group'
      class={cn(
        'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none',
        'has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]',
        'has-data-invalid:border-destructive has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40 has-data-invalid:ring-[3px]',
        'has-data-disabled:bg-input/50 dark:has-data-disabled:bg-input/80 has-data-disabled:opacity-50',
        'has-data-[align=block-end]:h-auto has-data-[align=block-end]:flex-col',
        'has-data-[align=block-start]:h-auto has-data-[align=block-start]:flex-col',
        'has-data-[align=block-end]:[&>input]:pt-3',
        'has-data-[align=block-start]:[&>input]:pb-3',
        'has-data-[align=inline-end]:[&>input]:pr-1.5',
        'has-data-[align=inline-start]:[&>input]:pl-1.5',
        'has-[>textarea]:h-auto',
        local.class,
      )}
      {...others}
    />
  );
};

export const inputGroupAddonVariants = tv({
  base: "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium has-data-disabled:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  variants: {
    align: {
      'inline-start': 'pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first',
      'inline-end': 'pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last',
      'block-start':
        'px-2.5 pt-2 has-[>input]:pt-2 [.border-b]:pb-2 order-first w-full justify-start',
      'block-end': 'px-2.5 pb-2 has-[>input]:pb-2 [.border-t]:pt-2 order-last w-full justify-start',
    },
  },
  defaultVariants: {
    align: 'inline-start',
  },
});

export type InputGroupAddonProps = ComponentProps<'div'> &
  VariantProps<typeof inputGroupAddonVariants>;

export const InputGroupAddon: Component<InputGroupAddonProps> = (props): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'align', 'onClick']);

  return (
    <div
      role='group'
      data-slot='input-group-addon'
      data-align={local.align ?? 'inline-start'}
      class={inputGroupAddonVariants({ align: local.align, class: local.class })}
      onClick={(event) => {
        if (!(event.target instanceof HTMLElement) || event.target.closest('button')) {
          return;
        }
        const parent = event.currentTarget.parentElement;
        if (parent) {
          const input = parent.querySelector('input');
          if (input) {
            input.focus();
          }
        }
        if (typeof local.onClick === 'function') {
          local.onClick(event);
        }
      }}
      {...others}
    />
  );
};

export const inputGroupButtonVariants = tv({
  base: 'gap-2 text-sm shadow-none flex items-center',
  variants: {
    size: {
      xs: 'h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*="size-"])]:size-3.5',
      sm: '',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

export type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>;

export const InputGroupButton: Component<InputGroupButtonProps> = (props): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'variant', 'size']);

  return (
    <Button
      data-size={local.size ?? 'xs'}
      variant={local.variant ?? 'ghost'}
      class={inputGroupButtonVariants({ size: local.size, class: local.class })}
      {...others}
    />
  );
};

export const InputGroupText: Component<ComponentProps<'span'>> = (props): JSXElement => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <span
      class={cn(
        'text-muted-foreground gap-2 text-sm [&_svg:not([class*="size-"])]:size-4 flex items-center [&_svg]:pointer-events-none',
        local.class,
      )}
      {...others}
    />
  );
};

export const InputGroupInput: Component<ComponentProps<typeof Input>> = (props): JSXElement => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Input
      data-slot='input-group-control'
      class={cn(
        'rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1',
        local.class,
      )}
      {...others}
    />
  );
};

export const InputGroupTextarea: Component<ComponentProps<typeof Textarea>> = (
  props,
): JSXElement => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Textarea
      data-slot='input-group-control'
      class={cn(
        'rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none',
        local.class,
      )}
      {...others}
    />
  );
};

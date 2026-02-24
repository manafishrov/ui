import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn, tv, type VariantProps } from 'tailwind-variants';

import { Button } from '@/components/Button';
import { Textarea } from '@/components/Textarea';

export const inputVariants = tv({
  base: 'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
  variants: {
    variant: {
      outline:
        'h-8 px-2.5 py-1 rounded-lg border border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:bg-input/50 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-readonly:focus-visible:border-input data-readonly:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40',
      ghost: 'px-0 py-0 h-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export type InputProps = Omit<ComponentProps<'input'>, 'size'> & VariantProps<typeof inputVariants>;

export const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'type']);
  return (
    <input
      type={local.type}
      data-slot='input'
      class={inputVariants({ variant: local.variant, class: local.class })}
      {...others}
    />
  );
};

export const InputGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <div
      data-slot='input-group'
      class={cn(
        'group/input-group min-w-0 h-8 relative flex w-full items-center rounded-lg border border-input transition-colors outline-none dark:bg-input/30',
        'has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50',
        'has-data-invalid:border-destructive has-data-invalid:ring-[3px] has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40',
        'has-disabled:bg-input/50 has-disabled:opacity-50 dark:has-disabled:bg-input/80',
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
  base: "gap-2 py-1.5 text-sm font-medium [&>svg:not([class*='size-'])]:size-4 flex h-auto cursor-text items-center justify-center text-muted-foreground select-none group-data-disabled/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)]",
  variants: {
    align: {
      'inline-start': 'pl-2 order-first has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]',
      'inline-end': 'pr-2 order-last has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]',
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

export const InputGroupAddon: Component<InputGroupAddonProps> = (props) => {
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
  base: 'gap-2 text-sm flex items-center shadow-none',
  variants: {
    size: {
      xs: 'h-6 gap-1 px-1.5 [&>svg:not([class*="size-"])]:size-3.5 rounded-[calc(var(--radius)-3px)]',
      sm: '',
      'icon-xs': 'size-6 p-0 has-[>svg]:p-0 rounded-[calc(var(--radius)-3px)]',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

export type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>;

export const InputGroupButton: Component<InputGroupButtonProps> = (props) => {
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

export const InputGroupText: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <span
      class={cn(
        'gap-2 text-sm [&_svg:not([class*="size-"])]:size-4 flex items-center text-muted-foreground [&_svg]:pointer-events-none',
        local.class,
      )}
      {...others}
    />
  );
};

export const InputGroupInput: Component<ComponentProps<typeof Input>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Input
      data-slot='input-group-control'
      class={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent',
        local.class,
      )}
      {...others}
    />
  );
};

export const InputGroupTextarea: Component<ComponentProps<typeof Textarea>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Textarea
      data-slot='input-group-control'
      class={cn(
        'py-2 flex-1 resize-none rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent',
        local.class,
      )}
      {...others}
    />
  );
};

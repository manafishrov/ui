import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/solid-router';
import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';

import { buttonVariants, type ButtonVariantProps } from './Button';

export type LinkProps = RouterLinkProps & ButtonVariantProps & { class?: string | undefined };

export const Link: Component<LinkProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'variant']);
  const hasVariantOrSize = typeof local.variant === 'string' || typeof local.size === 'string';
  const linkClass = hasVariantOrSize
    ? buttonVariants({ class: local.class, size: local.size, variant: local.variant })
    : cn(
        'rounded-[min(var(--radius-md),12px)] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        local.class,
      );

  return <RouterLink class={linkClass} {...others} />;
};

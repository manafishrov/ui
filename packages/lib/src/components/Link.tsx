import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/solid-router';
import { splitProps, type Component } from 'solid-js';

import { buttonVariants, type ButtonVariantProps } from './Button';

export type LinkProps = RouterLinkProps & ButtonVariantProps & { class?: string };

export const Link: Component<LinkProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'variant']);
  const hasVariantOrSize = typeof local.variant === 'string' || typeof local.size === 'string';
  const linkClass = hasVariantOrSize
    ? buttonVariants({ class: local.class, size: local.size, variant: local.variant })
    : local.class;

  return <RouterLink class={linkClass} {...others} />;
};

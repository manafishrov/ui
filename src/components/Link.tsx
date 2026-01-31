import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/solid-router';
import { type Component, splitProps } from 'solid-js';

import { buttonVariants, type ButtonVariantProps } from './Button';

export type LinkProps = RouterLinkProps & ButtonVariantProps & { class?: string };

export const Link: Component<LinkProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'variant']);

  return (
    <RouterLink
      class={buttonVariants({ class: local.class, size: local.size, variant: local.variant })}
      {...others}
    />
  );
};

import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const H1: Component<ComponentProps<'h1'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <h1
      class={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading',
        local.class,
      )}
      {...others}
    />
  );
};

export const H2: Component<ComponentProps<'h2'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <h2
      class={cn(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-b font-heading',
        local.class,
      )}
      {...others}
    />
  );
};

export const H3: Component<ComponentProps<'h3'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <h3
      class={cn('scroll-m-20 text-2xl font-semibold tracking-tight font-heading', local.class)}
      {...others}
    />
  );
};

export const H4: Component<ComponentProps<'h4'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <h4
      class={cn('scroll-m-20 text-xl font-semibold tracking-tight font-heading', local.class)}
      {...others}
    />
  );
};

export const P: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <p class={cn('leading-7', local.class)} {...others} />;
};

export const Blockquote: Component<ComponentProps<'blockquote'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <blockquote class={cn('mt-6 pl-6 border-l-2 italic', local.class)} {...others} />;
};

export const List: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <ul class={cn('my-6 ml-6 [&>li]:mt-2 list-disc', local.class)} {...others} />;
};

export const InlineCode: Component<ComponentProps<'code'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <code
      class={cn(
        'rounded font-mono text-sm font-semibold relative bg-muted px-[0.3rem] py-[0.2rem]',
        local.class,
      )}
      {...others}
    />
  );
};

export const Lead: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <p class={cn('text-xl text-muted-foreground', local.class)} {...others} />;
};

export const Large: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <div class={cn('text-lg font-semibold', local.class)} {...others} />;
};

export const Small: Component<ComponentProps<'small'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <small class={cn('text-sm font-medium leading-none', local.class)} {...others} />;
};

export const Muted: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <p class={cn('text-sm text-muted-foreground', local.class)} {...others} />;
};

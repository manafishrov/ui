import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Table: Component<ComponentProps<'table'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div data-slot='table-container' class='relative w-full overflow-x-auto'>
      <table
        data-slot='table'
        class={cn('text-sm w-full caption-bottom', local.class)}
        {...others}
      />
    </div>
  );
};

export const TableHeader: Component<ComponentProps<'thead'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <thead data-slot='table-header' class={cn('[&_tr]:border-b', local.class)} {...others} />;
};

export const TableBody: Component<ComponentProps<'tbody'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tbody
      data-slot='table-body'
      class={cn('[&_tr:last-child]:border-0', local.class)}
      {...others}
    />
  );
};

export const TableFooter: Component<ComponentProps<'tfoot'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tfoot
      data-slot='table-footer'
      class={cn('font-medium border-t bg-muted/50 [&>tr]:last:border-b-0', local.class)}
      {...others}
    />
  );
};

export const TableRow: Component<ComponentProps<'tr'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tr
      data-slot='table-row'
      class={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        local.class,
      )}
      {...others}
    />
  );
};

export const TableHead: Component<ComponentProps<'th'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <th
      data-slot='table-head'
      class={cn(
        'h-10 px-2 font-medium [&:has([role=checkbox])]:pr-0 text-left align-middle whitespace-nowrap text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const TableCell: Component<ComponentProps<'td'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <td
      data-slot='table-cell'
      class={cn('p-2 [&:has([role=checkbox])]:pr-0 align-middle whitespace-nowrap', local.class)}
      {...others}
    />
  );
};

export const TableCaption: Component<ComponentProps<'caption'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <caption
      data-slot='table-caption'
      class={cn('mt-4 text-sm text-muted-foreground', local.class)}
      {...others}
    />
  );
};

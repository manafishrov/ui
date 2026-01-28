import { type Component, type JSX, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Table: Component<JSX.HTMLAttributes<HTMLTableElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div data-slot='table-container' class='relative w-full overflow-x-auto'>
      <table
        data-slot='table'
        class={cn('w-full caption-bottom text-sm', local.class)}
        {...others}
      />
    </div>
  );
};

export const TableHeader: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <thead data-slot='table-header' class={cn('[&_tr]:border-b', local.class)} {...others} />;
};

export const TableBody: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tbody
      data-slot='table-body'
      class={cn('[&_tr:last-child]:border-0', local.class)}
      {...others}
    />
  );
};

export const TableFooter: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tfoot
      data-slot='table-footer'
      class={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', local.class)}
      {...others}
    />
  );
};

export const TableRow: Component<JSX.HTMLAttributes<HTMLTableRowElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <tr
      data-slot='table-row'
      class={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        local.class,
      )}
      {...others}
    />
  );
};

export const TableHead: Component<JSX.ThHTMLAttributes<HTMLTableCellElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <th
      data-slot='table-head'
      class={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const TableCell: Component<JSX.TdHTMLAttributes<HTMLTableCellElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <td
      data-slot='table-cell'
      class={cn('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0', local.class)}
      {...others}
    />
  );
};

export const TableCaption: Component<JSX.HTMLAttributes<HTMLTableCaptionElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <caption
      data-slot='table-caption'
      class={cn('text-muted-foreground mt-4 text-sm', local.class)}
      {...others}
    />
  );
};

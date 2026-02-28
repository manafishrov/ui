import { DatePicker as DatePickerPrimitive } from '@ark-ui/solid/date-picker';
import {
  MdOutlineCalendar_month,
  MdOutlineChevron_left,
  MdOutlineChevron_right,
} from 'solid-icons/md';
import { type Component, For, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { buttonVariants } from '@/components/Button';

export const DatePicker = DatePickerPrimitive.Root;
export const DatePickerContext = DatePickerPrimitive.Context;
export const DatePickerView = DatePickerPrimitive.View;
export const DatePickerViewTrigger = DatePickerPrimitive.ViewTrigger;
export const DatePickerRangeText = DatePickerPrimitive.RangeText;
export const DatePickerTable: Component<DatePickerPrimitive.TableProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Table
      class={cn('w-full border-collapse space-y-1', local.class)}
      {...others}
    />
  );
};

export const DatePickerTableBody: Component<DatePickerPrimitive.TableBodyProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.TableBody class={cn('', local.class)} {...others} />;
};

export const DatePickerTableCell: Component<DatePickerPrimitive.TableCellProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.TableCell
      class={cn(
        'text-center text-sm p-0 relative [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        local.class,
      )}
      {...others}
    />
  );
};

export const DatePickerTableHead: Component<DatePickerPrimitive.TableHeadProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.TableHead class={cn('', local.class)} {...others} />;
};

export const DatePickerTableHeader: Component<DatePickerPrimitive.TableHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.TableHeader
      class={cn('text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]', local.class)}
      {...others}
    />
  );
};

export const DatePickerTableRow: Component<DatePickerPrimitive.TableRowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.TableRow class={cn('flex w-full mt-2', local.class)} {...others} />;
};

export const DatePickerLabel: Component<DatePickerPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const DatePickerControl: Component<DatePickerPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.Control class={cn('gap-2 flex flex-row', local.class)} {...others} />;
};

export const DatePickerInput: Component<DatePickerPrimitive.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Input
      class={cn(
        'h-9 px-3 py-2 text-sm file:text-sm file:font-medium flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const DatePickerTrigger: Component<DatePickerPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <DatePickerPrimitive.Trigger
      class={cn(
        buttonVariants({ variant: 'outline', size: 'icon' }),
        'size-9 p-0 font-normal',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineCalendar_month class='size-4' />}
    </DatePickerPrimitive.Trigger>
  );
};

export const DatePickerPositioner: Component<DatePickerPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.Positioner class={cn('isolate z-50', local.class)} {...others} />;
};

export const DatePickerContent: Component<DatePickerPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Content
      class={cn(
        'p-3 shadow-md rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        local.class,
      )}
      {...others}
    />
  );
};

export const DatePickerPrevTrigger: Component<DatePickerPrimitive.PrevTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <DatePickerPrimitive.PrevTrigger
      class={cn(
        buttonVariants({ variant: 'outline' }),
        'size-7 p-0 bg-transparent opacity-50 hover:opacity-100 absolute left-1',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineChevron_left class='size-4' />}
    </DatePickerPrimitive.PrevTrigger>
  );
};

export const DatePickerNextTrigger: Component<DatePickerPrimitive.NextTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <DatePickerPrimitive.NextTrigger
      class={cn(
        buttonVariants({ variant: 'outline' }),
        'size-7 p-0 bg-transparent opacity-50 hover:opacity-100 absolute right-1',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineChevron_right class='size-4' />}
    </DatePickerPrimitive.NextTrigger>
  );
};

export const DatePickerTableCellTrigger: Component<DatePickerPrimitive.TableCellTriggerProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.TableCellTrigger
      class={cn(
        buttonVariants({ variant: 'ghost' }),
        'size-9 p-0 font-normal data-[selected]:opacity-100',
        'data-[today]:bg-accent data-[today]:text-accent-foreground',
        'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
        'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        'data-[outside-range]:text-muted-foreground data-[outside-range]:opacity-50',
        'data-[in-range]:rounded-none data-[in-range]:bg-accent data-[in-range]:text-accent-foreground',
        'data-[range-end]:rounded-r-md data-[range-start]:rounded-l-md',
        local.class,
      )}
      {...others}
    />
  );
};

export const DatePickerViewControl: Component<DatePickerPrimitive.ViewControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <DatePickerPrimitive.ViewControl
      class={cn('flex justify-center pt-1 relative items-center mb-4', local.class)}
      {...others}
    >
      <DatePickerPrevTrigger />
      <DatePickerViewTrigger
        asChild={(triggerProps) => (
          <button
            class={cn(buttonVariants({ variant: 'ghost' }), 'h-7 px-2 py-1 text-sm font-medium')}
            {...triggerProps()}
          >
            <DatePickerRangeText />
          </button>
        )}
      />
      <DatePickerNextTrigger />
    </DatePickerPrimitive.ViewControl>
  );
};

export const DatePickerDayView: Component = () => (
  <DatePickerView view='day'>
    <DatePickerViewControl />
    <DatePickerTable>
      <DatePickerTableHead>
        <DatePickerTableRow>
          <DatePickerContext>
            {(api) => (
              <For each={api().weekDays}>
                {(weekDay) => (
                  <DatePickerTableHeader aria-label={weekDay.narrow}>
                    {weekDay.short}
                  </DatePickerTableHeader>
                )}
              </For>
            )}
          </DatePickerContext>
        </DatePickerTableRow>
      </DatePickerTableHead>
      <DatePickerTableBody>
        <DatePickerContext>
          {(api) => (
            <For each={api().weeks}>
              {(week) => (
                <DatePickerTableRow>
                  <For each={week}>
                    {(day) => (
                      <DatePickerTableCell value={day}>
                        <DatePickerTableCellTrigger />
                      </DatePickerTableCell>
                    )}
                  </For>
                </DatePickerTableRow>
              )}
            </For>
          )}
        </DatePickerContext>
      </DatePickerTableBody>
    </DatePickerTable>
  </DatePickerView>
);

export const DatePickerMonthView: Component = () => (
  <DatePickerView view='month'>
    <DatePickerViewControl />
    <DatePickerTable>
      <DatePickerTableBody>
        <DatePickerContext>
          {(api) => (
            <For each={api().getMonthsGrid({ columns: 4, format: 'short' })}>
              {(months) => (
                <DatePickerTableRow>
                  <For each={months}>
                    {(month) => (
                      <DatePickerTableCell value={month.value}>
                        <DatePickerTableCellTrigger class='w-full'>
                          {month.label}
                        </DatePickerTableCellTrigger>
                      </DatePickerTableCell>
                    )}
                  </For>
                </DatePickerTableRow>
              )}
            </For>
          )}
        </DatePickerContext>
      </DatePickerTableBody>
    </DatePickerTable>
  </DatePickerView>
);

export const DatePickerYearView: Component = () => (
  <DatePickerView view='year'>
    <DatePickerViewControl />
    <DatePickerTable>
      <DatePickerTableBody>
        <DatePickerContext>
          {(api) => (
            <For each={api().getYearsGrid({ columns: 4 })}>
              {(years) => (
                <DatePickerTableRow>
                  <For each={years}>
                    {(year) => (
                      <DatePickerTableCell value={year.value}>
                        <DatePickerTableCellTrigger class='w-full'>
                          {year.label}
                        </DatePickerTableCellTrigger>
                      </DatePickerTableCell>
                    )}
                  </For>
                </DatePickerTableRow>
              )}
            </For>
          )}
        </DatePickerContext>
      </DatePickerTableBody>
    </DatePickerTable>
  </DatePickerView>
);

export const DatePickerViews: Component = () => (
  <>
    <DatePickerDayView />
    <DatePickerMonthView />
    <DatePickerYearView />
  </>
);

export const Calendar: Component<DatePickerPrimitive.RootProps> = (props) => (
  <DatePicker {...props} inline unmountOnExit={false}>
    <DatePickerContent class='border-none shadow-none ring-0'>
      <DatePickerViews />
    </DatePickerContent>
  </DatePicker>
);

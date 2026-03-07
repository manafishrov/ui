import { DatePicker as DatePickerPrimitive } from '@ark-ui/solid/date-picker';
import { type Component, For, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import CalendarMonthIcon from '~icons/material-symbols/calendar-month';
import ChevronLeftIcon from '~icons/material-symbols/chevron-left';
import ChevronRightIcon from '~icons/material-symbols/chevron-right';

import { buttonVariants } from '@/components/Button';
export const DatePicker: Component<DatePickerPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.Root class={cn('flex w-full flex-col', local.class)} {...others} />;
};
export const DatePickerContext = DatePickerPrimitive.Context,
  DatePickerRangeText = DatePickerPrimitive.RangeText,
  DatePickerView = DatePickerPrimitive.View,
  DatePickerViewTrigger = DatePickerPrimitive.ViewTrigger;
export const DatePickerTable: Component<DatePickerPrimitive.TableProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Table
      class={cn('space-y-1 w-full border-collapse', local.class)}
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
        'text-sm p-0 relative text-center focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md',
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
      class={cn('w-9 font-normal rounded-md text-[0.8rem] text-muted-foreground', local.class)}
      {...others}
    />
  );
};
export const DatePickerTableRow: Component<DatePickerPrimitive.TableRowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.TableRow class={cn('mt-2 flex w-full', local.class)} {...others} />;
};
export const DatePickerLabel: Component<DatePickerPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Label
      class={cn(
        'mb-1.5 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
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
        'h-9 px-3 py-2 text-sm file:text-sm file:font-medium shadow-sm flex w-full rounded-lg border border-input bg-background transition-colors file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 dark:hover:bg-input/50',
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
      {local.children ?? <CalendarMonthIcon class='size-4' />}
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
        'w-72 p-3 shadow-md rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
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
        'size-7 p-0 left-1 absolute bg-transparent opacity-50 hover:opacity-100',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <ChevronLeftIcon class='size-4' />}
    </DatePickerPrimitive.PrevTrigger>
  );
};
export const DatePickerNextTrigger: Component<DatePickerPrimitive.NextTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <DatePickerPrimitive.NextTrigger
      class={cn(
        buttonVariants({ variant: 'outline' }),
        'size-7 p-0 right-1 absolute bg-transparent opacity-50 hover:opacity-100',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <ChevronRightIcon class='size-4' />}
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
        'size-9 p-0 font-normal data-selected:opacity-100',
        'data-today:bg-accent data-today:text-accent-foreground',
        'data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary data-selected:hover:text-primary-foreground data-selected:focus:bg-primary data-selected:focus:text-primary-foreground',
        'data-disabled:text-muted-foreground data-[disabled=true]:opacity-50',
        'data-outside-range:text-muted-foreground data-outside-range:opacity-50',
        'data-in-range:rounded-none data-in-range:bg-accent data-in-range:text-accent-foreground',
        'data-range-end:rounded-r-md data-range-start:rounded-l-md',
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
      class={cn('pt-1 mb-4 px-8 relative flex items-center justify-center', local.class)}
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
                        <DatePickerTableCellTrigger>{day.day}</DatePickerTableCellTrigger>
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
                <DatePickerTableRow class='gap-2 w-full'>
                  <For each={months}>
                    {(month) => (
                      <DatePickerTableCell value={month.value} class='flex-1'>
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
                <DatePickerTableRow class='gap-2 w-full'>
                  <For each={years}>
                    {(year) => (
                      <DatePickerTableCell value={year.value} class='flex-1'>
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
export const DatePickerViews: Component = () => [
  <DatePickerDayView />,
  <DatePickerMonthView />,
  <DatePickerYearView />,
];
export const Calendar: Component<DatePickerPrimitive.RootProps> = (props) => (
  <DatePicker {...props} inline unmountOnExit={false}>
    <DatePickerContent class='border-none shadow-none ring-0'>
      <DatePickerViews />
    </DatePickerContent>
  </DatePicker>
);

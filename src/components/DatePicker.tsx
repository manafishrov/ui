import { DatePicker as DatePickerPrimitive } from '@ark-ui/solid/date-picker';
import {
  MdOutlineCalendar_month,
  MdOutlineChevron_left,
  MdOutlineChevron_right,
} from 'solid-icons/md';
import { type Component, For, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { buttonVariants } from '@/components/Button';
import { Label } from '@/components/Label';

export const DatePicker = DatePickerPrimitive.Root;
export const DatePickerContext = DatePickerPrimitive.Context;
export const DatePickerView = DatePickerPrimitive.View;
export const DatePickerViewTrigger = DatePickerPrimitive.ViewTrigger;
export const DatePickerRangeText = DatePickerPrimitive.RangeText;
export const DatePickerTable = DatePickerPrimitive.Table;
export const DatePickerTableBody = DatePickerPrimitive.TableBody;
export const DatePickerTableCell = DatePickerPrimitive.TableCell;
export const DatePickerTableHead = DatePickerPrimitive.TableHead;
export const DatePickerTableHeader = DatePickerPrimitive.TableHeader;
export const DatePickerTableRow = DatePickerPrimitive.TableRow;

export const DatePickerLabel: Component<DatePickerPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Label
      asChild={(labelProps) => <Label class={cn(local.class)} {...labelProps()} {...others} />}
    />
  );
};

export const DatePickerControl: Component<DatePickerPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <DatePickerPrimitive.Control class={cn('flex flex-row gap-2', local.class)} {...others} />;
};

export const DatePickerInput: Component<DatePickerPrimitive.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <DatePickerPrimitive.Input
      class={cn(
        'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 rounded-lg p-3 shadow-md ring-1 outline-none',
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
        'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
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
        'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
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
        'size-9 p-0 font-normal aria-selected:opacity-100',
        'data-today:bg-accent data-today:text-accent-foreground',
        'data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary data-selected:hover:text-primary-foreground data-selected:focus:bg-primary data-selected:focus:text-primary-foreground',
        'data-disabled:text-muted-foreground data-disabled:opacity-50',
        'data-outside-range:text-muted-foreground data-outside-range:opacity-50',
        'data-in-range:bg-accent data-in-range:text-accent-foreground data-in-range:rounded-none',
        'data-range-start:rounded-l-md data-range-end:rounded-r-md',
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
      class={cn('flex items-center justify-between pb-4', local.class)}
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

const DatePickerDayView: Component = () => (
  <DatePickerView view='day'>
    <DatePickerViewControl />
    <DatePickerTable>
      <DatePickerTableHead>
        <DatePickerTableRow>
          <DatePickerContext>
            {(api) => (
              <For each={api().weekDays}>
                {(weekDay) => (
                  <DatePickerTableHeader
                    class='text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal'
                    aria-label={weekDay.narrow}
                  >
                    {weekDay.narrow}
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

const DatePickerMonthView: Component = () => (
  <DatePickerView view='month'>
    <DatePickerViewControl />
    <DatePickerTable>
      <DatePickerTableBody>
        <DatePickerContext>
          {(api) => (
            <For each={api().getMonthsGrid({ columns: 3, format: 'short' })}>
              {(months) => (
                <DatePickerTableRow>
                  <For each={months}>
                    {(month) => (
                      <DatePickerTableCell value={month.value}>
                        <DatePickerTableCellTrigger
                          class={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'w-full font-normal data-selected:bg-primary data-selected:text-primary-foreground',
                          )}
                        >
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

const DatePickerYearView: Component = () => (
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
                        <DatePickerTableCellTrigger
                          class={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'w-full font-normal data-selected:bg-primary data-selected:text-primary-foreground',
                          )}
                        >
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

export const Calendar: Component<DatePickerPrimitive.RootProps> = (props) => (
  <DatePicker {...props} inline unmountOnExit={false}>
    <DatePickerContent class='border-none shadow-none ring-0'>
      <DatePickerDayView />
      <DatePickerMonthView />
      <DatePickerYearView />
    </DatePickerContent>
  </DatePicker>
);

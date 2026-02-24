import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  DatePicker,
  DatePickerView,
  DatePickerViewTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerPrevTrigger,
  DatePickerNextTrigger,
  DatePickerTableCellTrigger,
  DatePickerViewControl,
  DatePickerDayView,
  DatePickerMonthView,
  DatePickerYearView,
  DatePickerViews,
  Calendar,
} from '@manafishrov/ui/date-picker';
import { createFileRoute } from '@tanstack/solid-router';

const DatePickerDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>DatePicker</h1>
      <p class='mt-2 text-muted-foreground'>
        A date picker component with range and selection capabilities.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <DatePicker>
        <DatePickerLabel>Date</DatePickerLabel>
        <DatePickerControl>
          <DatePickerInput />
          <DatePickerTrigger
            asChild={(props) => (
              <Button variant='outline' size='icon' {...props()}>
                📅
              </Button>
            )}
          />
        </DatePickerControl>
        <DatePickerPositioner>
          <DatePickerContent>
            <DatePickerView view='day'>
              <DatePickerViewControl>
                <DatePickerPrevTrigger
                  asChild={(props) => (
                    <Button variant='outline' size='icon' {...props()}>
                      &lt;
                    </Button>
                  )}
                />
                <DatePickerViewTrigger
                  asChild={(props) => (
                    <Button variant='ghost' {...props()}>
                      <DatePickerRangeText />
                    </Button>
                  )}
                />
                <DatePickerNextTrigger
                  asChild={(props) => (
                    <Button variant='outline' size='icon' {...props()}>
                      &gt;
                    </Button>
                  )}
                />
              </DatePickerViewControl>
              <DatePickerTable>
                <DatePickerTableHeader>
                  <DatePickerTableRow>
                    <DatePickerTableHead>Su</DatePickerTableHead>
                    <DatePickerTableHead>Mo</DatePickerTableHead>
                    <DatePickerTableHead>Tu</DatePickerTableHead>
                    <DatePickerTableHead>We</DatePickerTableHead>
                    <DatePickerTableHead>Th</DatePickerTableHead>
                    <DatePickerTableHead>Fr</DatePickerTableHead>
                    <DatePickerTableHead>Sa</DatePickerTableHead>
                  </DatePickerTableRow>
                </DatePickerTableHeader>
                <DatePickerTableBody>
                  {Array.from({ length: 5 }).map((_, week) => (
                    <DatePickerTableRow>
                      {Array.from({ length: 7 }).map((_, day) => (
                        <DatePickerTableCell value={{ day: day + 1, month: 1, year: 2024 }}>
                          <DatePickerTableCellTrigger
                            asChild={(props) => (
                              <Button variant='ghost' size='icon' {...props()}>
                                {day + 1}
                              </Button>
                            )}
                          />
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))}
                </DatePickerTableBody>
              </DatePickerTable>
            </DatePickerView>
            <DatePickerViews />
          </DatePickerContent>
        </DatePickerPositioner>
      </DatePicker>
    </div>
  </div>
);

export const Route = createFileRoute('/components/date-picker')({
  component: DatePickerDocPage,
});

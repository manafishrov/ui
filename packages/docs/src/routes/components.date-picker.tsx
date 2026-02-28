import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  DatePicker,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerViews,
} from '@manafishrov/ui/date-picker';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const DatePickerDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Date Picker</H1>
      <Lead>{m.docs_component_date_picker_description()}</Lead>
    </div>

    <div class='space-y-4'>
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

import type { Component } from 'solid-js';

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafish/ui/radio-group';
import { createFileRoute } from '@tanstack/solid-router';

const RadioGroupDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>RadioGroup</h1>
      <p class='mt-2 text-muted-foreground'>
        A set of checkable buttons—known as radio buttons—where no more than one of the buttons can
        be checked at a time.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <RadioGroup defaultValue='comfortable'>
        <RadioGroupLabel>Spacing</RadioGroupLabel>
        <div class='space-y-2 mt-2'>
          <RadioGroupItem value='default'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Default</RadioGroupItemText>
          </RadioGroupItem>
          <RadioGroupItem value='comfortable'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Comfortable</RadioGroupItemText>
          </RadioGroupItem>
          <RadioGroupItem value='compact'>
            <RadioGroupItemControl />
            <RadioGroupItemText>Compact</RadioGroupItemText>
          </RadioGroupItem>
        </div>
      </RadioGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/radio-group')({
  component: RadioGroupDocPage,
});

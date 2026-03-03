import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { For, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

const spacingOptions = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
] as const;

const RadioGroupDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Radio Group</H1>
      <Lead>{m.docs_component_radio_group_description()}</Lead>
    </div>

    <RadioGroup name='spacing' defaultValue='comfortable'>
      <RadioGroupLabel>Spacing</RadioGroupLabel>
      <For each={spacingOptions}>
        {(option) => (
          <RadioGroupItem value={option.value}>
            <RadioGroupItemControl />
            <RadioGroupItemText>{option.label}</RadioGroupItemText>
          </RadioGroupItem>
        )}
      </For>
    </RadioGroup>
  </div>
);

export const Route = createFileRoute('/components-radio-group')({
  component: RadioGroupDocPage,
});

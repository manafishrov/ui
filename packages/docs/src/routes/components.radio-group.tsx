import type { Component } from 'solid-js';

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from '@manafishrov/ui/radio-group';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const RadioGroupDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Radio Group</H1>
      <Lead>{m.docs_component_radio_group_description()}</Lead>
    </div>

    <div class='space-y-4'>
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

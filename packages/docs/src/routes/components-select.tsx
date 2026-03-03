import type { Component } from 'solid-js';

import { createListCollection } from '@manafishrov/ui';
import {
  SelectControl,
  SelectList,
  Select,
  SelectLabel,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectIndicator,
  SelectClearTrigger,
  SelectPositioner,
  SelectContent,
  SelectItemGroupLabel,
  SelectItem,
  SelectSeparator,
} from '@manafishrov/ui/select';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';
const fruits = createListCollection({
  items: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Pineapple', value: 'pineapple' },
  ],
});

const SelectDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Select</H1>
      <Lead>{m.docs_component_select_description()}</Lead>
    </div>

    <Select collection={fruits} class='w-56'>
      <SelectLabel class='sr-only'>Fruit</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValue placeholder='Select a fruit' />
          <div class='gap-1 ml-auto flex items-center'>
            <SelectClearTrigger />
            <SelectIndicator />
          </div>
        </SelectTrigger>
      </SelectControl>
      <SelectPositioner>
        <SelectContent>
          <SelectList>
            <SelectGroup>
              <SelectItemGroupLabel>Fruits</SelectItemGroupLabel>
              <SelectSeparator />
              {fruits.items.map((item) => (
                <SelectItem item={item}>{item.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectList>
        </SelectContent>
      </SelectPositioner>
    </Select>
  </div>
);

export const Route = createFileRoute('/components-select')({
  component: SelectDocPage,
});

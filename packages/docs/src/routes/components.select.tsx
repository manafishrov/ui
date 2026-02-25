import type { Component } from 'solid-js';

import { createListCollection } from '@manafishrov/ui';
import { Button } from '@manafishrov/ui/button';
import {
  SelectControl,
  SelectHiddenSelect,
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
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';
const frameworks = createListCollection({
  items: [
    { label: 'Solid', value: 'solid' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
});

const SelectDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Select</H1>
      <Lead>{m.docs_component_select_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <Select collection={frameworks} class='w-[300px]'>
        <SelectLabel>Framework</SelectLabel>
        <div class='gap-2 flex items-center'>
          <SelectControl>
            <SelectTrigger
              asChild={(props) => (
                <Button variant='outline' class='w-[200px] justify-between' {...props()}>
                  <SelectValue placeholder='Select a framework' />
                  <SelectIndicator>▼</SelectIndicator>
                </Button>
              )}
            />
          </SelectControl>
          <SelectClearTrigger
            asChild={(props) => (
              <Button variant='ghost' size='icon' {...props()}>
                ✕
              </Button>
            )}
          />
        </div>
        <SelectPositioner>
          <SelectContent>
            <SelectList>
              <SelectGroup>
                <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                <SelectSeparator />
                {frameworks.items.map((item) => (
                  <SelectItem item={item}>{item.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectList>
          </SelectContent>
        </SelectPositioner>
      </Select>
    </div>
  </div>
);

export const Route = createFileRoute('/components/select')({
  component: SelectDocPage,
});

import type { Component } from 'solid-js';

import { createListCollection } from '@ark-ui/solid';
import { Button } from '@manafish/ui/button';
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
} from '@manafish/ui/select';
import { createFileRoute } from '@tanstack/solid-router';
const frameworks = createListCollection({
  items: [
    { label: 'Solid', value: 'solid' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
});

const SelectDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Select</h1>
      <p class='mt-2 text-muted-foreground'>
        Displays a list of options for the user to pick from.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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

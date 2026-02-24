import type { Component } from 'solid-js';

import { createListCollection } from '@manafishrov/ui';
import { Button } from '@manafishrov/ui/button';
import {
  Combobox,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxClearTrigger,
  ComboboxInput,
  ComboboxPositioner,
  ComboboxContent,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
} from '@manafishrov/ui/combobox';
import { createFileRoute } from '@tanstack/solid-router';
const frameworks = createListCollection({
  items: [
    { label: 'Solid', value: 'solid' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
});

const ComboboxDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Combobox</h1>
      <p class='mt-2 text-muted-foreground'>
        Autocomplete input and command palette with a list of suggestions.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Combobox collection={frameworks} class='w-[300px]'>
        <ComboboxLabel>Framework</ComboboxLabel>
        <div class='gap-2 flex items-center'>
          <ComboboxInput placeholder='Select framework...' />
          <ComboboxTrigger
            asChild={(props) => (
              <Button variant='outline' size='icon' {...props()}>
                ▼
              </Button>
            )}
          />
          <ComboboxClearTrigger
            asChild={(props) => (
              <Button variant='ghost' size='icon' {...props()}>
                ✕
              </Button>
            )}
          />
        </div>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxList>
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
                <ComboboxSeparator />
                {frameworks.items.map((item) => (
                  <ComboboxItem item={item}>{item.label}</ComboboxItem>
                ))}
              </ComboboxItemGroup>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPositioner>
      </Combobox>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>With Chips</h2>
      <Combobox collection={frameworks} multiple class='w-[300px]'>
        <ComboboxLabel>Frameworks (Multiple)</ComboboxLabel>
        <div class='gap-2 flex items-center'>
          <ComboboxChipsInput placeholder='Select frameworks...' />
          <ComboboxTrigger
            asChild={(props) => (
              <Button variant='outline' size='icon' {...props()}>
                ▼
              </Button>
            )}
          />
        </div>
        <ComboboxChips>
          {frameworks.items.map((item) => (
            <ComboboxChip>
              {item.label}
              <ComboboxClearTrigger
                asChild={(props) => (
                  <Button variant='ghost' size='sm' class='h-4 w-4 p-0 ml-2' {...props()}>
                    ✕
                  </Button>
                )}
              />
            </ComboboxChip>
          ))}
        </ComboboxChips>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxList>
              {frameworks.items.map((item) => (
                <ComboboxItem item={item}>{item.label}</ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPositioner>
      </Combobox>
    </div>
  </div>
);

export const Route = createFileRoute('/components/combobox')({
  component: ComboboxDocPage,
});

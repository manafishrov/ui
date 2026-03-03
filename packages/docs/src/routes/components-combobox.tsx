import { createListCollection } from '@manafishrov/ui';
import {
  Combobox,
  ComboboxLabel,
  ComboboxControl,
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
  ComboboxContext,
} from '@manafishrov/ui/combobox';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { type Component, For } from 'solid-js';

import * as m from '@/paraglide/messages';

type FrameworkItem = (typeof frameworks.items)[number];
const frameworks = createListCollection({
  items: [
    { label: 'Solid', value: 'solid' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ],
});

const comboboxDocContent = (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Combobox</H1>
      <Lead>{m.docs_component_combobox_description()}</Lead>
    </div>

    <Combobox collection={frameworks} class='max-w-xs'>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder='Select framework...' />
        <div class='gap-1 flex items-center'>
          <ComboboxClearTrigger />
          <ComboboxTrigger />
        </div>
      </ComboboxControl>
      <ComboboxPositioner>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              <For each={frameworks.items}>
                {(item) => <ComboboxItem item={item}>{item.label}</ComboboxItem>}
              </For>
            </ComboboxItemGroup>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </ComboboxPositioner>
    </Combobox>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_multiple()}</H2>
      <Combobox collection={frameworks} multiple class='max-w-xs'>
        <ComboboxLabel>Frameworks (Multiple)</ComboboxLabel>
        <ComboboxContext<FrameworkItem>>
          {(context) => (
            <div class='gap-1.5 mb-1.5 min-h-6 flex flex-wrap items-center'>
              <For each={context().selectedItems}>
                {(item) => <span class='px-2 py-0.5 text-xs rounded bg-muted'>{item.label}</span>}
              </For>
            </div>
          )}
        </ComboboxContext>
        <ComboboxControl>
          <ComboboxInput placeholder='Select frameworks...' />
          <div class='gap-1 flex items-center'>
            <ComboboxClearTrigger />
            <ComboboxTrigger />
          </div>
        </ComboboxControl>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxList>
              <For each={frameworks.items}>
                {(item) => <ComboboxItem item={item}>{item.label}</ComboboxItem>}
              </For>
            </ComboboxList>
          </ComboboxContent>
        </ComboboxPositioner>
      </Combobox>
    </div>
  </div>
);

const ComboboxDocPage: Component = () => comboboxDocContent;

export const Route = createFileRoute('/components-combobox')({
  component: ComboboxDocPage,
});

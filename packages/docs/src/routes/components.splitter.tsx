import type { Component } from 'solid-js';

import { Splitter, SplitterPanel, SplitterResizeTrigger } from '@manafishrov/ui/splitter';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SplitterDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Splitter</H1>
      <Lead>{m.docs_component_splitter_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <h3 class='text-lg font-semibold'>{m.docs_example_basic()}</h3>
      <Splitter panels={[{ id: 'left' }, { id: 'right' }]} class='h-64 w-full rounded-lg border'>
        <SplitterPanel id='left' class='bg-muted p-4'>
          Left Panel
        </SplitterPanel>
        <SplitterResizeTrigger id='left:right' aria-label='Resize' withHandle />
        <SplitterPanel id='right' class='bg-muted p-4'>
          Right Panel
        </SplitterPanel>
      </Splitter>
    </div>

    <div class='space-y-4'>
      <h3 class='text-lg font-semibold'>{m.docs_example_vertical()}</h3>
      <Splitter
        orientation='vertical'
        panels={[{ id: 'top' }, { id: 'bottom' }]}
        class='h-64 w-full rounded-lg border'
      >
        <SplitterPanel id='top' class='bg-muted p-4'>
          Top Panel
        </SplitterPanel>
        <SplitterResizeTrigger id='top:bottom' aria-label='Resize' />
        <SplitterPanel id='bottom' class='bg-muted p-4'>
          Bottom Panel
        </SplitterPanel>
      </Splitter>
    </div>

    <div class='space-y-4'>
      <h3 class='text-lg font-semibold'>{m.docs_example_multiple()}</h3>
      <Splitter
        panels={[{ id: 'a' }, { id: 'b' }, { id: 'c' }]}
        class='h-64 w-full rounded-lg border'
      >
        <SplitterPanel id='a' class='bg-muted p-4'>
          Panel A
        </SplitterPanel>
        <SplitterResizeTrigger id='a:b' aria-label='Resize' withHandle />
        <SplitterPanel id='b' class='bg-muted p-4'>
          Panel B
        </SplitterPanel>
        <SplitterResizeTrigger id='b:c' aria-label='Resize' withHandle />
        <SplitterPanel id='c' class='bg-muted p-4'>
          Panel C
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
);

export const Route = createFileRoute('/components/splitter')({
  component: SplitterDocPage,
});

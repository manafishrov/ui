import type { Component } from 'solid-js';

import { Splitter, SplitterPanel, SplitterResizeTrigger } from '@manafishrov/ui/splitter';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const splitterDocContent = (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Splitter</H1>
      <Lead>{m.docs_component_splitter_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <h3 class='text-lg font-semibold'>{m.docs_example_basic()}</h3>
      <Splitter panels={[{ id: 'left' }, { id: 'right' }]} class='h-64 w-full rounded-lg border'>
        <SplitterPanel id='left' class='p-4 bg-muted'>
          Left Panel
        </SplitterPanel>
        <SplitterResizeTrigger id='left:right' aria-label='Resize' withHandle />
        <SplitterPanel id='right' class='p-4 bg-muted'>
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
        <SplitterPanel id='top' class='p-4 bg-muted'>
          Top Panel
        </SplitterPanel>
        <SplitterResizeTrigger id='top:bottom' aria-label='Resize' />
        <SplitterPanel id='bottom' class='p-4 bg-muted'>
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
        <SplitterPanel id='a' class='p-4 bg-muted'>
          Panel A
        </SplitterPanel>
        <SplitterResizeTrigger id='a:b' aria-label='Resize' withHandle />
        <SplitterPanel id='b' class='p-4 bg-muted'>
          Panel B
        </SplitterPanel>
        <SplitterResizeTrigger id='b:c' aria-label='Resize' withHandle />
        <SplitterPanel id='c' class='p-4 bg-muted'>
          Panel C
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
);

const SplitterDocPage: Component = () => splitterDocContent;

export const Route = createFileRoute('/components-splitter')({
  component: SplitterDocPage,
});
